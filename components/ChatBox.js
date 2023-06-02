import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


const Chatbox = ({ onQuestionSubmit }) => {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = () => {
        if (inputText.trim() !== '') {
            onQuestionSubmit(inputText);
            setInputText('');
        }
    };

    return (
        <Box mt={5} textAlign="center" display="flex" flexDirection="column" justifyContent="center" alignItems="center" borderRadius="10px">
            {/* Chat box input section */}
            <TextField
                label="Question..."
                variant="outlined"
                color="primary"
                multiline
                rows={5} // Adjust the number of rows as needed
                value={inputText}
                onChange={handleInputChange}
                sx={{
                    width: '70%',
                    bgcolor: 'background.box',
                    fontStyle: 'italic',
                    borderRadius: '15px',
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '15px',
                    },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'text.secondary', // Set the border color to white
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: 'text.secondary', // Set the label color to white
                    },
                }}
            />
            <Button
                variant="filled"
                color="primary"
                onClick={handleSubmit}
                sx={{
                    width: '85px',
                    height: '40px',
                    bgcolor: 'background.button',
                    '&:hover': {
                        bgcolor: '#2d9649', // Dark green color for hover
                    },
                }}
                style={{
                    marginLeft: '16px',
                    marginTop: '15px', 
                }}
            >
                Submit
            </Button>
        </Box>

    );
};

export default Chatbox;
