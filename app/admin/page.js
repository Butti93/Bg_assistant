'use client'

import * as React from 'react';
import Navbar from '../../components/Navbar';
import WelcomeText from '../../components/WelcomeText';
import AutocompleteSearch from '../../components/AutocompleteSearch';
import AnswerBox from '../../components/AnswerBox';
import ChatBox from '../../components/ChatBox';

import { ThemeProvider, createTheme, Container, Box } from '@mui/material';

import { useAuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";


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

function Page() {

    const [value, setValue] = React.useState(0);

    const { user } = useAuthContext()  // gets the global user variable value
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user])

    const defaultProps = {
        options: top100Films,
        getOptionLabel: (option) => option.title,
      };
    
      const flatProps = {
        options: top100Films.map((option) => option.title),
      };
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
      const handleQuestionSubmit = (question) => {
        // Do something with the submitted question
        console.log('Submitted question:', question);
      };

    return (
        <ThemeProvider theme={theme}>
        <Box
          sx={{
            bgcolor: 'background.paper',
            color: 'text.primary',
            overscrollBehavior: 'none', // Disable overscroll effect
          }}
        >
          <Navbar value={value} handleChange={handleChange} />
  
          <Container>
            <WelcomeText />
  
            <AutocompleteSearch props={defaultProps} />
  
            <AnswerBox />
  
            <ChatBox onQuestionSubmit={handleQuestionSubmit} />
  
          </Container>
  
          <Box mt={20} display="flex" alignItems="center" justifyContent="space-between" sx={{ height: '50px', width: '100%', bgcolor: '#262626', padding: '8px 16px' }}>
          </Box>
  
        </Box>
      </ThemeProvider>
    );
}

export default Page;


// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
      title: 'The Lord of the Rings: The Two Towers',
      year: 2002,
    },
  ];