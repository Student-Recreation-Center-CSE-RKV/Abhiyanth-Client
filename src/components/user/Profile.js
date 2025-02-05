

// import "../../styles/profile.css";
// import { Typography, Button } from "@mui/material";

// export default function Profile() {
//     const userProfile = {
//         name: "John Doe",
//         email: "john.doe@example.com",
//         branch: "Computer Science",
//         id: "CS12345",
//         mobile_number: "+1234567890",
//         image_link: "https://pixlr.com/images/index/ai-image-generator-one.webp"
//     };

//     return (
//         <div style={{ marginTop: "70px", padding: "20px", color: "white", fontFamily: "AudioWide" }}>
//             <Typography variant="h4" className="title" sx={{fontFamily:"AudioWide"}}>
//                 Profile
//             </Typography>
//             <div className="profile-container">
//                 <img
//                     src={userProfile.image_link}
//                     alt="Profile"
//                     className="profile-image"
//                 />
//                 <div className="profile-details">
//                     <Typography variant="h5" sx={{fontFamily:"AudioWide"}}>{userProfile.name}</Typography>
//                     <Typography variant="body1" sx={{fontFamily:"AudioWide"}}>
//                         <Typography component="span" fontWeight="bold">Email:</Typography> {userProfile.email}
//                     </Typography>
//                     <Typography variant="body1" sx={{fontFamily:"AudioWide"}}>
//                         <Typography component="span" fontWeight="bold">Branch:</Typography> {userProfile.branch}
//                     </Typography>
//                     <Typography variant="body1" sx={{fontFamily:"AudioWide"}}>
//                         <Typography component="span" fontWeight="bold">ID:</Typography> {userProfile.id}
//                     </Typography>
//                     <Typography variant="body1" sx={{fontFamily:"AudioWide"}}>
//                         <Typography component="span" fontWeight="bold">Mobile Number:</Typography> {userProfile.mobile_number}
//                     </Typography>
//                     <div className="button-container">
//                         <Button variant="contained" color="primary" href="editProfile">
//                             Edit Profile
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


// import "../../styles/profile.css";
// import { Typography, Button } from "@mui/material";

// export default function Profile() {
//     const userProfile = {
//         name: "John Doe",
//         email: "john.doe@example.com",
//         branch: "Computer Science",
//         id: "CS12345",
//         mobile_number: "+1234567890",
//         image_link: "https://pixlr.com/images/index/ai-image-generator-one.webp"
//     };

//     return (
//         <div style={{ marginTop: "70px", padding: "20px", color: "white" }}>
//             <Typography variant="h4" className="title" sx={{fontFamily:"AudioWide"}}>Profile</Typography>
            
//             {/* Main Container to Hold Profile and Transactions */}
//             <div className="main-container">
                
//                 {/* Profile Section */}
//                 <div className="profile-container">
//                     <img
//                         src={userProfile.image_link}
//                         alt="Profile"
//                         className="profile-image"
//                     />
//                     <div className="profile-details">
//                         <Typography variant="h5" sx={{fontFamily:"AudioWide"}}>{userProfile.name}</Typography>
//                         <Typography variant="body1" sx={{fontFamily:"AudioWide"}}>
//                         <Typography component="span" fontWeight="bold">Email:</Typography> {userProfile.email}
//                         </Typography>                     <Typography variant="body1" sx={{fontFamily:"AudioWide"}}>
//                         <Typography component="span" fontWeight="bold">Branch:</Typography> {userProfile.branch}
//                         </Typography>
//                         <Typography variant="body1" sx={{fontFamily:"AudioWide"}}>
//                         <Typography component="span" fontWeight="bold">ID:</Typography> {userProfile.id}
//                         </Typography>
//                         <Typography variant="body1" sx={{fontFamily:"AudioWide"}}>
//                         <Typography component="span" fontWeight="bold">Mobile Number:</Typography> {userProfile.mobile_number}
//                         </Typography>
//                         <div className="button-container">
//                         <Button variant="contained" color="primary" href="editProfile">
//                             Edit Profile
//                         </Button>
//                     </div>
//                     </div>
//                 </div>

//                 {/* Transactions Section */}
//                 <div className="transactions-container">
//                     <Typography variant="h5">Transaction History</Typography>
//                     <ul>
//                         <li>Paid ₹500 for Fest Entry</li>
//                         <li>Purchased ₹200 meal from Stall 3</li>
//                         <li>Paid ₹100 for Event Registration</li>
//                         <li>Paid ₹500 for Fest Entry</li>
//                         <li>Purchased ₹200 meal from Stall 3</li>
//                         <li>Paid ₹100 for Event Registration</li>
//                         <li>Paid ₹500 for Fest Entry</li>
//                         <li>Purchased ₹200 meal from Stall 3</li>
//                         <li>Paid ₹100 for Event Registration</li>
//                         <li>Paid ₹500 for Fest Entry</li>
//                         <li>Purchased ₹200 meal from Stall 3</li>
//                         <li>Paid ₹100 for Event Registration</li>
//                         <li>Paid ₹500 for Fest Entry</li>
//                         <li>Purchased ₹200 meal from Stall 3</li>
//                         <li>Paid ₹100 for Event Registration</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }

import "../../styles/profile.css";
import { Typography, Button ,Box} from "@mui/material";
import { motion } from "framer-motion";


export default function Profile() {
    const userProfile = {
        name: "John Doe",
        email: "john.doe@example.com",
        branch: "Computer Science",
        id: "CS12345",
        mobile_number: "+1234567890",
        image_link: "https://pixlr.com/images/index/ai-image-generator-one.webp"
    };

const transactions = [
    {
        amount: "2",
        department: "CSE",
        event: "Coding Contest",
        isTeam: "false",
        paymentIsCompleted: "paid"
    },
    // Add more transactions here if needed
    {
        amount: "2",
        department: "CSE",
        event: "Coding Contest",
        isTeam: "false",
        paymentIsCompleted: "PAID"
    },
    {
        amount: "2",
        department: "CSE",
        event: "Coding Contest",
        isTeam: "true",
        paymentIsCompleted: "NO"
    }
];
    return (
        <div style={{ marginTop: "70px", padding: "20px", color: "white" }}>
            <div className="main-container">
                
                
                        <div className="left-container">
    <Typography variant="h4" className="section-title" sx={{ fontFamily: "AudioWide" }}>
        Profile
    </Typography>

    <div className="profile-container">
        <img src={userProfile.image_link} alt="Profile" className="profile-image" />
        <div className="profile-details">
            <Typography variant="h5" sx={{ fontFamily: "AudioWide" }}>{userProfile.name}</Typography>

           
            <table className="profile-table">
                <tbody>
                    <tr>
                        <td className="label">Email:</td>
                        <td>{userProfile.email}</td>
                    </tr>
                    <tr>
                        <td className="label">Branch:</td>
                        <td>{userProfile.branch}</td>
                    </tr>
                    <tr>
                        <td className="label">ID:</td>
                        <td>{userProfile.id}</td>
                    </tr>
                    <tr>
                        <td className="label">Mobile:</td>
                        <td>{userProfile.mobile_number}</td>
                    </tr>
                </tbody>
            </table>

     
                        <motion.div className="button-container"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <motion.button 
                            className="edit-button"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}

                        >
                            Edit Profile
                        </motion.button>
                    </motion.div>
                        </div>
                    </div>
                </div>

{/* Right Section (Transactions) */}
<div className="right-container">
    <Typography variant="h4" className="section-title" sx={{ fontFamily: "AudioWide" }}>
        Transaction History
    </Typography>

    {/* Scrollable transactions container */}
    <div className="transactions-container" style={{
        maxHeight: "530px",  // Fixed height
        overflowY: "auto",   // Enables vertical scrolling
        paddingRight: "10px",
        border: "1px solid rgba(255, 255, 255, 0.3)", // Optional styling
        borderRadius: "10px",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        padding: "10px"
    }}>
        {transactions.length > 0 ? (
            transactions.map((transaction, index) => (
                <Box
                    key={index}
                    sx={{
                        padding: "15px",
                        borderRadius: "10px",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        fontFamily: "AudioWide",
                        marginBottom: "10px"
                    }}
                >
                    <Typography sx={{ color: "rgb(229, 121, 199)", fontSize: "22px", fontWeight: "bold" ,fontFamily:"AudioWide"}}>
                        {transaction.event}
                    </Typography>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "10px" }}>
                        <Typography sx={{ color: "white", fontSize: "18px", fontFamily:"AudioWide" }}>
                            <strong>Amount:</strong> ₹{transaction.amount}
                        </Typography>
                        <Typography sx={{ color: "white", fontSize: "18px", fontFamily:"AudioWide" }}>
                            <strong>Department:</strong> {transaction.department}
                        </Typography>
                        <Typography sx={{ color: "white", fontSize: "18px", fontFamily:"AudioWide" }}>
                            <strong>Team Participation:</strong> {transaction.isTeam === "true" ? "Yes" : "No"}
                        </Typography>
                        {/* <Typography sx={{ color: transaction.paymentIsCompleted.toUpperCase() === "PAID" ? "green" : "red", fontSize: "18px", fontWeight: "bold" ,fontFamily:"AudioWide"}}>
                            {transaction.paymentIsCompleted}
                        </Typography> */}
                        <Typography 
    sx={{ 
        color: transaction.paymentIsCompleted.toUpperCase() === "PAID" ? "green" : "red", 
        fontSize: "18px", 
        fontWeight: "bold",
        fontFamily: "AudioWide"
    }}
>
    {transaction.paymentIsCompleted.toUpperCase() === "PAID" ? "PAID" : "NOT PAID"}
</Typography>

                    </Box>
                </Box>
            ))
        ) : (
            <Typography sx={{ color: "white", textAlign: "center", fontSize: "16px", fontFamily: "Averia Sans Libre" }}>
                No transactions yet.
            </Typography>
        )}
    </div>
</div>



                
            </div>
        </div>
    );
}
