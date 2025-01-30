import "../../styles/profile.css";

export default function Profile() {
    
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
                        <button href="/EditProfile" className="view-events-button">Edit Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
