import React from 'react';
import { Box } from '@mui/material';



const BackgroundFilter = ({handleClick}) => {


  return (
    <Box
        sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            backgroundColor: 'black',
            opacity: 0.5,
            zIndex: 3
        }} 

        onClick={handleClick}
    >
        
    </Box>
  )
}



export default BackgroundFilter
