import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


const AutocompleteSearch = ({ props }) => {

    const defaultProps = {
        // Define your default props here
    };

    return (
        <Box mt={15} textAlign="center" display="flex" justifyContent="center" alignItems="center">
            <Autocomplete
                sx={{
                    width: '300px',
                    bgcolor: 'background.box',
                    borderRadius: '15px',
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '15px',
                    },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'text.secondary',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: 'text.secondary',
                    },
                    '& .MuiAutocomplete-popupIndicator': {
                        color: 'text.secondary',
                    },
                    '& .MuiAutocomplete-option': {
                        '&:hover': {
                            bgcolor: 'text.secondary',
                        },
                    },
                }}
                {...props}
                id="clear-on-escape"
                clearOnEscape
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Boardgame search"
                        variant="outlined"
                    />
                )}
            />
        </Box>
    )
}

export default AutocompleteSearch;