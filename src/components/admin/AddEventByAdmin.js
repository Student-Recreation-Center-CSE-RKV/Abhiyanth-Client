import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { MenuItem, Typography, Avatar, Box } from "@mui/material";
import { useState } from "react";
import uploadImage from "../../api/uploadImage";
import { convertDateTimeToFirebaseTimestamp } from "../../utils/timeStampToDate";

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
  const [open, setOpen] = React.useState(false);
  const [numOrganizers, setNumOrganizers] = React.useState(2);
  const [formData, setFormData] = useState(newEvent);
  const [numLinks, setNumLinks] = useState(1);
  const [numResults, setNumResults] = useState(0);
  const [imagePreviewMain, setImagePreviewMain] = useState("");
  const [imagePreviewRight, setImagePreviewRight] = useState("");
  const [imagePreviewLast, setImagePreviewLast] = useState("");
  const [imagePreviewLeft, setImagePreviewLeft] = useState("");
  const [isUploading, setIsUploading] = useState(false);

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
    // setFormData({ ...formData, id: e.target.value })
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

  const handleImageChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      images: { ...prev.images, [field]: value },
    }));
  };

  const handleImageUpload = async (field, file) => {
    if (!file) return;
    if (field === "mainImage") setImagePreviewMain(URL.createObjectURL(file));
    if (field === "lastImage") setImagePreviewLast(URL.createObjectURL(file));
    if (field === "descImageLeft")
      setImagePreviewLeft(URL.createObjectURL(file));
    if (field === "descImageRight")
      setImagePreviewRight(URL.createObjectURL(file));
    setIsUploading(true); // Show uploading state
    try {
      const url = await uploadImage(file, "culturalGallery"); // Upload image and get URL
      console.log(url); // Log the uploaded image URL
      setFormData((prev) => ({
        ...prev,
        images: { ...prev.images, [field]: url },
      }));
      console.log("main image is uploaded:", url); // Confirm upload
    } catch (error) {
      console.error("Error uploading image:", error.message);
      alert("Failed to upload image. Please try again.");
    } finally {
      setIsUploading(false); // Hide uploading state
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Convert date and time to Firebase Timestamp
      const firebaseTimestamp = convertDateTimeToFirebaseTimestamp(
        formData.date,
        formData.time
      );

      console.log(firebaseTimestamp);

      // Update the formData with the Firebase Timestamp
      const updatedFormData = {
        ...formData,
        date: firebaseTimestamp, // Assuming you combine date and time into one field
      };

      onAddEvent(updatedFormData); // Pass the updated event data to the parent component
      setFormData(newEvent); // Reset the form data
      onCloseDialog(); // Close the dialog
    } catch (error) {
      console.error("Error converting date and time:", error.message);
    }
  };

  //   const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onAddEvent(formData); // Pass the new event data to the parent component
  //   setFormData(newEvent)
  //   // handleClose();
  //   onCloseDialog();

  // };

  const handleClickOpen = () => {
    setOpen(true);
    setFormData(newEvent);
  };

  const handleClose = () => setOpen(false);

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
                  // id={organizer-name-${index}}
                  // name={organizers.${index}.name}
                  // label={Organizer ${index + 1} Name}
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
                value={formData.results?.[index] || ""}
                onChange={(e) => handleResultsChange(index, e.target.value)}
              />
            ))}
            {imagesData.map(({ label, field, preview }, index) => (
              <Box key={index} sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                  {label}
                </Typography>
                <TextField
                  required
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
                {preview && (
                  <Avatar
                    src={preview}
                    alt={label}
                    variant="rounded"
                    sx={{
                      width: 200,
                      height: 200,
                      margin: "10px auto",
                      border: "1px solid #ccc",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                )}
              </Box>
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={onCloseDialog}>Cancel</Button>
            <Button type="submit">Add Event</Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
};

export default AddEventByAdmin;
