// import "../../styles/profile.css";
// import { Grid } from "@mui/material";

// export default function Profile() {
//     // Sample user profile data
//     const userProfile = {
//         name: "John Doe",
//         email: "john.doe@example.com",
//         branch: "Computer Science",
//         id: "CS12345",
//         mobile_number: "+1234567890",
//         image_link: "https://pixlr.com/images/index/ai-image-generator-one.webp"
//     };

//     return (
//         <div style={{ marginTop: "70px", padding: "20px" }}>
//             <h1 className="title">Profile</h1>
//             <div className="profile-container" style={{display:"flex", alignItems: "center", color:"white",fontFamily:"AudioWide" }}>
//                 <img
//                     src={userProfile.image_link}
//                     alt="Profile"
//                     className="profile-image"
//                     style={{ borderRadius: "50%", marginRight: "20px" }}
//                 />
//                 <div>
//                     <h2>{userProfile.name}</h2>
//                     <p><strong>Email:</strong> {userProfile.email}</p>
//                     <p><strong>Branch:</strong> {userProfile.branch}</p>
//                     <p><strong>ID:</strong> {userProfile.id}</p>
//                     <p><strong>Mobile Number:</strong> {userProfile.mobile_number}</p>
//                     <div class="button-container">
//                     <button href="editProfile" class="view-events-button">Edit profile</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


import "../../styles/profile.css";
import { Grid } from "@mui/material";

export default function Profile() {
    // Sample user profile data
    const userProfile = {
        name: "John Doe",
        email: "john.doe@example.com",
        branch: "Computer Science",
        id: "CS12345",
        mobile_number: "+1234567890",
        image_link: "https://pixlr.com/images/index/ai-image-generator-one.webp"
    };

    return (
        <div style={{ marginTop: "70px", padding: "20px", color:"white",fontFamily:"AudioWide" }}>
            <h1 className="title" >Profile</h1>
            <div className="profile-container">
                <img
                    src={userProfile.image_link}
                    alt="Profile"
                    className="profile-image"
                />
                <div className="profile-details">
                    <h2>{userProfile.name}</h2>
                    <p><strong>Email:</strong> {userProfile.email}</p>
                    <p><strong>Branch:</strong> {userProfile.branch}</p>
                    <p><strong>ID:</strong> {userProfile.id}</p>
                    <p><strong>Mobile Number:</strong> {userProfile.mobile_number}</p>
                    <div className="button-container">
                        <button href="editProfile" className="view-events-button">Edit Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
