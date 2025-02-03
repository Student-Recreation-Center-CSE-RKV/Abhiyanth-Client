import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Paper, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const PaymentFailure = () => {
  const navigate = useNavigate();


  useEffect(() => {
    
    window.history.replaceState(null, "", "/payment/failure");

    const timer = setTimeout(() => {
      navigate("/profile", { replace: true });
      window.location.replace("/profile"); // Hard reset to remove all history
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Container 
      maxWidth={false} 
      sx={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh", 
        backgroundColor: "#fff5f5" 
      }}
    >
      <Paper 
        elevation={3} 
        sx={{ 
          p: 4, 
          textAlign: "center", 
          borderRadius: 2,
          backgroundColor: "white" 
        }}
      >
        <CancelIcon sx={{ fontSize: 80, color: "red" }} />
        <Typography variant="h4" color="red" fontWeight="bold" gutterBottom>
          Payment Failed!
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Redirecting to your profile...
        </Typography>
      </Paper>
    </Container>
  );
};

export default PaymentFailure;