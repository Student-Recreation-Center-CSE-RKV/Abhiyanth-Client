import React, { useEffect, useState } from 'react';
import { Avatar, Card, CardContent, Grid, Typography, Container, CircularProgress, Box } from '@mui/material';

const ContributorsPage = () => {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/repos/Student-Recreation-Center-CSE-RKV/Abhiyanth-Client/stats/contributors');
        const data = await response.json();

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const formattedContributors = data.map((contributor) => ({
          id: contributor.author.id,
          login: contributor.author.login,
          avatar_url: contributor.author.avatar_url,
          commits: contributor.total,
          additions: contributor.weeks.reduce((sum, week) => sum + week.a, 0),
          deletions: contributor.weeks.reduce((sum, week) => sum + week.d, 0),
        }));

        formattedContributors.sort((a, b) => b.commits - a.commits);

        setContributors(formattedContributors);
      } catch (error) {
        
      } finally {
        setLoading(false);
      }
    };

    fetchContributors();
  }, []);

  return (
    <Container sx={{ minHeight: '100vh', color: 'white', py: 4 }}>
      {/* Header Section */}
      <Box sx={{ backgroundColor: '#1f1f1f', padding: 4, borderRadius: 2, marginBottom: 4, boxShadow: 3 }}>
        <Typography variant="h4" align="center" color="primary.main" gutterBottom>
          Abhiyanth Website
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          A website to showcase events, culturals, and stalls for our Techno-Annual Tech event.
        </Typography>
        <Typography variant="subtitle1" align="center" color="white" gutterBottom >
          Built by RGUKT RK Valley CSE students
        </Typography>
        <Typography variant="body2" align="center" color="white" gutterBottom>
          Technologies: React, Material UI, Firebase (Storage), CASHFREE for payments, Backend (Firebase Functions)
        </Typography>
      </Box>

      {/* Contributors Section */}
      <Typography variant="h3" align="center" color="white" gutterBottom>
        Abhiyanth Website Contributors
      </Typography>
      <Typography variant="h6" align="center" color="white" gutterBottom >
        Thank you to all contributors for their valuable efforts!
      </Typography>

      {loading && (
        <Typography align="center" mt={4} color="white">
          <CircularProgress color="primary" />
        </Typography>
      )}

      <Grid container spacing={3} mt={4}>
        {contributors.map((contributor) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={contributor.id}>
            <Card sx={{ backgroundColor: '#1E1E1E', textAlign: 'center', p: 2, boxShadow: 5, borderRadius: 2 }}>
              <Avatar src={contributor.avatar_url} alt={contributor.login} sx={{ width: 100, height: 100, margin: 'auto', border: '3px solid #ffffff' }} />
              <CardContent>
                <Typography variant="h6" color="white" gutterBottom>
                  {contributor.login}
                </Typography>
                <Typography variant="body2" color="white">
                  Commits: <strong>{contributor.commits}</strong>
                </Typography>
                <Typography variant="body2" color="success.main">
                  Additions: <strong>{contributor.additions}</strong> + +
                </Typography>
                <Typography variant="body2" color="error.main">
                  Deletions: <strong>{contributor.deletions}</strong> - -
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ContributorsPage;
