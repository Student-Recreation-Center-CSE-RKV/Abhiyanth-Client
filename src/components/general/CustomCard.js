import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const CustomCard = ({ 
  title, // Main title of the card 
  subtitle, // Optional subtitle
  content, // Array of key-value pairs for displaying dynamic content
  footer, // Footer text or actions
  onFooterClick, // Footer click action
  cardStyles, // Custom styles for the card
  titleStyles, // Custom styles for the title
  contentStyles, // Custom styles for content
}) => {
  return (
    <Card
      sx={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        height: "auto",
        backgroundColor: "rgba(217, 217, 217, 0)",
        boxShadow: "0px 5px 15px rgba(173, 216, 230, 0.5)",
        border: "1px solid  #FF6AB7",
        color: "white",
        fontFamily: "Audiowide",
        ...cardStyles,
      }}
    >
      <CardContent>
        {title && (
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontSize: { sm: 20, md: 22 },
              color: "#00B093",
              fontFamily: "Audiowide",
              ...titleStyles,
            }}
          >
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography
            variant="body2"
            sx={{
              fontSize: { sm: 18, md: 19 },
              fontFamily: "Audiowide",
              marginBottom: "10px",
            }}
          >
            {subtitle}
          </Typography>
        )}
        {content &&
          content.map(({ label, value }, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{
                fontSize: { sm: 18, md: 19 },
                fontFamily: "Audiowide",
                marginBottom: "5px",
                ...contentStyles,
              }}
            >
              {label}: {value}
            </Typography>
          ))}
      </CardContent>
      {footer && (
        <Typography
          component="a"
          href="#"
          sx={{
            fontFamily: "Audiowide",
            color: "#00B093",
            textDecoration: "none",
            '&:hover': {
              textDecoration: "underline",
              color: "#008a73",
            },
            fontSize: { sm: 17, md: 19 },
            cursor: "pointer",
            display: "block",
            textAlign: "center",
            marginBottom: 1,
          }}
          onClick={onFooterClick}
        >
          {footer}
        </Typography>
      )}
    </Card>
  );
};

export default CustomCard;
