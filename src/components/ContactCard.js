import React from 'react';
import { Paper, Stack, Typography, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

export default function ContactCard({info}) {

    const {title, address, phoneNumber, email} = info

    console.log(title);

    
  return (
    <Paper elevation={3} sx={{width: {md: 500, sx: '100%'},}}>
        <Stack spacing={2} sx={{p: 2}}>
            <Typography
                component='p'
                sx={{
                    fontWeight: 550,
                    fontSize: 18,
                    fontFamily: 'RotoFontBold',     
                }}
            >
               {title}   
            </Typography>

            <Divider sx={{backgroundColor: 'lightgray'}} variant='middle' flexItem/>

            <Stack direction='row' sx={{alignItems: 'center'}} spacing={1}>
                <HomeIcon sx={{color: 'black'}} />   
                <Typography
                    component='p'
                    sx={{
                        fontWeight: 500,
                        fontSize: 15,
                        fontFamily: 'RotoFont',
                    }}
                >
                    {address}
                </Typography>
            </Stack>

            <Stack direction='column' divider={<Divider sx={{backgroundColor: 'lightgray'}} orientation='vertical' flexItem />} spacing={1}>

                <Stack direction='row' sx={{alignItems: 'center'}} spacing={1}>
                    <LocalPhoneIcon sx={{color: 'black'}} fontSize="small"/>
                    <Typography
                        component='p'
                        sx={{
                            fontWeight: 500,
                            fontSize: 15,
                            fontFamily: 'RotoFont',
                        }}
                    >
                        {phoneNumber}  
                    </Typography>
                </Stack>

                <Stack direction='row' sx={{alignItems: 'center'}} spacing={1}>
                    <EmailIcon sx={{color: 'black'}} fontSize="small"/>
                    <Typography
                        component='p'
                        sx={{
                            fontWeight: 500,
                            fontSize: 15,
                            fontFamily: 'RotoFont',
                        }}
                    >
                        {email} 
                    </Typography>
                </Stack>

            </Stack>

        </Stack>        
    </Paper>
  )
}




    