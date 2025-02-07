import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, CardHeader } from '@mui/material';
import { extractDateTimeFromTimestamp } from '../../utils/timeStampToDate';
import { extractRelativeTime } from '../../utils/timeStampToDate';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ab_logo from "../../assets/images/abhiyath_logo_2.png"


const styles = {
  HeadingContent: {
    fontFamily: "DM Sans",
    fontStyle: "italic",
    fontWeight: "400",
  },
  textContent: {
    fontFamily: "Poppins",
    border: "1px solid #FF6AB7",
    borderRadius: "5px",
    Padding:"0.6px",
    textAlign: "center",  
    background: "linear-gradient(180deg, #FF6AB7 0%, #6AE4FF 100%)",
    color:"white"
  }
  
}
export default function NewsCard({ id, title, sub_title, description, image, date }) {


  const navigate = useNavigate();

  const { date: formattedDate } = extractDateTimeFromTimestamp(date);
  const [relativeTime, setRelativeTime] = useState(extractRelativeTime(date))

  useEffect(() => {
    const interval = setInterval(() => {
      setRelativeTime(extractRelativeTime(date))
    }, 60000)
    return () => clearInterval(interval)
  }, [date])
  const handleReadMore = () => {
    navigate(`/news/${id}`);
  };

  return (
    <Card sx={{
      maxWidth: 345,
      border: "2px solid  #FF6AB7",
      borderRadius: "30px",
      boxShadow: "0px 4px 15px rgba(173, 216, 230, 0.5)",
      display: "flex",
      flexDirection: "column",
      height: "100%", 
      backgroundColor:"transparent",
      color:"white",
     
    }}>
      <CardMedia
        component="img"
        alt="News Image"
        height="140"
        image={image}
      />
      <CardContent sx={{ flexGrow: 1, minHeight: "120px" }}>
        <Typography gutterBottom variant="h6" component="div" sx={styles.HeadingContent}>
          {description}
        </Typography>
      </CardContent>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red[500]", width: 50, height: 50 }} aria-label="recipe">
            <img
              src={ab_logo}
              alt="Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%"
              }}
            />
          </Avatar>
        }
        
        title={title}
        titleTypographyProps={{align:"left"}}
        subheader={`${formattedDate} • ${relativeTime}`}
      subheaderTypographyProps={{color:"white" , align:"left"}}
      />
      <CardActions sx={{ alignSelf: "center" }}>
        <Button size="small" sx={styles.textContent} onClick={handleReadMore}>Read More</Button>
      </CardActions>
    </Card>

  );
}