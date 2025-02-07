import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Paper, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const PaymentSuccess = () => {
  const navigate = useNavigate();


  useEffect(() => {
    
    window.history.replaceState(null, "", "/payment/success");

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
        backgroundColor: "#f0fff4" 
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
        <CheckCircleIcon sx={{ fontSize: 80, color: "green" }} />
        <Typography variant="h4" color="green" fontWeight="bold" gutterBottom>
          Payment Successful!
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Redirecting to your profile...
        </Typography>
      </Paper>
    </Container>
  );
};

export default PaymentSuccess;