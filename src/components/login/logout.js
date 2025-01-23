import { signOut } from "firebase/auth";
import { auth } from "../../api/firebaseConfig.js";

const logoutUser = () => {
  signOut(auth)
    .then(() => {
      localStorage.removeItem("currentUser");
      localStorage.removeItem("Users");
      localStorage.removeItem("id");
    })
    .catch((error) => {
      "error in logging out user";
    });
};

export { logoutUser };


