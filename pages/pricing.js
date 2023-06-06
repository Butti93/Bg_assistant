import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import Link from '@mui/material/Link';

import React from 'react';

import Navbar from '../components/Navbar';

import { ThemeProvider, createTheme } from '@mui/material';


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


export default function Pricing() {

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
        <Navbar value={2} handleChange={handleChange} />

        <Container disableGutters maxWidth="md" component="main" sx={{ pt: 8, pb: 6 }}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Pricing
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" component="p">
            Quickly build an effective pricing table for your potential customers with
            this layout. It is built with default MUI components with little
            customization.
          </Typography>
        </Container>
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map((tier) => (
              // Enterprise card is full width at sm breakpoint
              <Grid
                item
                key={tier.title}
                xs={12}
                sm={tier.title === 'Enterprise' ? 12 : 6}
                md={4}
              >
                <Paper
                  elevation={3}
                  sx={{
                    '&:hover': {
                      boxShadow: '0 0 8px 8px rgba(255, 255, 255, 0.3)', // White glow shadow
                    },
                  }}
                >
                  <Card>
                    <CardHeader
                      title={tier.title}
                      subheader={tier.subheader}
                      titleTypographyProps={{ align: 'center' }}
                      action={tier.title === 'Pro' ? <StarIcon /> : null}
                      subheaderTypographyProps={{
                        align: 'center',
                      }}
                      sx={{
                        bgcolor: 'background.box',
                      }}
                    />
                    <CardContent
                      sx={{
                        bgcolor: '#262626',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'baseline',
                          mb: 2,
                        }}
                      >
                        <Typography component="h2" variant="h3" color="text.primary">
                          ${tier.price}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                          /mo
                        </Typography>
                      </Box >
                      <ul>
                        {tier.description.map((line) => (
                          <Typography
                            component="li"
                            variant="subtitle1"
                            align="left"
                            key={line}
                          >
                            {line}
                          </Typography>
                        ))}
                      </ul>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center', bgcolor: '#262626' }}>
                      <Link href={tier.buttonLink} passHref underline='none' sx={{ marginBottom: '10px', width: '75%' }}>
                        <Button
                          fullWidth
                          variant={tier.buttonVariant}
                          sx={{
                            color: 'text.primary',
                            bgcolor: 'background.button',
                            '&:hover': {
                              bgcolor: '#2d9649', // Dark green color for hover
                            },
                          }}
                        >
                          {tier.buttonText}
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Paper>

              </Grid>
            ))}
          </Grid>
        </Container>
        <Box mt={20} display="flex" alignItems="center" justifyContent="space-between" sx={{ height: '50px', width: '100%', bgcolor: '#262626', padding: '8px 16px' }}>
        </Box>
      </Box>
    </ThemeProvider >
  );
}


const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'contained',
    buttonLink: '/signup'
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
    buttonLink: '/signup'
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'contained',
    buttonLink: '/signup'
  },
];