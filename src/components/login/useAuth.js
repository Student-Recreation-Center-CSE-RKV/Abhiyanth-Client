import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, provider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"; // Adjust imports as needed

export const useAuth = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleUserLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      const userData = {
        name: user.displayName,
        email: user.email,
        // Add other user data fields as needed
      };

      const check = await isInDb(user.uid, userData); // Custom function to check user in DB
      setUser(user);
      console.log("Successfully logged in");
      toast.success("Successfully logged in");

      localStorage.setItem("Users", check ? "true" : "false");
      localStorage.setItem("id", user.uid);

      // Navigate to home page after successful login
      navigate("/");
    } catch (error) {
      console.error("Login error:", error.code, "Message:", error.message);
    }
  };

  const handleUserLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      toast.success("Successfully logged out");

      // Clear local storage
      localStorage.removeItem("Users");
      localStorage.removeItem("id");

      // Navigate to login page after logout
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error.code, "Message:", error.message);
    }
  };

  return { user, handleUserLogin, handleUserLogout };
};
