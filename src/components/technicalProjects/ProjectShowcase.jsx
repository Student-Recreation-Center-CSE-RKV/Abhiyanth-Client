import React, { useState, useEffect } from 'react';
import projectsData from './projects.json';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';

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
    InputAdornment,
    Divider,
} from '@mui/material';

const ProjectsPage = () => {
    const [allProjects, setAllProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [visibleProjects, setVisibleProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
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
            project.title.toLowerCase().includes(query.toLowerCase()) ||
            project.username.toLowerCase().includes(query.toLowerCase())
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
        // eslint-disable-next-line
    }, [visibleProjects, isLoading, filteredProjects]);

    return (
        <>
            <Box sx={{ backgroundColor: '#121212', minHeight: '100vh', padding: 4, color: '#e0e0e0', paddingTop: '80px' }}>
                <Box
                    sx={{
                        backgroundColor: '#1e88e5',
                        padding: 3,
                        borderRadius: 3,
                        textAlign: 'center',
                        marginBottom: 4,
                        color: '#fff',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                    }}
                >
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        Project Showcase
                    </Typography>
                    <Typography variant="body2" sx={{ marginTop: 1, color: '#e3f2fd' }}>
                        Discover incredible projects from talented students.
                    </Typography>
                </Box>

                <Box sx={{ padding: "10px", color: '#e0e0e0', textAlign: "center" }}>
                    If you want your project to be showcased here, fill out the form
                    <a
                        href="https://forms.gle/1eC7fjgmNYaKcBJv5"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: '#2196f3', textDecoration: 'none', marginLeft: '5px' }}
                    >
                        here.
                    </a>
                </Box>

                <TextField
                    variant="outlined"
                    fullWidth
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search by name or project..."
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: '#e0e0e0' }} />
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        marginBottom: 4,
                        backgroundColor: '#282828',
                        borderRadius: 2,
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
        </>

    );
};

const ProjectCard = ({ project }) => {
    const { title, description, tech, github_url, username, maker_image, live_url } = project;

    return (
        <Card
            sx={{
                backgroundColor: '#1c1c1c',
                color: '#e0e0e0',
                borderRadius: 3,
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
                height: '100%',
                transition: 'transform 0.3s',
                '&:hover': {
                    transform: 'scale(1.05)',
                },
            }}
        >
            {maker_image ? (
                <CardMedia
                    component="img"
                    image={maker_image}
                    alt={username}
                    sx={{
                        borderRadius: '50%',
                        height: 80,
                        width: 80,
                        margin: '16px auto',
                        border: '3px solid #1e88e5',
                    }}
                />
            ) : (
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        height: 80,
                        width: 80,
                        margin: '16px auto',
                        border: '3px solid #1e88e5',
                        backgroundColor: '#404040',
                    }}
                >
                    <PersonIcon style={{ fontSize: 40, color: '#1e88e5' }} />
                </Box>
            )}
            <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ paddingBottom: 2 }}>
                    {description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginBottom: 2 }}>
                    {tech.map((item, index) => (
                        <Button
                            key={index}
                            variant="outlined"
                            sx={{
                                borderColor: '#1e88e5',
                                color: '#1e88e5',
                                textTransform: 'capitalize',
                                '&:hover': {
                                    backgroundColor: '#1e88e533',
                                },
                            }}
                            size="small"
                        >
                            {item}
                        </Button>
                    ))}
                </Box>
                <Divider sx={{ marginBottom: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {github_url && (
                        <Button
                            href={github_url}
                            target="_blank"
                            rel="noreferrer"
                            startIcon={<GitHubIcon style={{ fontSize: 20, color: '#1e88e5' }} />}
                            sx={{ color: '#1e88e5', textTransform: 'capitalize' }}
                        >
                            GitHub
                        </Button>
                    )}
                    {live_url && (
                        <Button
                            href={live_url}
                            target="_blank"
                            rel="noreferrer"
                            startIcon={<LanguageIcon style={{ fontSize: 20, color: '#1e88e5' }} />}
                            sx={{ color: '#1e88e5', textTransform: 'capitalize' }}
                        >
                            Live Demo
                        </Button>
                    )}
                </Box>
                <Typography variant="caption" sx={{ display: 'block', marginTop: 2, color: '#bdbdbd' }}>
                    @{username}
                </Typography>
            </CardContent>
        </Card>
    );
};

const SkeletonCard = () => (
    <Card
        sx={{
            backgroundColor: '#1c1c1c',
            color: '#fff',
            borderRadius: 3,
            height: '100%',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
        }}
    >
        <Skeleton variant="circular" width={60} height={60} sx={{ margin: 2 }} />
        <CardContent>
            <Skeleton variant="text" height={30} width="80%" />
            <Skeleton variant="text" height={20} width="60%" />
            <Skeleton variant="rectangular" height={40} width="100%" sx={{ marginTop: 2 }} />
        </CardContent>
    </Card>
);

export default ProjectsPage;
