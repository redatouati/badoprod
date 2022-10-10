import React, {useState} from 'react';
import {Stack, Paper, Typography, IconButton } from '@mui/material';



const SocialMediaContainer = ({socialMediaItems, headerText, style}) => {

  

    return(
  
      <Paper 
        sx={style} 
        elevation={0}
      >
        <Typography
            variant='h1'
            gutterBottom
            sx={{
              fontSize: {xs: 35, md: 45},
              fontFamily: 'RotoFont',
              textAlign: 'center',
              marginBottom: 5,
            }}
          > 
            {headerText && headerText}
        </Typography>
  
        <Stack 
          direction='row'
          justifyContent='space-around'
          sx={{
            px: {xs: 2, md: 10}
            
          }}
        >

          {
            socialMediaItems.map((item, i) => {

              const IconComponent = item.iconComponent

              return (
                <Paper 
                  elevation={2}
                  sx={{borderRadius: 10}}
                  key={i}
                >
                  <IconButton 
                    aria-label={item.name}
                    color={item.color}
                    size='large'
                    href={item.link}
                    target='_blank'
                  >
                    {IconComponent}
                  </IconButton>
                </Paper>  
              )
            })
          }
                 
        </Stack>
        
      </Paper> 
  
    )
}


export default SocialMediaContainer