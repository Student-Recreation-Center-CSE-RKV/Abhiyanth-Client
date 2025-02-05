import React, { useState } from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import uploadImage from "../../../api/uploadImage";
import { addNews } from "../../../api/news";
import { convertDateTimeCombinedToFirebaseTimestamp } from "../../../utils/timeStampToDate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddNews = () => {
    const [newsData, setNewsData] = useState({
        title: "",
        short_description: "",
        description: "",
        image: null,
        date: "",
    });

    const [imagePreview, setImagePreview] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleChange = (e) => {
        setNewsData({ ...newsData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewsData({ ...newsData, image: file });
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async () => {
        if (!newsData.title || !newsData.short_description || !newsData.description || !newsData.image) {
            alert("Please fill all fields and upload an image.");
            return;
        }

        setUploading(true);
        try {
            const imageUrl = await uploadImage(newsData.image, "gallery");
            const formattedDate = await convertDateTimeCombinedToFirebaseTimestamp(newsData.date)
            const foramatedNews = {
                title: newsData.title,
                short_description: newsData.short_description,
                description: newsData.description,
                image: imageUrl,
                date: formattedDate,
            }
            await addNews(foramatedNews);

            toast.success("News added successfully!");
            setNewsData({
                title: "",
                short_description: "",
                description: "",
                image: null,
                date: "",
            });
            setImagePreview(null);
        } catch (error) {
            console.error("Error adding news:", error);
            alert("Failed to add news.");
        } finally {
            setUploading(false);
        }
    };

    return (
        <Box p={3}>
            <Typography variant="h4" mb={2}>
                Add News
            </Typography>
            <TextField
                label="Title"
                name="title"
                value={newsData.title}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Short Description"
                name="short_description"
                value={newsData.short_description}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Description"
                name="description"
                value={newsData.description}
                onChange={handleChange}
                fullWidth
                multiline
                rows={4}
                margin="normal"
            />

            <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold", textAlign: "left" }}>Image:</Typography>
            <input type="file" accept="image/*" onChange={handleImageChange} style={{ marginTop: "10px" }} />

            {imagePreview && (
                <Box mt={2} mb={2}>
                    <img src={imagePreview} alt="Preview" width="200px" style={{ borderRadius: "8px" }} />
                </Box>
            )}

            <TextField
                label="Date"
                name="date"
                type="datetime-local"
                value={newsData.date}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <Button variant="contained" color="primary" disabled={!newsData.date || !newsData.title} onClick={handleSubmit} sx={{ mt: 2 }}>
                {uploading ? "Uploading..." : "Submit"}
            </Button>

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
};
