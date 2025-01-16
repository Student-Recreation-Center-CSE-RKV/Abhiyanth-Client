import React, { useState } from "react";
import { TextField, Button, Box, Typography, Grid, MenuItem, CircularProgress } from "@mui/material";
import { addVolunteer } from "../../../redux/slices/volunteerSlice";
import uploadImage from "../../../api/uploadImage";
 
import { useDispatch, useSelector } from 'react-redux';

function AddVolunteer() {
  const dispatch = useDispatch();
  const [imageFile, setImageFile] = useState(null);
  const { loading, error, success } = useSelector((state) => state.volunteerEvents);
  
  const [formData, setFormData] = useState({
    eventName: "",
    eventDescription: "",
    image: "",
    link: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle image upload and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
    const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
  };

  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      let imageUrl = '';
      if (imageFile) {
        imageUrl = await uploadImage(imageFile, 'volunteer'); 
      }
      formData.image=imageUrl;
      dispatch(addVolunteer(formData));
    } catch (error) {
      
    }
    
    
  };

  return (
    <Box sx={{ padding: 3, color: "white", maxWidth: "600px", margin: "0 auto" }}>
      <Typography variant="h4" gutterBottom sx={{ color: "white", marginBottom: 4 }}>
        Add New Volunteer Event
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* Event Name */}
          <Grid item xs={12}>
            <TextField
              label="Event Name"
              name="eventName"
              variant="outlined"
              fullWidth
              value={formData.eventName}
              onChange={handleChange}
              sx={{ input: { color: "white" } }}
            />
          </Grid>

          {/* Event Description */}
          <Grid item xs={12}>
            <TextField
              label="Event Description"
              name="eventDescription"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={formData.eventDescription}
              onChange={handleChange}
              sx={{ input: { color: "white" } }}
            />
          </Grid>

          {/* Image Upload */}
          <Grid item xs={12}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
              id="image-upload"
            />
            <label htmlFor="image-upload">
              <Button variant="outlined" component="span" color="primary">
                Upload Image
              </Button>
            </label>
            {formData.image && (
              <Box sx={{ marginTop: 2 }}>
                <img src={formData.image} alt="Event Preview" style={{ width: "100%", height: "auto" }} />
              </Box>
            )}
          </Grid>

          {/* Link */}
          <Grid item xs={12}>
            <TextField
              label="Link"
              name="link"
              variant="outlined"
              fullWidth
              value={formData.link}
              onChange={handleChange}
              sx={{ input: { color: "white" } }}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
                       <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={loading}
                        startIcon={loading && <CircularProgress size={20} />}
                      >
                        {loading ? 'Submitting...' : 'Submit'}
                      </Button>
                      
                    </Grid>
        </Grid>

        {error && (
                    <Grid item xs={12}>
                      <Typography color="error">{error}</Typography>
                    </Grid>
                  )}
                   {success && (
                    <Grid item xs={12}>
                      <Typography color="success.main">Event added successfully!</Typography>
                    </Grid>
                  )}
      </form>
    </Box>
  );
}

export default AddVolunteer;
