import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import './styles.css'

export default function BasicTextFields(props) {
   return (
      <div id='search-bar'>
         <Box
            component="form"
            sx={{
               '& > :not(style)': { m: 1, width: '200px' },
            }}
            noValidate
            autoComplete="off"
         >
         
            <TextField id="filled-basic" label="Filled" variant="filled"/>
         
         </Box>
         <div id='search-icon'>
            <SearchIcon onClick={props.onSearch}></SearchIcon>
         </div>
     </div>
   );
 }
