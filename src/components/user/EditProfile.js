import { useState } from "react";
import "../../styles/profile.css";

export default function EditProfile() {
    const [userProfile, setUserProfile] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        branch: "Computer Science",
        id: "CS12345",
        mobile_number: "+1234567890",
        image_link: "https://pixlr.com/images/index/ai-image-generator-one.webp"
    });

    const [imagePreview, setImagePreview] = useState(userProfile.image_link);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserProfile((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImagePreview(imageUrl);
        }
    };

    const handleSave = () => {
        console.log("Updated Profile:", userProfile);
        // Add logic to save data (e.g., Firebase update)
    };

    return (
        <div style={{ marginTop: "70px", padding: "20px", color: "white", fontFamily: "AudioWide" }}>
            <h1 className="title">Edit Profile</h1>
            <div className="profile-container">
                    <img src={imagePreview} alt="Profile" className="profile-image" />
                    <input type="file" accept="image/*" onChange={handleImageChange} className="file-input"/>
                <div className="profile-details">
                    <label>Name:</label>
                    <input type="text" name="name" value={userProfile.name} onChange={handleChange} />

                    <label>Email:</label>
                    <input type="email" name="email" value={userProfile.email} onChange={handleChange} />

                    <label>Branch:</label>
                    <input type="text" name="branch" value={userProfile.branch} onChange={handleChange} />

                    <label>ID:</label>
                    <input type="text" name="id" value={userProfile.id} onChange={handleChange} />

                    <label>Mobile Number:</label>
                    <input type="text" name="mobile_number" value={userProfile.mobile_number} onChange={handleChange} />

                    <div className="button-container">
                        <button className="save-cancel-button" onClick={handleSave}>Save</button>
                        <button className="save-cancel-button" onClick={() => window.history.back()}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
