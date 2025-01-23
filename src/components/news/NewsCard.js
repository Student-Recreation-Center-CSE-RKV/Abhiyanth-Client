import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import newsImage from '../../assets/images/news/news1.jpeg'
import { Avatar, CardHeader } from '@mui/material';

const styles = { HeadingContent:{
  fontFamily:"DM Sans",
  fontStyle:"italic",
  fontWeight:"400",
},
  textContent:{
  fontFamily:"Poppins",
  border:"1px solid #FF6AB7",
  borderRadius:"20px",

}}
export default function NewsCard() {
  const id = 1;
  return (
    <Card sx={{ maxWidth: 345, border: "2px solid  #FF6AB7",
      bordeRadius: "30px",
      boxShadow:" 0px 4px 15px rgba(173, 216, 230, 0.5)" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={newsImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={styles.HeadingContent}>
          Abhiyanth Ignition Launch Graced by Honourable Director Prof.AVSS Kumara Swamy Gupta 
        </Typography>
        {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Abhiyanth Ignition Launch Graced by Honourable Director Prof.AVSS Kumara Swamy Gupta Ayyapu
        Abhiyanth Ignition Launch Graced by Honourable Director Prof.AVSS Kumara Swamy Gupta Ayyapu
        </Typography> */}
      </CardContent>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red[500]" }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader={`September 14, 2016  • ${5}min read`}
      />
      <CardActions>
        <Button size="small" sx={styles.textContent}>Share</Button>
        <Button size="small" sx={styles.textContent} href={`/news/${id}`}>Read More</Button>
      </CardActions>
    </Card>
  );
}
