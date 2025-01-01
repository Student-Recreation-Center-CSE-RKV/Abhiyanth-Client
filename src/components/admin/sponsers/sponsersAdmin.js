import React, { useState } from "react";
import uploadImage from "../../../api/uploadImage";
import { Box, Typography, Button, TextField, Avatar } from "@mui/material";

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null); 
  const [message, setMessage] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setPreview(URL.createObjectURL(file)); 
    }
  };

  const handleUpload = async () => {
    try {
      setMessage("Uploading...");
      const imageUrl = await uploadImage(image, "sponsers"); 
      setMessage(`Image uploaded successfully`);
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
        margin: "auto",
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Upload New Sponsor
      </Typography>
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

export default ImageUploader;
