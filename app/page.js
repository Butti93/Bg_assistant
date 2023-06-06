'use client'

import * as React from 'react';
import bgImage from "../public/bg_dice.jpg";
import Navbar from '../components/Navbar';
import WelcomeText from '../components/WelcomeText';
import AutocompleteSearch from '../components/AutocompleteSearch';
import AnswerBox from '@/components/AnswerBox';
import ChatBox from '@/components/ChatBox';

import { ThemeProvider, createTheme, Container, Box } from '@mui/material';


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


export default function Home() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          bgcolor: 'background.paper',
          color: 'text.primary',
          overscrollBehavior: 'none',
          backgroundImage: `url(${bgImage.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <Navbar value={value} handleChange={handleChange} />

        <Container>
          <WelcomeText />
        </Container>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50px',
            bgcolor: '#262626',
            padding: '8px 16px',
          }}
        >
          {/* Footer Content */}
        </Box>

      </Box>
    </ThemeProvider>
  )
}
