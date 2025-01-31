import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiCard from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import GoogleIcon from "@mui/icons-material/Google";
import logo from "../../assets/images/Rgukt_Logo_White.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../api/firebaseConfig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const provider = new GoogleAuthProvider();
const Card = styled(MuiCard)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    width: "100%",
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    boxShadow:
        "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
    [theme.breakpoints.up("sm")]: {
        width: "450px",
    },
    ...theme.applyStyles("dark", {
        boxShadow:
            "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
    }),
}));

export default function SignInCard() {

    const navigate = useNavigate()
    const [loading, setLoading] = React.useState(false)


    const handleUserLogin = async () => {

        setLoading(true)
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            if (user) {
                toast.success(`Welcome, ${user.displayName}!`);
                navigate("/");
            }
        } catch (error) {
            toast.error("Failed to login");
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <Card variant="elevation">
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                    <img src={logo} alt="logo" style={{ width: "10rem", alignContent: "center", marginLeft: "7rem" }} />
                </Box>
                <Typography
                    component="h1"
                    variant="h5"
                    sx={{
                        width: "100%",
                        fontSize: "clamp(2rem, 10vw, 2.15rem)",
                        textAlign: "center",
                    }}
                >
                    Sign in
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>

                    <Button
                        fullWidth
                        variant="contained"
                        onClick={handleUserLogin}

                        startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <GoogleIcon />} // Show loader or Google icon
                    >
                        {loading ? "Signing in..." : "Sign in with Google"}
                    </Button>
                </Box>
            </Card>
        </>
    );
}
