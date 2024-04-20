import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import RecipeReviewCard from './DisplayNewsCard';
import Skeleton from '@mui/material/Skeleton';

const NewsDisplay = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const apiUrl1 = 'https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=en&topicId=514';
      const apiUrl2 = 'https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=en&topicId=536';
      const apiUrl3 = 'https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=en&topicId=547';
      const apiurl4='https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=en&topicId=30540';
      const apiurl5= 'https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=en&topicId=30593';
      const apiurl6='https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=en&topicId=30584';
      const [response1, response2, response3,response4,response5,response6] = await Promise.all([
        axios.get(apiUrl1),
        axios.get(apiUrl2),
        axios.get(apiUrl3),
        axios.get(apiurl4),
        axios.get(apiurl5),
        axios.get(apiurl6)
      ]);
  
      const combinedResults = [
        ...response1.data.Result.Resources.Resource,
        ...response3.data.Result.Resources.Resource,
        ...response4.data.Result.Resources.Resource,
        ...response2.data.Result.Resources.Resource,
        ...response5.data.Result.Resources.Resource,
        ...response6.data.Result.Resources.Resource,
      ];
  
      setNews(combinedResults);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error('Error fetching news:', error);
      setLoading(false); // Set loading to false if there's an error
    }
  };

  return (
    <Container maxWidth='lg'>
      <Typography variant="h4" style={{ margin: '20px', color: '#242424', fontSize: { xs: '32px', sm: '64px' }, fontFamily: 'Kanit, sans-serif', fontWeight: '600', textTransform: 'capitalize', textAlign: 'center', lineHeight: { xs: 1.5, sm: '79.36' }, letterSpacing: '0.13', wordWrap: 'break-word' }}>Some Articles on Menstrual Health</Typography>
      <Grid container spacing={2}>
        {loading ? ( // Display loader if loading is true
          Array.from({ length: 6 }).map((_, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Skeleton variant="rectangular" height={200} animation="wave" />
            </Grid>
          ))
        ) : (
          news.map((article, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <RecipeReviewCard article={article} />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default NewsDisplay;
