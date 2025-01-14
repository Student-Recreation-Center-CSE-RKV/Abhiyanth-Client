import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  CircularProgress,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getAllVolunteerEvents, editVolunteerEvent,deleteVolunteerEvent } from '../../../api/volunteer';
import uploadImage from '../../../api/uploadImage';

export default function AllVolunteers() {
    const [imageFile, setImageFile] = useState(null);
  const [volunteerEvents, setVolunteerEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    eventName: '',
    eventDescription: '',
    image: '',
    link: '',
  });
  const [previewImage, setPreviewImage] = useState(''); // For image preview

  // Fetch data
  const getData = async () => {
    try {
      const res = await getAllVolunteerEvents();
      setVolunteerEvents(res); // Set the fetched data to state
    } catch (error) {
      console.error('Error fetching volunteer events:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Handle edit button click
  const handleEdit = (event) => {
    setSelectedEvent(event); // Set the selected event for editing
    setFormData({
      eventName: event.eventName,
      eventDescription: event.eventDescription,
      image: event.image,
      link: event.link,
    });
    setPreviewImage(event.image); // Set the current image for preview
    setOpenDialog(true);
  };

  const handleDelete =async (id) => {
    try {
        const res=await deleteVolunteerEvent(id);
        getData();
    } catch (error) {
        
    }
    
    
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle image file change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        setImageFile(file)
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result); // Preview the selected image
        setFormData({ ...formData, image: reader.result }); // Update the form data
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle dialog close
  const handleClose = () => {
    setOpenDialog(false);
    setSelectedEvent(null);
    setFormData({
      eventName: '',
      eventDescription: '',
      image: '',
      link: '',
    });
    setPreviewImage('');
  };

  // Handle save
  const handleSave = async () => {
    if (!selectedEvent) return;

    setLoading(true);
    try {
        let imageUrl = '';
      if (imageFile) {
        imageUrl = await uploadImage(imageFile, 'volunteer'); 
      }
      formData.image=imageUrl;
      await editVolunteerEvent(selectedEvent.id, formData); 
      getData(); // Refresh data
      handleClose();
    } catch (error) {
      console.error('Error updating volunteer event:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Volunteer Events
      </Typography>
      {volunteerEvents.map((event) => (
        <Accordion key={event.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-${event.id}-content`}
            id={`panel-${event.id}-header`}
          >
            <Typography>{event.eventName}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" gutterBottom>
              <strong>Description:</strong> {event.eventDescription}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Link:</strong>{' '}
              <a href={event.link} target="_blank" rel="noopener noreferrer">
                {event.link}
              </a>
            </Typography>
            <Box sx={{ marginY: 2 }}>
              <img
                src={event.image}
                alt={event.eventName}
                style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleEdit(event)}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleDelete(event.id)}
              >
                Delete
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Edit Dialog */}
      <Dialog open={openDialog} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Edit Volunteer Event</DialogTitle>
        <DialogContent>
          <TextField
            label="Event Name"
            name="eventName"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.eventName}
            onChange={handleChange}
          />
          <TextField
            label="Event Description"
            name="eventDescription"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={formData.eventDescription}
            onChange={handleChange}
          />
          <TextField
            label="Link"
            name="link"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.link}
            onChange={handleChange}
          />
          <Typography variant="body1" gutterBottom>
            Current Image:
          </Typography>
          {previewImage && (
            <Box sx={{ marginBottom: 2 }}>
              <img
                src={previewImage}
                alt="Preview"
                style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
              />
            </Box>
          )}
          <Button variant="contained" component="label" color="primary">
            Upload New Image
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageChange}
            />
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            color="primary"
            disabled={loading}
            startIcon={loading && <CircularProgress size={20} />}
          >
            {loading ? 'Saving...' : 'Save'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
