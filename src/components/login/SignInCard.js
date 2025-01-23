import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiCard from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import GoogleIcon from "@mui/icons-material/Google";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  background: "rgba(255, 255, 255, 0.1)", // Semi-transparent white
  backdropFilter: "blur(10px)", // Frosted glass effect
  border: "1px solid rgba(255, 255, 255, 0.2)", // Subtle border
  borderRadius: theme.spacing(2), // Rounded corners
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)", // Enhanced shadow
  [theme.breakpoints.up("sm")]: {
    width: "450px",
  },
}));

export default function SignInCard({handleUserLogin ,loading}) {
  console.log(loading)

  const handleUserLoginClick = async () => {
    console.log("signin with google clicked");
    try {
      await handleUserLogin();  
    } catch (error) {
      toast.error("Failed to login");
    }
  };

  return (
    <>
      <Card variant="elevation">
        <Typography
          component="h1"
          variant="h5"
          sx={{
            width: "100%",
            fontSize: "clamp(2rem, 10vw, 2.15rem)",
            textAlign: "center",
            color: "white", // Text color for visibility
          }}
        >
          Sign in
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Button
            fullWidth
            variant="contained"
            onClick={handleUserLoginClick}
            sx={{
              backgroundColor: "white",
              color: "#00008B",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
            }}
            startIcon={loading ? <CircularProgress size={20} color="primary" /> : <GoogleIcon />} // Show loader or Google icon
          >
            {loading ? "Signing in..." : "Sign in with Google"}
          </Button>
        </Box>
      </Card>
    </>
  );
}
