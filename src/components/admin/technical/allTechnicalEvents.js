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
  MenuItem
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getAllTechnicalEvents, editTechnicalEvent, deleteTechnicalEvent } from '../../../api/technicalEvents';
import uploadImage from '../../../api/uploadImage';
import { extractDateTimeFromTimestamp, convertDateTimeCombinedToFirebaseTimestamp } from '../../../utils/timeStampToDate';


export default function AllTechnicalEvents({ department }) {
  const [technicalEvents, setTechnicalEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [dataLoading, setDataLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    venue: '',
    short_description: '',
    description: '',
    registration_link: '',
    prizes: ['', '', ''],
    sponsors: ['', ''],
    result: ['', '', ''],
    amount: '',
    image: '',
    isTeam: false
  });
  const [previewImage, setPreviewImage] = useState('');

  // Fetch data
  const getData = async () => {
    try {
      setDataLoading(true);
      const res = await getAllTechnicalEvents(department);

      setTechnicalEvents(res);
      setDataLoading(false)
    } catch (error) {
      console.error('Error fetching technical events:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Handle Edit
  const handleEdit = (event) => {
    setSelectedEvent(event);
    setFormData({
      title: event.title,
      venue: event.venue, 
      short_description: event.short_description,
      description: event.description,
      registration_link: event.registration_link,
      prizes: event.prizes,
      sponsors: event.sponsors,
      result: event.result,
      amount: event.amount,
      image: event.image,
      isTeam: event.isTeam

    });
    setFormData({
      ...event,
      date: extractDateTimeFromTimestamp(event.date).date + "T" + extractDateTimeFromTimestamp(event.date).time
    });
    setPreviewImage(event.image);
    setOpenDialog(true);
  };

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      await deleteTechnicalEvent(id, department);
      getData();
    } catch (error) {
      console.error('Error deleting technical event:', error);
    }
  };

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "amount") {
      // Ensure value is a number and within the range
      const numValue = value.replace(/\D/g, ""); // Remove non-numeric characters
      const maxAmount = 10000; // Set your max limit
  
      if (numValue === "" || (parseInt(numValue, 10) >= 0 && parseInt(numValue, 10) <= maxAmount)) {
        setFormData({
          ...formData,
          [name]: numValue,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle Image Change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Dialog Close
  const handleClose = () => {
    setOpenDialog(false);
    setSelectedEvent(null);
    setFormData({
      title: '',
      date: '',
      venue: '',
      short_description: '',
      description: '',
      registration_link: '',
      prizes: ['', '', ''],
      sponsors: ['', ''],
      result: ['', '', ''],
      amount: '',
      image: '',
      isTeam: false,
    });
    setPreviewImage('');
  };

  // Handle Save
  const handleSave = async () => {
    if (!selectedEvent) return;

    setLoading(true);
    try {
      let imageUrl = '';
      if (imageFile) {
        imageUrl = await uploadImage(imageFile, 'technical');
      }
      const updatedEvent = { ...formData, image: imageUrl || formData.image, date: convertDateTimeCombinedToFirebaseTimestamp(formData.date) };
      await editTechnicalEvent(selectedEvent.id, updatedEvent, department);
      getData(); // Refresh the list
      handleClose();
    } catch (error) {
      console.error('Error updating technical event:', error);
    } finally {
      setLoading(false);
    }
  };

  if (dataLoading) {
    return (
      <>Loading .....</>
    );
  }
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Technical Events
      </Typography>
      {
        technicalEvents.length === 0 && (<Typography variant="h3" gutterBottom>
          No Events Added Till now
        </Typography>)
      }
      {technicalEvents.map((event) => (
        <Accordion key={event.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-${event.id}-content`}
            id={`panel-${event.id}-header`}
          >
            <Typography>{event.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" gutterBottom>
              <strong>Short Description:</strong> {event.short_description}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Description:</strong> {event.description}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Venue:</strong> {event.venue}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Date:</strong> {extractDateTimeFromTimestamp(event.date).date}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Time:</strong>  {extractDateTimeFromTimestamp(event.date).time}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Registration Link:</strong> {event.registration_link}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Prizes:</strong> {event.prizes.join(', ')}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Sponsors:</strong> {event.sponsors.join(', ')}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Amount:</strong> {event.amount}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Team:</strong> {event.isTeam ? "Yes" : "No"}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Result:</strong> {event.result.join(', ')}
            </Typography>
            <Box sx={{ marginY: 2 }}>
              <img
                src={event.image}
                alt={event.title}
                style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button variant="contained" color="primary" onClick={() => handleEdit(event)}>
                Edit
              </Button>
              <Button variant="contained" color="secondary" onClick={() => handleDelete(event.id)}>
                Delete
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Edit Dialog */}
      <Dialog open={openDialog} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Edit Technical Event</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            name="title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.title}
            onChange={handleChange}
          />
          <TextField
            label="Date"
            name="date"
            type="datetime-local"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.date}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Venue"
            name="venue"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.venue}
            onChange={handleChange}
          />
          <TextField
            label="Short Description"
            name="short_description"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={3}
            value={formData.short_description}
            onChange={handleChange}
          />
          <TextField
            label="Description"
            name="description"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={5}
            value={formData.description}
            onChange={handleChange}
          />
          <TextField
            label="Registration Link"
            name="registration_link"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.registration_link}
            onChange={handleChange}
          />
          <TextField
            label="Prizes (comma-separated)"
            name="prizes"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.prizes.join(', ')}
            onChange={(e) =>
              setFormData({ ...formData, prizes: e.target.value.split(',').map((p) => p.trim()) })
            }
          />
          <TextField
            label="Sponsors (comma-separated)"
            name="sponsors"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.sponsors.join(', ')}
            onChange={(e) =>
              setFormData({ ...formData, sponsors: e.target.value.split(',').map((s) => s.trim()) })
            }
          />
          <TextField
            label="Results (comma-separated)"
            name="result"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.result.join(', ')}
            onChange={(e) =>
              setFormData({ ...formData, result: e.target.value.split(',').map((r) => r.trim()) })
            }
          />
          <TextField
            label="amount"
            name="amount"
            variant="outlined"
            fullWidth
            type='text'
            margin="normal"
            value={formData.amount}
            onChange={handleChange}
          />
          <TextField
            label="Is Team?"
            name="isTeam"
            variant="outlined"
            fullWidth
            select
            value={formData.isTeam}
            onChange={(e) => setFormData({ ...formData, isTeam: e.target.value === 'true' })}
            sx={{ input: { color: 'white' } }}
          >
            <MenuItem value="true">True</MenuItem>
            <MenuItem value="false">False</MenuItem>
          </TextField>
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
            <input type="file" accept="image/*" hidden onChange={handleImageChange} />
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
