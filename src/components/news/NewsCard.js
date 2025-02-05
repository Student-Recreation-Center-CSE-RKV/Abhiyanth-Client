import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import newsImage from '../../assets/images/news/news1.jpeg'
import { Avatar, CardHeader } from '@mui/material';
import { extractDateTimeFromTimestamp } from '../../utils/timeStampToDate';
import { extractRelativeTime } from '../../utils/timeStampToDate';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const styles = {
  HeadingContent: {
    fontFamily: "DM Sans",
    fontStyle: "italic",
    fontWeight: "400",
  },
  textContent: {
    fontFamily: "Poppins",
    border: "1px solid #FF6AB7",
    borderRadius: "20px",

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
      maxWidth: 345, border: "2px solid  #FF6AB7",
      bordeRadius: "30px",
      boxShadow: " 0px 4px 15px rgba(173, 216, 230, 0.5)"
    }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={newsImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={styles.HeadingContent}>
          {description}
        </Typography>
      </CardContent>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red[500]" }} aria-label="recipe">

          </Avatar>
        }
        title={title}
        subheader={`${formattedDate} • ${relativeTime}`}
      />
      <CardActions>
        <Button size="small" sx={styles.textContent}>Share</Button>
        <Button size="small" sx={styles.textContent} onClick={handleReadMore}>Read More</Button>
      </CardActions>
    </Card>
  );
}
