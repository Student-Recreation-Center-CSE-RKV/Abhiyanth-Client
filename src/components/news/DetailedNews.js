import React from 'react';
import NewsBox from './NewsBox';
import newsCover from "../../assets/images/news/news1.jpeg"
import { useMediaQuery } from "@mui/material";

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: '20px',
    marginTop:"1%"
  },
  newsContent: {
    flex: 3,
    paddingRight: '20px',
    color:"white",
    fontFamily:"DM Sans"
  },
  newsImage: {
    width: '100%',
    height: 'auto',
  },
  latestNews: {
    flex: 1,
    paddingLeft: '20px',
    color:"white"
  },
};

const news={
  id:"1",
  title:"Grand Bidding for stalls to promote bussiness enthusiasts in the college",
  image:{newsCover},
  content:"The grand bidding for stalls to promote bussiness enthusiasts in the college was a grand success.The amount sum crossed 13 Lakhs. The event was graced by Honourable Director Prof.AVSS Kumara Swamy Gupta Ayyapu. The event was a grand success and was attended by many students and faculty members.",
  date:"22 Jan 2025",
  author:"Rajesh"
}
const DetailedNews = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <div>
      <div style={{marginTop:"4%"}}>
        <a href="/news"> <button style={{color:"red",fontSize:"20px",background:"None",padding:"5px 10px"}}> Back </button> </a>
      </div>
      <div style={styles.container}>
        
        <div style={styles.newsContent}>
          <img src={newsCover} alt="News" style={styles.newsImage} />
          <h1>{news.title}</h1>
          <p> {news.author} • {news.date} • {2} min read</p>
          <p>{news.content}</p>
        </div>
        <div style={{...styles.latestNews, display: isSmallScreen ? "none" : "block"}}>
          <h2 style={{color:"red"}}>Latest News</h2>
          <NewsBox />
          <NewsBox />
        </div>
      </div>
    </div>
  );
};

export default DetailedNews;