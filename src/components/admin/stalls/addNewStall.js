import React, { useEffect, useState } from "react";
import { TextField, Button, Grid, Typography, Box } from "@mui/material";
import { uploadPdf } from "../../../api/uploadPdf";
import uploadImage from "../../../api/uploadImage";
import { addStall } from "../../../api/stalls";
import { getAllStalls } from "../../../api/stalls";

export const AddNewStall = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState(null);
  const [imageLeft, setImageLeft] = useState(null);
  const [imageRight, setImageRight] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // For image preview
  const [stalls, setStalls] = useState([])
  const [numberOfOffers ,setNumberOfOffers] = useState(0)

  const [formData, setFormData] = useState({
    belongTo: "",
    contact: {
      mobile: "",
      whatsApp: ""
    },
    image: "",
    imageLeft: "",
    imageRight: "",
    items: "",
    main_description: "",
    menu_card: "",
    name: "",
    offers: [],
    short_description: "",
    timings: ""
  });


  console.log(formData)

  useEffect(() => {

    const fetchStalls = async () => {
      try {
        const apistalls = await getAllStalls();
        setStalls(apistalls)
        console.log(stalls);

      }
      catch (error) {
        console.log("error , fetching stalls")

      }
    }

    fetchStalls();
  }, [])


  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleImageChange = (event, field) => {
    const file = event.target.files[0];
  
    if (!file) return; // Exit if no file is selected.
  
    // Ensure the file is an image.
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      return;
    }
  
    // Update the local state for preview purposes.
    const previewUrl = URL.createObjectURL(file);
    if (field === "image") setImage(file);
    if (field === "imageLeft") setImageLeft(file);
    if (field === "imageRight") setImageRight(file);
  
    // Read file as base64 and update the formData dynamically.
    const reader = new FileReader();
    reader.onload = () => {
      setFormData((prev) => ({
        ...prev,
        [field]: reader.result, // Dynamically update the correct field (image, imageLeft, or imageRight).
      }));
    };
    reader.readAsDataURL(file);
  };
  


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleOffersChange= (index, value) =>{

    setFormData((prev) =>{
      const updatedOffers = [...prev.offers];
      updatedOffers[index] = value
      return {...prev  , offers:updatedOffers}
    })
  }

   const handleContactChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      contact: {
        ...prev.contact,
        [name]: value,
      },
    }));
  };
  const handleUpload = async () => {
    if (!file || !image) {
      alert("Please select a file to upload.(Image or pdf should not be empty)");
      return;
    }

    setUploading(true);

    try {
      const imageUrl = await uploadImage(image, "Stalls");
      const imageLeftUrl = await uploadImage(imageLeft, "Stalls");
      const imageRightUrl = await uploadImage(imageRight, "Stalls");
      const menuCardUrl = await uploadPdf(file, "stallsPdfs");
      const updatedFormData = { ...formData, menu_card: menuCardUrl, image: imageUrl , imageLeft : imageLeftUrl  ,imageRight : imageRightUrl };
      const res = await addStall(updatedFormData)

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
          <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
            Offers
          </Typography>
          <TextField
            fullWidth
            type="number"
            label="Number of Offers"
            value={numberOfOffers}
            onChange={(e) => {
              const value = Math.max(0, parseInt(e.target.value) || 0); // Ensure non-negative number
              setNumberOfOffers(value);
              setFormData((prev) => ({
                ...prev,
                offers: Array(value).fill(""),
              }));
            }}
            style={{ marginBottom: "1rem" }}
          />
          {formData.offers.map((offer, index) => (
            <TextField
              key={index}
              fullWidth
              label={`Offer ${index + 1}`}
              value={offer}
              onChange={(e) => handleOffersChange(index, e.target.value)}
              style={{ marginBottom: "1rem" }}
            />
          ))}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom style={{fontWeight:"bold"}}>
            Upload Images
          </Typography>

          {[
            { label: "Main Image", field: "image" },
            { label: "Left Image", field: "imageLeft" },
            { label: "Right Image", field: "imageRight" },
          ].map(({ label, field }) => (
            <Box key={field} mb={2}>
              <Typography variant="subtitle1" gutterBottom style={{ textAlign: "left", fontWeight: "bold", fontSize: "1.3rem" }}>
                {label} :
              </Typography>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, field)}
                style={{ marginBottom: "1rem" }}
              />
              {formData[field] && (
                <Box mt={2}>
                  <Typography variant="subtitle2">{label} Preview:</Typography>
                  <img
                    src={formData[field]}
                    alt={label}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "200px",
                      borderRadius: "8px",
                    }}
                  />
                </Box>
              )}
            </Box>
          ))}
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

       {/* Contact Fields */}
       <Grid item xs={6}>
          <TextField
            fullWidth
            label="Mobile"
            name="mobile"
            value={formData.contact.mobile}
            onChange={handleContactChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="WhatsApp"
            name="whatsApp"
            value={formData.contact.whatsApp}
            onChange={handleContactChange}
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
