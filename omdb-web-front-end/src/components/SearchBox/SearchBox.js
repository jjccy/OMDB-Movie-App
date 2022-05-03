import React , {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Close from '@mui/icons-material/Close';

// css
import './_SearchBox.scss'

function SearchBox({
    label, 
    onSerach,
    className
}) {
    const checkSerachLabel = label ? label : "Search Fields";
    const [value, setValue] = useState("")

    const handleSearch = (event) => {
        onSerach(value);
    }

    const clearSerach = (event) => {
        setValue("")
    }

    useEffect(() => {
        handleSearch();
    }, [value])

    return (

        <Paper
            sx={{ 
                p: '2px 4px', 
                display: 'flex', 
                alignItems: 'center', 
                width: 'min(92vw, 700px)' 
            }}
            className={`search-box ${className}`}
            >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder={`${checkSerachLabel}`}
                inputProps={{ 'aria-label': `${checkSerachLabel.toLowerCase()}` }}
                value={value}
                onChange={event=>{
                    setValue(event.target.value)
                }}
                onKeyPress={(ev) => {
                    if (ev.key === 'Enter') {
                        handleSearch();
                        ev.preventDefault();
                    }
                }}
            />
            {
                value !== "" 
                &&
                <IconButton 
                    sx={{ p: '10px' }} 
                    aria-label="close"
                    onClick={clearSerach}
                >
                    <Close />
                </IconButton> 
            }
            <IconButton 
                sx={{ p: '10px' }} 
                aria-label="search"
                onClick={handleSearch}
            >
                <SearchIcon/>
            </IconButton>
        </Paper>


    )
}

export default SearchBox