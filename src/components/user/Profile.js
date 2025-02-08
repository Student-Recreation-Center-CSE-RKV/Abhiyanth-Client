
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
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        branch: "",
        id: "",
        mobile: "",
    })
    const [userTransactions, setUserTransactions] = useState([])

    const navigate = useNavigate()

    useEffect(() => {

        const fetchData = async () => {

            setLoading(true)

            try {

                const fetchedUser = await getUser();
                setUser(fetchedUser);

                if (fetchedUser) {

                    const [userData, transactionHistory] = await Promise.all([
                        getDataById("Users", fetchedUser?.uid),
                        getDataById("UserTransactions", fetchedUser?.email),
                    ]);

                    setUserData(userData);
                    setFormData({
                        name: userData?.name || "",
                        email: userData?.email || "",
                        branch: userData?.branch || "",
                        id: userData?.id || "",
                        mobile: userData?.mobile || "",
                    });

                    setUserTransactions(transactionHistory?.transactions || [])

                }

            } catch (error) {

            } finally {
                setLoading(false)
            }
        }

        fetchData();
    }, [])






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
                                        <td>{userData?.email || "N/A"}</td>
                                    </tr>
                                    <tr>
                                        <td className="label">Branch:</td>
                                        <td>{userData?.branch || "N/A"}</td>
                                    </tr>
                                    <tr>
                                        <td className="label">ID:</td>
                                        <td>{userData?.id || "N/A"}</td>
                                    </tr>
                                    <tr>
                                        <td className="label">Mobile:</td>
                                        <td>{userData?.mobile || "N/A"}</td>
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
                <div className="right-container" style={{ width: "140%" }}>
                    <Typography
                        variant="h4"
                        className="section-title"
                        sx={{
                            fontFamily: "AudioWide",
                            fontSize: { xs: "18px", sm: "24px", md: "28px", lg: "32px" },
                            textAlign: "center",
                            marginBottom: "10px",
                        }}
                    >
                        Transaction History
                    </Typography>

                    <div
                        className="transactions-container"
                        style={{
                            maxHeight: "530px",
                            overflowY: "auto",
                            paddingRight: "10px",
                            border: "1px solid rgba(255, 255, 255, 0.3)",
                            borderRadius: "10px",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            padding: "10px",
                            width: "100%",
                        }}
                    >
                        {loading ? (
                            <CircularProgress />
                        ) : userTransactions?.length > 0 ? (
                            userTransactions?.map((transaction, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        padding: { xs: "10px", sm: "15px" },
                                        borderRadius: "10px",
                                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                                        border: "1px solid rgba(255, 255, 255, 0.3)",
                                        fontFamily: "AudioWide",
                                        marginBottom: "10px",
                                        width: "100%",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            // flexDirection: { xs: "column", sm: "row" },
                                            gap: "10px",
                                        }}
                                    >
                                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                            <Typography
                                                sx={{
                                                    color: "rgb(229, 121, 199)",
                                                    fontSize: { xs: "18px", sm: "22px" },
                                                    fontWeight: "bold",
                                                    fontFamily: "AudioWide",
                                                }}
                                            >
                                                {transaction.other.event}
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    color: transaction.paymentIsCompleted.toUpperCase() === "PAID" ? "green" : "red",
                                                    fontSize: { xs: "16px", sm: "18px" },
                                                    fontFamily: "AudioWide",
                                                }}
                                            >
                                                {transaction.details.customer_id}
                                            </Typography>

                                            <Typography sx={{ color: "white", fontSize: { xs: "16px", sm: "18px" }, fontFamily: "AudioWide" }}>
                                                <strong>Department:</strong> {transaction.other.department}
                                            </Typography>
                                        </Box>

                                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                                            <Typography sx={{ color: "white", fontSize: { xs: "16px", sm: "18px" }, fontFamily: "AudioWide" }}>
                                                <strong></strong> ₹{transaction.other.amount}
                                            </Typography>

                                            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
                                </Box>
                            ))
                        ) : (
                            <Typography sx={{ color: "white", textAlign: "center", fontSize: "16px", fontFamily: "Averia Sans Libre" }}>
                                No transactions found
                            </Typography>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );


}
