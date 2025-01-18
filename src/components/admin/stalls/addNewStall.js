import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Box } from "@mui/material";
import { uploadPdf } from "../../../api/general";
import uploadImage from "../../../api/uploadImage";
import { addStall } from "../../../api/stalls";

export const AddNewStall = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [image,setImage]=useState(null);
  const [imagePreview, setImagePreview] = useState(null); // For image preview

  const [formData, setFormData] = useState({
    belongTo: "",
    image: "",
    items: "",
    main_description:
      "",
    menu_card: "",
    mobile: "",
    name: "",
    short_description: "",
    timings: "",
  });

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file)); // Generate a preview URL
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpload = async () => {
    if (!file || !image) {
      alert("Please select a file to upload.(Image or pdf should not be empty)");
      return;
    }

    setUploading(true);

    try {
        const imageUrl=await uploadImage(image,"Stalls");
      const menuCardUrl = await uploadPdf(file); 
      const updatedFormData = { ...formData, menu_card: menuCardUrl,image:imageUrl };
        const res=await addStall(updatedFormData)
      
      alert("Stall Added successfully!");
    } catch (error) {
      alert("Error Occured")
    } finally {
      setUploading(false);
      setFile(null);
      setImage(null);
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h4" mb={2}>
        Add New Stall
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Stall Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Grid>
      <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Upload Image
          </Typography>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ marginBottom: "1rem" }}
          />
          {imagePreview && (
            <Box mt={2}>
              <Typography variant="subtitle1">Image Preview:</Typography>
              <img
                src={imagePreview}
                alt="Preview"
                style={{ maxWidth: "100%", maxHeight: "200px", borderRadius: "8px" }}
              />
            </Box>
          )}
        </Grid>
      
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Belong To"
            name="belongTo"
            value={formData.belongTo}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Short Description"
            name="short_description"
            value={formData.short_description}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Main Description"
            name="main_description"
            value={formData.main_description}
            onChange={handleInputChange}
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Items (comma-separated)"
            name="items"
            value={formData.items}
            onChange={handleInputChange}
            multiline
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Mobile Numbers (comma-separated)"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Timings"
            name="timings"
            value={formData.timings}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Upload Menu Card (PDF)
          </Typography>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            disabled={uploading}
            style={{ marginBottom: "1rem" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpload}
            disabled={!file || !image}
          >
            {uploading ? "Uploading..." : "Upload Details"}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
