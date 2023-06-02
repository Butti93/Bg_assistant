import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const AnswerBox = () => {
    return (
        <Box mt={20}
            sx={{
                marginLeft: 'auto',
                marginRight: 'auto',
                height: '200px',
                width: '100%',
                bgcolor: '#262626',
                padding: '20px',
                overflow: 'auto',
            }}
        >
            <Typography variant="body1" sx={{ fontStyle: 'italic' }}>The answer will appear here...</Typography>
        </Box>
    )
}

export default AnswerBox;

