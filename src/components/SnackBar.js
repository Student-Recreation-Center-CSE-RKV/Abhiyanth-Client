import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function CustomizedSnackbar({ open, onClose, message }) {
  return (
    <div>
      <Snackbar open={open} autoHideDuration={5000} onClose={onClose}>
        <Alert
          onClose={onClose}
          severity={message.type}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message.msg}
        </Alert>
      </Snackbar>
    </div>
  );
}

