import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { MenuItem, Typography, Box } from "@mui/material";
import { useState } from "react";
import uploadImage from "../../api/uploadImage";
import { convertDateTimeToFirebaseTimestamp } from "../../utils/timeStampToDate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CircularProgress } from "@mui/material";


const currencies = [
  { value: "completed", label: "Completed" },
  { value: "ongoing", label: "Ongoing" },
  { value: "live", label: "Live" },
  { value: "upcoming", label: "Upcoming" },
];

const AddEventByAdmin = ({
  onAddEvent,
  newEvent,
  openDialog,
  onCloseDialog,
}) => {
  const [numOrganizers, setNumOrganizers] = React.useState(2);
  const [formData, setFormData] = useState(newEvent);
  const [numLinks, setNumLinks] = useState(1);
  const [numResults, setNumResults] = useState(0);
  const [imagePreviewMain, setImagePreviewMain] = useState("");
  const [imagePreviewRight, setImagePreviewRight] = useState("");
  const [imagePreviewLast, setImagePreviewLast] = useState("");
  const [imagePreviewLeft, setImagePreviewLeft] = useState("");
  const [uploading, setUploading] = useState(false);


  const imagesData = [
    {
      label: "Main Image",
      field: "mainImage",
      preview: imagePreviewMain,
    },
    {
      label: "Last Image",
      field: "lastImage",
      preview: imagePreviewLast,
    },
    {
      label: "Description Image Left",
      field: "descImageLeft",
      preview: imagePreviewLeft,
    },
    {
      label: "Description Image Right",
      field: "descImageRight",
      preview: imagePreviewRight,
    },
  ];

  console.log(formData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
   
  };

  const handleNumOrganizersChange = (e) => {
    const num = parseInt(e.target.value, 10) || 0;
    setNumOrganizers(num);
  };
  const handleOrganizerChange = (index, field, value) => {
    const organizers = [...formData.organizers];
    organizers[index] = { ...organizers[index], [field]: value };
    setFormData((prev) => ({ ...prev, organizers }));
  };

  const handleLinksChange = (index, field, value) => {
    const links = [...formData.links];
    links[index] = { ...links[index], [field]: value };
    setFormData((prev) => ({ ...prev, links }));
  };

  const handleResultsChange = (index, value) => {
    const results = [...formData.results];
    results[index] = value;
    setFormData((prev) => ({ ...prev, results }));
  };

  const handleCloseDialog = () => {
    setFormData(newEvent);
    setImagePreviewMain("");
    setImagePreviewRight("");
    setImagePreviewLast("");
    setImagePreviewLeft("");
    onCloseDialog();
  }


  const handleImageUpload = async (field, file) => {
    if (!file) return;
    if (field === "mainImage") setImagePreviewMain(URL.createObjectURL(file));
    if (field === "lastImage") setImagePreviewLast(URL.createObjectURL(file));
    if (field === "descImageLeft")
      setImagePreviewLeft(URL.createObjectURL(file));
    if (field === "descImageRight")
      setImagePreviewRight(URL.createObjectURL(file));
    setUploading(true); 
    try {
      const url = await uploadImage(file, "culturalGallery"); 
      console.log(url); 
      setFormData((prev) => ({
        ...prev,
        images: { ...prev.images, [field]: url },
      }));
      console.log("main image is uploaded:", url); 
    } catch (error) {
      console.error("Error uploading image:", error.message);
      alert("Failed to upload image. Please try again.");
    } finally {
      setUploading(false); 
    }
  };

  const handleSubmit = (e) => {


    e.preventDefault();

    try {

      const firebaseTimestamp = convertDateTimeToFirebaseTimestamp(
        formData.date,
        formData.time
      );

      console.log(firebaseTimestamp);

  
      const updatedFormData = {
        ...formData,
        date: firebaseTimestamp, images: {
          ...formData.images,
          lastImage: formData.images?.lastImage || "", 
        }, 
      };

      onAddEvent(updatedFormData); 
      toast.success("Event added Successfully")
      // alert("Event added successfully")
      setFormData(newEvent); 
      setImagePreviewMain("");
      setImagePreviewRight("");
      setImagePreviewLast("");
      setImagePreviewLeft("");
      onCloseDialog(); 
    } catch (error) {
      console.error("Error converting date and time:", error.message);
    }
  };



  return (
    <React.Fragment>
      <Dialog open={openDialog} onClose={onCloseDialog}>
        <DialogTitle>Add Event</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
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
              value={formData.description}
              onChange={handleInputChange}
            />
            <TextField
              id="main description"
              margin="dense"
              label="main Description"
              name="mainDescription"
              type="text"
              fullWidth
              multiline
              rows={4}
              value={formData.mainDescription}
              onChange={handleInputChange}
            />
            <TextField
              id="secondary description"
              margin="dense"
              label="secondary Description"
              name="secondaryDescription"
              type="text"
              fullWidth
              multiline
              rows={4}
              value={formData.secondaryDescription}
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
              sx={{ marginTop: "1.5rem" }}
              value={formData.status}
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
              sx={{ marginTop: "1.5rem" }}
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
              sx={{ marginTop: "1.5rem" }}
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
                  value={formData.organizers[index]?.name || ""}
                  onChange={(e) =>
                    handleOrganizerChange(index, "name", e.target.value)
                  }
                />
                <TextField
                  margin="dense"
                  id={`organizer-mobile-${index}`}
                  name={`organizers.${index}.mobile`}
                  label={`Organizer ${index + 1} Mobile`}
                  variant="outlined"
                  value={formData.organizers[index]?.mobile || ""}
                  onChange={(e) =>
                    handleOrganizerChange(index, "mobile", e.target.value)
                  }
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
                  value={formData.links?.[index]?.text || ""}
                  onChange={(e) =>
                    handleLinksChange(index, "text", e.target.value)
                  }
                />
                <TextField
                  margin="dense"
                  label={`Link ${index + 1} URL`}
                  value={formData.links?.[index]?.link || ""}
                  onChange={(e) =>
                    handleLinksChange(index, "link", e.target.value)
                  }
                />
              </div>
            ))}
            
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
                value={formData.results?.[index] || ""}
                onChange={(e) => handleResultsChange(index, e.target.value)}
              />
            ))}


            <TextField
              margin="dense"
              id="register_link"
              name="register_link"
              label="registration Link"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.register_link}
              onChange={handleInputChange}
            />
            {imagesData.map(({ label, field, preview }, index) => (
              <Box key={index} sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                  {label}
                </Typography>
                <TextField
                  type="file"
                  inputProps={{ accept: "image/*" }}
                  onChange={(e) => handleImageUpload(field, e.target.files[0])}
                  sx={{
                    mb: 2,
                    "& .MuiInputBase-root": {
                      padding: "8px",
                    },
                  }}
                />
                {preview &&  (
                  <Box>
                    {uploading ? (
                      <CircularProgress />
                    ) : (
                      <img src={preview} alt={label} style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }} />
                    )}
                  </Box>
                )}
              </Box>
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button type="submit"
              disabled={!imagePreviewMain || !imagePreviewLeft || !imagePreviewRight}
            >
              Add Event 
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      <ToastContainer position="top-right" autoClose={3000} />
    </React.Fragment>
  );
};

export default AddEventByAdmin;
