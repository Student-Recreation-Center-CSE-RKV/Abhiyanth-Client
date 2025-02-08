import { Box, CircularProgress, Typography } from '@mui/material';

import NewsCard from '../components/news/NewsCard'
import ErrorBoundary from './ErrorBoundary';
import { getAllNews } from '../api/news'
import { useEffect, useState } from 'react';
import { extractRelativeTime } from '../utils/timeStampToDate';
const styles = {
  ColumnContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "10px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  RowContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    padding: "10px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subHeading: {
    color: "#c91c75",
    fontSize: "28px",
    fontFamily: "DM Sans",
    fontWeight: "bold",
    marginTop: '3rem'
  }
}
function News() {


  const [newsList, setNewsList] = useState([])
  const [loading, setLoading] = useState(false)

  const getnews = async () => {
    try {

      setLoading(true);
      const apiNews = await getAllNews();
      const sortedNews = apiNews.sort((a, b) => {
        const timeA = extractRelativeTime(a.date); // Convert to comparable format
        const timeB = extractRelativeTime(b.date);
        return timeA.localeCompare(timeB); // Sorting in ascending order
      });
      setNewsList(sortedNews);

    }
    catch (error) {
      
    }
    finally {
      setLoading(false)
    }



  }

  useEffect(() => {
    getnews()
  }, [])
  return (
    <ErrorBoundary>
      <>
        <Box sx={{ ...styles.ColumnContainer, marginTop: "3%", alignItems: "center" }} >

          <Box>
            <Typography variant="h3" sx={{ ...styles.subHeading, color: "red" }}> Top News</Typography>
          </Box>
          <Box sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr", lg: "1fr 1fr 1fr 1fr" },
            gap: "20px",
            padding: "10px",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}>
            {loading ? <CircularProgress size={40} sx={{ marginTop: '5rem', marginLeft: '-5rem' }} /> : (newsList.length > 0 ? (
              newsList.map((news, index) => (
                <NewsCard
                  key={index}
                  id={news.id}
                  title={news.title}
                  sub_title={news.sub_title}
                  description={news.short_description}
                  image={news.image}
                  date={news.date}
                />
              ))
            ) : (
              <Typography sx={{color:"white"}}>No news available</Typography>
            ))}
          </Box>
        </Box>
      </>
    </ErrorBoundary>
  )
}
export default News;
