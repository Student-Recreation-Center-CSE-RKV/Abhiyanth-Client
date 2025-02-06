

import { useState } from "react";
import { motion } from "framer-motion";
import "../../styles/editProfile.css";

export default function EditProfile() {
    const [userProfile, setUserProfile] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        branch: "Computer Science",
        id: "CS12345",
        mobile_number: "+1234567890",
        image_link: "https://pixlr.com/images/index/ai-image-generator-one.webp"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserProfile((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        console.log("Updated Profile:", userProfile);
        // Add logic to save data (e.g., Firebase update)
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            style={{ marginTop: "70px", padding: "20px", color: "white", fontFamily: "AudioWide" }}
        >
            {/* Title Animation */}
            <motion.h1 className="title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
            >
                Edit Profile
            </motion.h1>

            {/* Profile Container Animation */}
            <motion.div 
                className="profile-container"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                {/* Profile Image Animation */}
                <motion.img 
                    src={userProfile.image_link} 
                    alt="Profile" 
                    className="profile-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                />

                <div className="profile-details">
                    {["name", "email", "branch", "id", "mobile_number"].map((field, index) => (
                        <motion.div key={field}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }} // Ensures label is above input
                        >
                            <label style={{ marginBottom: "5px" }}>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                            <motion.input 
                                type={field === "email" ? "email" : "text"} 
                                name={field} 
                                value={userProfile[field]} 
                                onChange={handleChange}
                                whileFocus={{ scale: 1.05, borderColor: "rgb(177, 86, 233)" }}
                                style={{ width: "100%", textAlign: "center" }} // Ensures input is centered
                            />
                        </motion.div>
                    ))}

                    {/* Button Animations */}
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
                        >
                            Save
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
    );
}
