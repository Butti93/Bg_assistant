'use client'

import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { ThemeProvider, createTheme } from '@mui/material';

import Navbar from '../components/Navbar';
import { BorderColor } from '@mui/icons-material';


const theme = createTheme({
    palette: {
        background: {
            paper: '#030303',
            box: '#585959',
            button: '#39b359'
        },
        text: {
            primary: '#ebf0f0',
            secondary: '#c5c9c9',
        },
    },
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


export default function Games() {

    const handleChange = (event, newValue) => {

    };

    return (
        <ThemeProvider theme={theme} >
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: "center",
                    bgcolor: 'background.paper',
                    color: 'text.primary',
                    margin: '-8px'
                }}
            >
                <Navbar value={1} handleChange={handleChange} />

                <Container
                    mt
                    sx={{
                        width: '80%',
                    }}
                >
                    <Typography
                        mt={8}
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Boardgames
                    </Typography>

                    <Typography variant="h6" align="center" color="text.secondary" paragraph>
                        Something short and leading about the collection below—its contents,
                        the creator, etc. Make it short and sweet, but not too short so folks
                        don not simply skip over it entirely.
                    </Typography>

                    <Grid mt={8} container spacing={5}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="div"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image="https://source.unsplash.com/random?wallpapers"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the
                                            content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">View</Button>
                                        <Button size="small">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <Box mt={20} display="flex" alignItems="center" justifyContent="space-between" sx={{ height: '50px', width: '100%', bgcolor: '#262626', padding: '8px 16px' }}>
                </Box>
            </Box>
        </ThemeProvider>
    );
}