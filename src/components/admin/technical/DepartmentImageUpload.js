import React, { useState } from "react";
import uploadImage from "../../../api/uploadImage";
import { Box, Typography, Button, TextField, Avatar, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { addImageToDepartmentArray } from "../../../api/technicalEvents";

const DepartmentCarouselImageUploader = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");
  const [department, setDepartment] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleUpload = async () => {
    if (!department) {
      setMessage("Please select a department first!");
      return;
    }

    try {
      setMessage("Uploading...");
      const imageUrl = await uploadImage(image, "departmentCarousel"); // Pass department as collection name
      const res=await addImageToDepartmentArray(imageUrl,department);
      setMessage(res.message);
      console.log("Image URL:", imageUrl);
      console.log("Department:", department);
    } catch (error) {
      setMessage(`Upload failed: ${error.message}`);
    } finally {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        height: "100vh",
        margin: "auto",
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Upload Image for Department Carousel
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Select Department</InputLabel>
        <Select
          value={department}
          onChange={handleDepartmentChange}
          label="Select Department"
        >
          {["CSE", "ECE", "EEE", "MECHANICAL", "CHEMICAL", "CIVIL","MME"].map((dept) => (
            <MenuItem key={dept} value={dept}>
              {dept}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        type="file"
        inputProps={{ accept: "image/*" }}
        onChange={handleImageChange}
        fullWidth
        sx={{ mb: 2 }}
      />
      {preview && (
        <Avatar
          src={preview}
          alt="Selected"
          variant="rounded"
          sx={{ width: 200, height: 200, margin: "10px auto" }}
        />
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpload}
        fullWidth
        sx={{ mb: 2 }}
      >
        Upload
      </Button>
      <Typography variant="body1" color="textSecondary">
        {message}
      </Typography>
    </Box>
  );
};

export default DepartmentCarouselImageUploader;
