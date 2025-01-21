import React, { useState, useEffect } from 'react';
import projectsData from './projects.json';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';


import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    TextField,
    Grid,
    Button,
    Skeleton,
    Box,
} from '@mui/material';

const ProjectsPage = () => {
    const [allProjects, setAllProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [visibleProjects, setVisibleProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Start with loading state
    const [searchQuery, setSearchQuery] = useState('');
    const projectsPerPage = 9;

    useEffect(() => {
        setTimeout(() => {
            setAllProjects(projectsData);
            setFilteredProjects(projectsData);
            setVisibleProjects(projectsData.slice(0, projectsPerPage));
            setIsLoading(false);
        }, 1500);
    }, []);

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = allProjects.filter((project) =>
            project.title.toLowerCase().includes(query.toLowerCase()) || project.username.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProjects(filtered);
        setVisibleProjects(filtered.slice(0, projectsPerPage));
    };

    const loadMoreProjects = () => {
        if (isLoading || visibleProjects.length >= filteredProjects.length) return;

        const nextProjects = filteredProjects.slice(
            visibleProjects.length,
            visibleProjects.length + projectsPerPage
        );
        setVisibleProjects((prev) => [...prev, ...nextProjects]);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.offsetHeight - 200
            ) {
                loadMoreProjects();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [visibleProjects, isLoading, filteredProjects]);

    return (
        <Box sx={{ backgroundColor: '#181818', minHeight: '100vh', padding: 4, color: '#e0e0e0', paddingTop: "80px" }}>
            <Box
                sx={{
                    backgroundColor: '#2196f3',
                    padding: 3,
                    borderRadius: 2,
                    textAlign: 'center',
                    marginBottom: 4,
                    color: '#fff',
                }}
            >
                <Typography variant="h4" fontWeight="bold">
                    Project Display
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 1, color: '#f1f1f1' }}>
                    Explore amazing projects contributed by our Students.
                </Typography>
            </Box>

            <TextField
                variant="outlined"
                fullWidth
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search name/projects..."
                sx={{
                    marginBottom: 4,
                    backgroundColor: '#282828',
                    borderRadius: 1,
                    input: { color: '#e0e0e0' },
                }}
            />

            <Grid container spacing={3}>
                {isLoading
                    ? Array.from({ length: projectsPerPage }).map((_, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <SkeletonCard />
                        </Grid>
                    ))
                    : visibleProjects.map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <ProjectCard project={project} />
                        </Grid>
                    ))}
            </Grid>

            {!isLoading && visibleProjects.length >= filteredProjects.length && (
                <Typography textAlign="center" color="textSecondary" sx={{ marginTop: 4, color: '#e0e0e0' }}>
                    🎉 You've reached the end!
                </Typography>
            )}
        </Box>
    );
};

const ProjectCard = ({ project }) => {
    const { title, description, tech, github_url, username, maker_image, live_url } = project;

    return (
        <Card
            sx={{
                backgroundColor: '#282828',
                color: '#e0e0e0',
                borderRadius: 2,
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                height: '100%',
            }}
        >
            <CardMedia
                component="img"
                image={maker_image}
                alt={username}
                sx={{
                    borderRadius: '50%',
                    height: 60,
                    width: 60,
                    margin: 2,
                    border: '2px solid #2196f3',
                }}
            />
            <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body2" gutterBottom sx={{ paddingBottom: "10px" }}>
                    {description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginBottom: 2 }}>
                    {tech.map((item, index) => (
                        <Button
                            key={index}
                            variant="contained"
                            sx={{
                                backgroundColor: '#2196f333',
                                color: '#2196f3',
                                textTransform: 'capitalize',
                            }}
                            size="small"
                        >
                            {item}
                        </Button>
                    ))}
                </Box>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Button
                        href={github_url}
                        target="_blank"
                        rel="noreferrer"
                        startIcon={<GitHubIcon style={{ fontSize: '24px', color: '#2196f3' }} />}
                        sx={{
                            color: '#2196f3',
                            textTransform: 'capitalize',
                        }}
                    >
                        View on GitHub
                    </Button>
                    {
                        live_url && (<Button
                            href={live_url}
                            target="_blank"
                            rel="noreferrer"
                            startIcon={<LanguageIcon style={{ fontSize: '24px', color: '#2196f3' }} />}
                            sx={{
                                color: '#2196f3',
                                textTransform: 'capitalize',
                            }}
                        >
                            Live Link
                        </Button>)
                    }

                </Box>
                <Typography
                    variant="caption"
                    sx={{ marginTop: 2, display: 'block' }}
                >
                    @{username}
                </Typography>
            </CardContent>
        </Card>
    );
};

const SkeletonCard = () => (
    <Card
        sx={{
            backgroundColor: '#282828',
            color: '#fff',
            borderRadius: 2,
            height: '100%',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        }}
    >
        <Skeleton variant="circular" width={50} height={50} sx={{ margin: 2 }} />
        <CardContent>
            <Skeleton variant="text" height={30} width="80%" />
            <Skeleton variant="text" height={20} width="60%" />
            <Skeleton variant="rectangular" height={40} width="100%" sx={{ marginTop: 2 }} />
        </CardContent>
    </Card>
);

export default ProjectsPage;