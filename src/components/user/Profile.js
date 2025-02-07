
import "../../styles/profile.css";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { getDataById } from "../../api/general";
import { getUser } from "../../utils/getUser"
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

export default function Profile() {

    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        branch: "",
        id: "",
        mobile: "",
    })
    const [userTransactions, setuserTransactions] = useState([])

    const navigate = useNavigate()
    const fetch = async () => {
        getUser().then(setUser).catch(console.error);
    }

    const fetchUserCollection = async () => {
        if (!user) return

        const data = await getDataById("Users", user?.uid)
        setUserData(data);
        setFormData({
            name: data?.name || null,
            email: data?.email || null,
            branch: data?.branch || null,
            id: data?.id || null,
            mobile: data?.mobile || null
        })
      

    }

    const fetchTrasactions = async () => {

        const transactionHistory = await getDataById("UserTransactions", user?.email);
        setuserTransactions(transactionHistory);
    }
    useEffect(() => {
        setLoading(true);
        fetch();
        fetchUserCollection();
        fetchTrasactions();
        setLoading(false);

    }, [user]);



    if (loading) {
        return (<>Loading ...</>);
    }
    if (!loading) {
        return (
            <div style={{ marginTop: "70px", padding: "20px", color: "white" }}>
                <div className="main-container">


                    <div className="left-container">
                        <Typography variant="h4" className="section-title" sx={{ fontFamily: "AudioWide" }}>
                            Profile
                        </Typography>

                        <div className="profile-container">
                            <img src={user?.photoURL} alt="Profile" className="profile-image" />
                            <div className="profile-details">
                                <Typography variant="h5" sx={{ fontFamily: "AudioWide" }}>{userData?.name || null}</Typography>


                                <table className="profile-table">
                                    <tbody>
                                        <tr>
                                            <td className="label">Email:</td>
                                            <td>{userData?.email || null}</td>
                                        </tr>
                                        <tr>
                                            <td className="label">Branch:</td>
                                            <td>{userData?.branch}</td>
                                        </tr>
                                        <tr>
                                            <td className="label">ID:</td>
                                            <td>{userData?.id}</td>
                                        </tr>
                                        <tr>
                                            <td className="label">Mobile:</td>
                                            <td>{userData?.mobile}</td>
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
                                        onClick={() => navigate('/EditProfile', { state: { formData: formData } })}
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
                        <div className="transactions-container" style={{
                            maxHeight: "530px",
                            overflowY: "auto",
                            paddingRight: "10px",
                            border: "1px solid rgba(255, 255, 255, 0.3)",
                            borderRadius: "10px",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            padding: "10px"
                        }}>
                            {loading ? <CircularProgress /> : (userTransactions?.transactions?.length > 0 ? (
                                userTransactions.transactions.map((transaction, index) => (
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
                                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>


                                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                                <Typography
                                                    sx={{
                                                        color: "rgb(229, 121, 199)",
                                                        fontSize: "22px",
                                                        fontWeight: "bold",
                                                        fontFamily: "AudioWide"
                                                    }}
                                                >
                                                    {transaction.other.event}
                                                </Typography>

                                                <Typography
                                                    sx={{
                                                        color: transaction.paymentIsCompleted.toUpperCase() === "PAID" ? "green" : "red",
                                                        fontSize: "18px",
                                                        fontFamily: "AudioWide"
                                                    }}
                                                >
                                                    {transaction.details.customer_id}
                                                </Typography>

                                                <Typography sx={{ color: "white", fontSize: "18px", fontFamily: "AudioWide" }}>
                                                    <strong>Department:</strong> {transaction.other.department}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                                <Typography sx={{ color: "white", fontSize: "18px", fontFamily: "AudioWide", marginLeft: "90px" }}>
                                                    <strong></strong> ₹{transaction.other.amount}
                                                </Typography>

                                                <Box sx={{ display: "flex", alignItems: "center", gap: "10px", marginLeft: "90px" }}>



                                                    <Box
                                                        sx={{
                                                            width: "24px",
                                                            height: "24px",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            borderRadius: "50%",
                                                            backgroundColor: transaction.paymentIsCompleted.toUpperCase() === "PAID" ? "green" : "red",
                                                            color: "white",
                                                            fontSize: "18px",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        {transaction.paymentIsCompleted.toUpperCase() === "PAID" ? "✔" : "!"}
                                                    </Box>
                                                </Box>

                                            </Box>

                                        </Box>

                                        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "10px" }}>



                                        </Box>
                                    </Box>
                                ))
                            ) : (
                                <Typography sx={{ color: "white", textAlign: "center", fontSize: "16px", fontFamily: "Averia Sans Libre" }}>
                                    No transactions found
                                </Typography>
                            ))}


                        </div>
                    </div>
                </div>
            </div>
        );

    }
}
