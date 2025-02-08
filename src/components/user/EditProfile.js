import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../../styles/editProfile.css";
import { getUser } from "../../utils/getUser";
import { useLocation, useNavigate } from "react-router-dom";
import { updateDataById } from "../../api/general";
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress';

export default function EditProfile() {
    const [uploading , setUploading] = useState(false)

    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const location = useLocation();
    const initialFormData = location.state?.formData || null;

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        
    };

    const handleSave = async () => {
        try {
            setUploading(true);
            await updateDataById("Users", user.uid, formData);
            alert("Profile updated successfully");
            navigate("/profile");
        } catch (error) {
            
        }finally{
            setUploading(false)
        }
    };

    const fetchUser = async () => {
        getUser().then(setUser).catch(console.error);
    };

    useEffect(() => {
      
        fetchUser();
    }, [user]);

    return (
        <>
            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }} 
                style={{ marginTop: "70px", padding: "20px", color: "white", fontFamily: "AudioWide" }}
            >
                
                <motion.h1 className="title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                >
                    Edit Profile
                </motion.h1>

                <motion.div 
                    className="profile-container"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <motion.img 
                        src={user?.photoURL} 
                        alt="Profile" 
                        className="profile-image"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    />

                    <div className="profile-details">
                        {["name", "email", "id", "mobile"].map((field, index) => (
                            <motion.div key={field}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }} 
                            >
                                <label style={{ marginBottom: "5px" }}>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                                <motion.input 
                                    type={field === "email" ? "email" : "text"} 
                                    name={field} 
                                    value={formData[field]} 
                                    onChange={field === "name" || field === "email" ? undefined : handleChange}
                                    whileFocus={{ scale: 1.05, borderColor: "rgb(177, 86, 233)" }}
                                    style={{ width: "100%", textAlign: "center" }} 
                                />
                            </motion.div>
                        ))}

                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" , height:"4rem" }}
                        >
                            <label style={{ marginBottom: "5px" }}>Branch:</label>
                            <motion.select
                                name="branch"
                                value={formData.branch}
                                onChange={handleChange}
                                whileFocus={{ scale: 1.05, borderColor: "rgb(177, 86, 233)" }}
                                style={{ width: "100%", textAlign: "center", height:"100%" }}
                            >
                                <option value="branch">Branch....</option>
                                <option value="Computer Science">CSE</option>
                                <option value="ECE">ECE</option>
                                <option value="Mechanical Engineering">Mechanical</option>
                                <option value="Civil">Civil </option>
                                <option value="MME">MME </option>
                                <option value="chemical Engineering">Chemical </option>
                                <option value="Electrical Engineering">EEE </option>
                            </motion.select>
                        </motion.div>

                        <motion.div className="button-container"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                           <motion.button
                                className="save-cancel-button"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleSave}
                                disabled={uploading} 
                            >
                               {uploading ? (
                                    <>
                                        <CircularProgress size={14} style={{ color: "white", marginRight: "10px" }} />
                                        Saving...
                                    </>
                                ) : (
                                    "Save"
                                )}
                            </motion.button>

                            <motion.button 
                                className="save-cancel-button"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => window.history.back()}
                            >
                                Cancel
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}
