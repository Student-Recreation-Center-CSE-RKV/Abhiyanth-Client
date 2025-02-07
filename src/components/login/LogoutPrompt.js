import React from "react";
import { Avatar, Menu, MenuItem } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
const styles = {
    smallMenutext: {
        background: "linear-gradient(to right, purple, red )",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: "bold",
        fontSize: "19px"
    },
}


export const LogoutPrompt = ({ user, handleClick, anchorEl, open, onClose, handleLogout }) => {
    const navigate=useNavigate()

    return (
        <>
            {/* Avatar Button */}
            <Avatar
                src={user.photoURL}
                alt={user.displayName}
                onClick={handleClick}
                style={{ cursor: "pointer" }}
            />

            {/* Dropdown Menu */}
            <Menu
                id="avatar-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={onClose}
                MenuListProps={{
                    'aria-labelledby': 'avatar-button',
                }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem
                    sx={{
                        ...styles.smallMenutext, // Include the styles from `styles.smallMenutext`
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                    }}
                    onClick={()=>navigate("/profile")}
                >
                    
                    See Profile
                </MenuItem>
                <MenuItem
                    sx={{
                        ...styles.smallMenutext, // Include the styles from `styles.smallMenutext`
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                    }}
                    onClick={handleLogout}
                >
                    {/* Login Icon */}
                    <LogoutIcon />
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
};
