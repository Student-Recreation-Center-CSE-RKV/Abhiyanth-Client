import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid as Grid2,
  MenuItem,
  CircularProgress,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addTechnicalEvent } from '../../../redux/slices/technicalEventsSlice';
import uploadImage from '../../../api/uploadImage';
import { convertDateTimeCombinedToFirebaseTimestamp } from '../../../utils/timeStampToDate';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddTechnicalEvent() {
  const dispatch = useDispatch();
  const [imageFile, setImageFile] = useState(null);
  const { loading, error, success } = useSelector((state) => state.technicalEvents);
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    id: '',
    image: '',
    prizes: ['', '', ''],
    registration_link: '',
    result: ['', '', ''],
    short_description: '',
    sponsors: ['', ''],
    title: '',
    venue: '',
    department: '',
    amount: '',
    isTeam: false,
  });



  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "amount") {

      const numValue = value.replace(/\D/g, "");
      const maxAmount = 10000;

      if (numValue === "" || (parseInt(numValue, 10) >= 0 && parseInt(numValue, 10) <= maxAmount)) {
        setFormData({
          ...formData,
          [name]: parseInt(numValue, 10),
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handlePrizeChange = (index, value) => {
    const newPrizes = [...formData.prizes];
    newPrizes[index] = value;
    setFormData({ ...formData, prizes: newPrizes });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = '';
      if (imageFile) {
        imageUrl = await uploadImage(imageFile, 'technical');
      }
      const eventData = {
        image: imageUrl,
        date: convertDateTimeCombinedToFirebaseTimestamp(formData.date),
        description: formData.description,
        short_description: formData.short_description,
        prizes: formData.prizes,
        result: formData.result,
        registration_link: formData.registration_link,
        sponsors: formData.sponsors,
        venue: formData.venue,
        title: formData.title,
        amount: formData.amount,
        isTeam: formData.isTeam,
      }


      dispatch(addTechnicalEvent(eventData, formData.department));
      if (!loading) toast.success('Technical event added successfully!');
      setFormData({
        date: '',
        description: '',
        id: '',
        image: '',
        prizes: ['', '', ''],
        registration_link: '',
        result: ['', '', ''],
        short_description: '',
        sponsors: ['', ''],
        title: '',
        venue: '',
        department: '',
        amount: '',
        isTeam: false,

      })

    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };


  const handleSponsorCountChange = (e) => {
    const numSponsors = Math.max(0, parseInt(e.target.value, 10));
    const updatedSponsors = Array(numSponsors).fill('');
    setFormData({ ...formData, sponsors: updatedSponsors });
  };

  return (
    <Box sx={{ padding: 3, color: 'white' }}>
      <Typography variant="h4" gutterBottom sx={{ color: 'white', marginBottom: 4 }}>
        Add Technical Event
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid2 container spacing={3}>
          <Grid2 item xs={12} sm={3}>
            <TextField
              label="Title"
              name="title"
              variant="outlined"
              fullWidth
              value={formData.title}
              onChange={handleChange}
              sx={{ input: { color: 'white' } }}
            />
          </Grid2>
          <Grid2 item xs={12} sm={3}>
            <TextField
              label="Date"
              name="date"
              variant="outlined"
              type="datetime-local"
              fullWidth
              value={formData.date}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ input: { color: 'white' } }}
            />
          </Grid2>
          <Grid2 item xs={12} sm={3}>
            <TextField
              label="Venue"
              name="venue"
              variant="outlined"
              fullWidth
              value={formData.venue}
              onChange={handleChange}
              sx={{ input: { color: 'white' } }}
            />
          </Grid2>
          <Grid2 item xs={12} sm={3}>
            <TextField
              label="Department"
              name="department"
              variant="outlined"
              fullWidth
              select
              value={formData.department}
              onChange={handleChange}
              sx={{ input: { color: 'white' } }}
            >
              {['MainEvents', 'CSE', 'ECE', 'EEE', 'Civil', 'MME', 'Chemical', 'Mechanical'].map((dept) => (
                <MenuItem key={dept} value={dept}>
                  {dept}
                </MenuItem>
              ))}
            </TextField>
          </Grid2>


          <Grid2 item xs={12}>
            <TextField
              label="Short Description"
              name="short_description"
              variant="outlined"
              fullWidth
              value={formData.short_description}
              onChange={handleChange}
              inputProps={{ maxLength: 50 }}
              sx={{ input: { color: 'white' }, marginBottom: 3 }}
            />
          </Grid2>


          <Grid2 item xs={12}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
              id="image-upload"
            />
            <label htmlFor="image-upload">
              <Button variant="outlined" component="span" color="primary">
                Upload Image
              </Button>
            </label>
            {formData.image && (
              <Box sx={{ marginTop: 2 }}>
                <img src={formData.image} alt="Event Preview" style={{ width: '100%', height: 'auto' }} />
              </Box>
            )}
          </Grid2>


          <Grid2 item xs={12}>
            <TextField
              label="Description"
              name="description"
              variant="outlined"
              fullWidth
              multiline
              rows={5}
              value={formData.description}
              onChange={handleChange}
              sx={{ input: { color: 'white' }, marginBottom: 3 }}
            />
          </Grid2>


          <Grid2 item xs={12}>
            <Typography variant="h6" sx={{ color: 'white', marginBottom: 2 }}>
              Prizes
            </Typography>
            <Grid2 container spacing={2}>
              {formData.prizes.map((prize, index) => (
                <Grid2 item xs={12} sm={4} key={index}>
                  <TextField
                    label={`Prize ${index + 1}`}
                    value={prize}
                    onChange={(e) => handlePrizeChange(index, e.target.value)}
                    fullWidth
                    sx={{ input: { color: 'white' } }}
                  />
                </Grid2>
              ))}
            </Grid2>
          </Grid2>


          <Grid2 item xs={12}>
            <Typography variant="h6" sx={{ color: 'white', marginBottom: 2 }}>
              Results
            </Typography>
            <Grid2 container spacing={2}>
              {formData.result.map((res, index) => (
                <Grid2 item xs={12} sm={4} key={index}>
                  <TextField
                    label={`Result ${index + 1}`}
                    value={res}
                    onChange={(e) => {
                      const newResult = [...formData.result];
                      newResult[index] = e.target.value;
                      setFormData({ ...formData, result: newResult });
                    }}
                    fullWidth
                    sx={{ input: { color: 'white' } }}
                  />
                </Grid2>
              ))}
            </Grid2>
          </Grid2>

          {/* Registration Link */}
          <Grid2 item xs={12}>
            <TextField
              label="Registration Link"
              name="registration_link"
              variant="outlined"
              type="url"
              fullWidth
              value={formData.registration_link}
              onChange={handleChange}
              sx={{ input: { color: 'white' }, marginBottom: 3 }}
            />
          </Grid2>

          <Grid2 item xs={12}>
            <Typography variant="h6" sx={{ color: 'white', marginBottom: 2 }}>
              Sponsors
            </Typography>
            <TextField
              label="Number of Sponsors"
              type="number"
              variant="outlined"
              value={formData.sponsors.length}
              onChange={handleSponsorCountChange}
              fullWidth
              sx={{ input: { color: 'white' }, marginBottom: 3 }}
            />
            <Grid2 container spacing={2}>
              {formData.sponsors.map((sponsor, index) => (
                <Grid2 item xs={12} sm={6} key={index}>
                  <TextField
                    label={`Sponsor ${index + 1}`}
                    value={sponsor}
                    onChange={(e) => {
                      const newSponsors = [...formData.sponsors];
                      newSponsors[index] = e.target.value;
                      setFormData({ ...formData, sponsors: newSponsors });
                    }}
                    fullWidth
                    sx={{ input: { color: 'white' } }}
                  />
                </Grid2>
              ))}
            </Grid2>
          </Grid2>
          <Grid2 item xs={12} sm={3}>
            <TextField
              label="amount"
              name="amount"
              variant="outlined"
              fullWidth
              type='text'
              value={formData.amount}
              onChange={handleChange}
              sx={{ input: { color: 'white' } }}
            />
          </Grid2>

          <Grid2 item xs={12} sm={3}>
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
          </Grid2>


          <Grid2 item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={loading}
              startIcon={loading && <CircularProgress size={20} />}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </Button>
          </Grid2>
        </Grid2>


        {error && (
          <Grid2 item xs={12}>
            <Typography color="error">{error}</Typography>
          </Grid2>
        )}
        {success && (
          <Grid2 item xs={12}>
            <Typography color="success.main">Event added successfully!</Typography>
          </Grid2>
        )}
      </form>

      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Box>
  );
}

export default AddTechnicalEvent;