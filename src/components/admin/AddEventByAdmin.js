import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { MenuItem  } from '@mui/material';
import { useState } from 'react';


const currencies = [
  { value: 'completed', label: 'Completed' },
  { value: 'ongoing', label: 'Ongoing' },
  { value: 'live', label: 'Live' },
  { value: 'upcoming', label: 'Upcoming' },
];

const AddEventByAdmin = ({onAddEvent ,newEvent , openDialog , onCloseDialog}) => {
  const [open, setOpen] = React.useState(false);
  const [numOrganizers, setNumOrganizers] = React.useState(2);
  const [formData , setFormData] = useState(newEvent);
  const [numLinks , setNumLinks] = useState(1);
  const [numResults, setNumResults] = useState(0);


 

  const handleInputChange = (e) => {
    const {name , value} =e.target
    setFormData((prev) =>({...prev , [name] :value}))
    // setFormData({ ...formData, id: e.target.value })
  }

  const handleNumOrganizersChange = (e) => {
    const num = parseInt(e.target.value, 10) || 0;
    setNumOrganizers(num);
  };
  const handleOrganizerChange = (index ,field , value) =>{
    const organizers = [...formData.organizers]
    organizers[index] ={...organizers[index] , [field]:value}
    setFormData((prev) =>({...prev , organizers}));
  }


  const handleLinksChange = (index  , field , value) =>{
    const links = [...formData.links];
    links[index] = {...links[index] ,[field] :value}
    setFormData((prev) =>({...prev , links}));
  }

  const handleResultsChange =(index , value) =>{
    const results = [...formData.results];
    results[index] = value;
    setFormData((prev) =>({...prev , results}));
  }

  const handleImageChange = (field , value) =>{
    setFormData((prev) =>({...prev, images:{...prev.images , [field]: value}}))
  }

    const handleSubmit = (e) => {
    e.preventDefault();
    onAddEvent(formData); // Pass the new event data to the parent component
    setFormData(newEvent)
    // handleClose();
    onCloseDialog();

  };

  const handleClickOpen = () =>{
    setOpen(true);
    setFormData(newEvent)
  }
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>

      <Dialog open={openDialog} onClose={onCloseDialog} >
        <DialogTitle>Add Event</DialogTitle>
            <form  onSubmit={handleSubmit}>
              <DialogContent >
                <TextField
                  required
                  margin="dense"
                  id="title"
                  name="name"
                  label="Title"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <TextField
                  required
                  margin="dense"
                  id="description"
                  name="description"
                  label="Description"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value = {formData.description}
                  onChange={handleInputChange}
                />
                <TextField
                  required
                  select
                  margin="dense"
                  id="select"
                  name="status"
                  label="Status"
                  defaultValue="completed"
                  variant="outlined"
                  fullWidth
                  sx={{marginTop : '1.5rem'}}
                  value ={formData.status}
                  onChange={handleInputChange}
                >
                  {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
                  ))}
                </TextField>
                <TextField
                  required
                  margin="dense"
                  id="date"
                  name="date"
                  label="Event Date"
                  type="date"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  sx={{marginTop : '1.5rem'}}
                  value={formData.date}
                  onChange={handleInputChange}
                />
                <TextField
                  required
                  margin="dense"
                  id="time"
                  name="time"
                  label="Event Time"
                  type="time"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  sx={{marginTop : '1.5rem'}}
                  value={formData.time}
                  onChange={handleInputChange}
                />
                <TextField
                  required
                  margin="dense"
                  id="venue"
                  name="venue"
                  label="Event Venue"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={formData.venue}
                  onChange={handleInputChange}
                />
                <TextField
                  required
                  margin="dense"
                  id="numOrganizers"
                  name="numOrganizers"
                  label="Number of Organizers"
                  type="number"
                  fullWidth
                  variant="outlined"
                  value={numOrganizers}
                  onChange={handleNumOrganizersChange}
                />
                {Array.from({ length: numOrganizers }).map((_, index) => (
                  <div key={index}>
                    <TextField
                    
                      margin="dense"
                      id={`organizer-name-${index}`}
                      name={`organizers.${index}.name`}
                      label={`Organizer ${index + 1} Name`}
                      
                      variant="outlined"
                      value={formData.organizers[index]?.name || ''}
                      onChange={(e)=>handleOrganizerChange(index, 'name' ,e.target.value)}
                    />
                    <TextField
                      margin="dense"
                      id={`organizer-mobile-${index}`}
                      name={`organizers.${index}.mobile`}
                      label={`Organizer ${index + 1} Mobile`}
                    
                      variant="outlined"
                      value={formData.organizers[index]?.mobile || ''}
                      onChange={(e)=>handleOrganizerChange(index ,'mobile' , e.target.value)}
                    />
                  </div>
                ))}

              <TextField
                margin="dense"
                label="Number of Links"
                type="number"
                name="links"
                fullWidth
                value={numLinks}
                onChange={(e) => setNumLinks(Number(e.target.value))}
              />
              {Array.from({ length: numLinks }).map((_, index) => (
                <div key={index}>
                  <TextField
                    margin="dense"
                    label={`Link ${index + 1} Text`}
                    value={formData.links?.[index]?.text || ''}
                    onChange={(e) =>
                      handleLinksChange(index, 'text', e.target.value)
                    }
                  />
                  <TextField
                    margin="dense"
                    label={`Link ${index + 1} URL`}
                    value={formData.links?.[index]?.link || ''}
                    onChange={(e) =>
                      handleLinksChange(index, 'link', e.target.value)
                    }
                  />
                </div>
              ))}
              {/* Results */}
              <TextField
                margin="dense"
                label="Number of Results"
                type="number"
                value={numResults}
                onChange={(e) => setNumResults(Number(e.target.value))}
              />
              {Array.from({ length: numResults }).map((_, index) => (
                <TextField
                  fullWidth
                  key={index}
                  margin="dense"
                  label={`Result ${index + 1}`}
                  value={formData.results?.[index] || ''}
                  onChange={(e) => handleResultsChange(index, e.target.value)}
                />
              ))}
              {/* Images */}
              <TextField
                fullWidth
                margin="dense"
                label="Main Image URL"
                value={formData.images?.mainImage || ''}
                onChange={(e) => handleImageChange('mainImage', e.target.value)}
              />
              <TextField
                fullWidth
                margin="dense"
                label="Last Image URL"
                value={formData.images?.lastImage || ''}
                onChange={(e) => handleImageChange('lastImage', e.target.value)}
              />
              <TextField
                fullWidth
                margin="dense"
                label="descImageLeft"
                value={formData.images?.descImageLeft || ''}
                onChange={(e) => handleImageChange('descImageLeft', e.target.value)}
              />
              <TextField
                fullWidth
                margin="dense"
                label="descImageRight"
                value={formData.images?.descImageRight || ''}
                onChange={(e) => handleImageChange('descImageRight', e.target.value)}
              />
                
              </DialogContent>
              <DialogActions>
                <Button onClick={onCloseDialog}>Cancel</Button>
                <Button type="submit" >Add Event</Button>
              </DialogActions>
            </form>
      </Dialog>
    </React.Fragment>
  );
};

export default AddEventByAdmin;

