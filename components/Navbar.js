'use client'

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import { useAuthContext } from "../app/context/AuthContext";


function LinkTab(props) {
  const { href, ...otherProps } = props;

  return (
    <Link href={href} passHref underline='none'>
      <Tab
        component="a"
        {...otherProps}
        sx={{
          '&.Mui-selected': {
            color: 'text.secondary',
          },
        }}
      />
    </Link>
  );
}

// Navbar component
const Navbar = ({ value, handleChange }) => {

  const { user, handleSignOut } = useAuthContext()  // gets the global user variable value

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        width: '100%',
        bgcolor: '#262626',
        padding: '8px 16px'
      }}
    >
      <Typography variant="h6" sx={{ fontStyle: 'bold', marginLeft: '10px' }}>BoardBrain</Typography>

      <Tabs
        value={value}
        onChange={handleChange}
        centered
        aria-label="nav tabs example"
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: 'text.secondary', // Set the indicator color to white
          },
          '& .MuiTab-root': {
            '&:hover': {
              color: 'text.secondary', // Set the tab hover color to white
              backgroundColor: 'background.box', // Set the tab hover background color
            },
          },
        }}
      >
        <LinkTab label="Home" href="/" />
        <LinkTab label="Games" href="/games" />
        <LinkTab label="Pricing" href="/pricing" />
        <LinkTab label="About" href="/about" />
      </Tabs>

      <Box>
        {user ? (
          // User is signed in, show dashboard and sign out button
          <>
            <Link href="/admin" underline="none">
              <Button
                component="a"
                variant="contained"
                sx={{
                  width: '120px',
                  marginRight: '10px',
                  bgcolor: '#3700B3',
                  '&:hover': {
                    bgcolor: '#2d9649', // Dark green color for hover
                  },
                }}
              >
                Dashboard
              </Button>
            </Link>

            <Link href="/" underline="none">
              <Button
                component="a"
                variant="contained"
                onClick={handleSignOut}
                sx={{
                  width: '90px',
                  padding: '6px',
                  bgcolor: '#a31b47',
                  '&:hover': {
                    bgcolor: '#d1392e', // Dark green color for hover
                    borderColor: 'text.secondary',
                  },
                }}
              >
                Log out
              </Button>
            </Link>
          </>
        ) : (
          // User is not signed in, show login and sign up button
          <>
            <Link href="/login" underline="none">
              <Button
                component="a"
                variant="contained"
                sx={{
                  width: '80px',
                  marginRight: '10px',
                  bgcolor: 'background.button',
                  '&:hover': {
                    bgcolor: '#2d9649', // Dark green color for hover
                  },
                }}
              >
                Login
              </Button>
            </Link>

            <Link href="/signup" underline="none">
              <Button
                component="a"
                variant="outlined"
                sx={{
                  width: '90px',
                  padding: '6px',
                  color: 'text.secondary',
                  borderColor: 'text.secondary',
                  '&:hover': {
                    bgcolor: 'background.box', // Dark green color for hover
                    borderColor: 'text.secondary',
                  },
                }}
              >
                Sign up
              </Button>
            </Link>
          </>
        )}
      </Box>
    </Box >
  )
}

export default Navbar;
