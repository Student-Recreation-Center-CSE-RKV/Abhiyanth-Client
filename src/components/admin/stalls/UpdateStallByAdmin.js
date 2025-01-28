import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Typography, Box } from "@mui/material";
import {  useState } from "react";
import { handleInputChange, handleContactChange, updateOffers } from "./stallsServices/stallsServices";
import { uploadPdf } from "../../../api/uploadPdf";
import uploadImage from "../../../api/uploadImage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";


const UpdateStallByAdmin = ({ editStall, openEditDialog, onCloseEditDialog, onUpdateStall }) => {
    const [update, setUpdate] = useState(editStall);
    const [image, setImage] = useState(null);
    const [imageLeft, setImageLeft] = useState(null);
    const [imageRight, setImageRight] = useState(null);
    const [numberOfOffers, setNumberOfOffers] = useState(update.offers.length)
    const [file, setFile] = useState(null);
    const [updateing, setUpdateing] = useState(false)


    const handleOffersChange = (index, value) => {
        updateOffers(index, value, setUpdate);
    };

    const handleImageChange = (event, field) => {
        const file = event.target.files[0];

        if (!file) return; 
        if (!file.type.startsWith("image/")) {
            alert("Please select a valid image file.");
            return;
        }

        if (field === "image") setImage(file);
        if (field === "imageLeft") setImageLeft(file);
        if (field === "imageRight") setImageRight(file);

        const reader = new FileReader();
        reader.onload = () => {
            setUpdate((prev) => ({
                ...prev,
                [field]: reader.result,
            }));
        };
        reader.readAsDataURL(file);
    };


    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setUpdateing(true);
        try {

            const imageUrl = image ? await uploadImage(image, "Stalls") : null;
            const imageLeftUrl = imageLeft ? await uploadImage(imageLeft, "Stalls") : null;
            const imageRightUrl = imageRight ? await uploadImage(imageRight, "Stalls") : null;

            const menuCardUrl = file ? await uploadPdf(file, "stallsPdfs") : null;

            const updatedFormData = {
                ...update,
                menu_card: menuCardUrl || update.menu_card,
                image: imageUrl || update.image, 
                imageLeft: imageLeftUrl || update.imageLeft,
                imageRight: imageRightUrl || update.imageRight,
            };

            onUpdateStall(updatedFormData);
            alert("Stall updated successfully!");

            onCloseEditDialog();
        } catch (error) {
            console.error("Error updating stall:", error.message);
        } finally {
            setUpdateing(false);
            setFile(null);
            setImage(null);
        }
    };

    return (
        <React.Fragment>
            <ToastContainer position="top-center" autoClose={3000} />
            <Dialog open={openEditDialog} onClose={onCloseEditDialog}>
                <DialogTitle>Stall</DialogTitle>
                <form onSubmit={handleSubmit}>
                    <DialogContent>

                        <TextField
                            fullWidth
                            margin="dense"
                            id="stall name"
                            required
                            label="Stall Name"
                            variant="outlined"
                            name="name"
                            type="text"
                            value={update.name}
                            onChange={(e) => handleInputChange(e, setUpdate)}
                        />

                        <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
                            Offers
                        </Typography>
                        <TextField
                            fullWidth
                            type="number"
                            label="Number of Offers"
                            value={numberOfOffers}
                            onChange={(e) => {
                                const value = Math.max(0, parseInt(e.target.value) || 0);
                                setNumberOfOffers(value);
                                setUpdate((prev) => ({
                                    ...prev,
                                    offers: Array(value).fill(),
                                }));
                            }}
                            style={{ marginBottom: "1rem" }}
                        />
                        {update.offers.map((offer, index) => (
                            <TextField
                                required
                                key={index}
                                fullWidth
                                label={`Offer ${index + 1}`}
                                value={offer}
                                onChange={(e) => handleOffersChange(index, e.target.value)}
                                style={{ marginBottom: "1rem" }}
                            />
                        ))}

                        <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
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
                                {update[field] && (
                                    <Box mt={2}>
                                        <Typography variant="subtitle2">{label} Preview:</Typography>
                                        <img
                                            src={update[field]}
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

                        <TextField

                            label="Belong To"
                            name="belongTo"
                            fullWidth
                            margin="dense"
                            id="stall name"
                            required
                            variant="outlined"
                            type="text"
                            value={update.belongTo}
                            onChange={(e) => handleInputChange(e, setUpdate)}
                        />


                        <TextField
                            fullWidth
                            label="Short Description"
                            name="short_description"
                            value={update.short_description}
                            margin="dense"
                            id="stall name"
                            required
                            variant="outlined"
                            type="text"
                            onChange={(e) => handleInputChange(e, setUpdate)}
                        />

                        <TextField
                            fullWidth
                            label="Main Description"
                            name="main_description"
                            value={update.main_description}
                            multiline
                            rows={4}
                            margin="dense"
                            id="stall main description"
                            required
                            variant="outlined"
                            type="text"
                            onChange={(e) => handleInputChange(e, setUpdate)}
                        />


                        <TextField
                            fullWidth
                            label="Items (comma-separated)"
                            name="items"
                            value={update.items}
                            multiline
                            rows={4}
                            margin="dense"
                            id="stall items"
                            required
                            variant="outlined"
                            type="text"
                            onChange={(e) => handleInputChange(e, setUpdate)}
                        />

                        <TextField
                            fullWidth
                            label="Mobile"
                            name="mobile"
                            value={update.contact.mobile}
                            onChange={(e) => handleContactChange(e, setUpdate)}
                            margin="dense"
                            id="mobile"
                            required
                            variant="outlined"
                            type="text"
                        />
                        <TextField
                            fullWidth
                            label="whatsApp"
                            name="whatsApp"
                            value={update.contact.whatsApp}
                            onChange={(e) => handleContactChange(e, setUpdate)}
                            margin="dense"
                            id="whatsApp"
                            required
                            variant="outlined"
                            type="text"
                        />

                        <TextField
                            fullWidth
                            label="Timings"
                            name="timings"
                            value={update.timings}
                            // onChange={handleInputChange}
                            onChange={(e) => handleInputChange(e, setUpdate)}
                            margin="dense"
                            id="Timings"
                            required
                            variant="outlined"
                            type="text"
                        />



                        <Typography variant="h6" gutterBottom>
                            Upload Menu Card (PDF)
                        </Typography>

                        {/* Show existing PDF link if available */}
                        {update.menu_card && (
                            <Box mb={2}>
                                <Typography variant="subtitle2">Existing Menu Card:</Typography>
                                <a
                                    href={update.menu_card}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: "none", color: "blue" }}
                                >
                                    View PDF
                                </a>
                            </Box>
                        )}

                        <input
                            type="file"
                            accept="application/pdf"
                            onChange={handleFileChange}
                            style={{ marginBottom: "1rem" }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={onCloseEditDialog}>Cancel</Button>
                        <Button type="submit" disabled={updateing} startIcon={updateing ? <CircularProgress size={24} /> : null}>
                            {updateing ? "Updating..." : "Update"}
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>

        </React.Fragment>
    )
}

export default UpdateStallByAdmin