import React from 'react';
import Layout from '../components/Layout';
import Contactform from '../components/Contactform';
import { Container, Grid, Box, Paper, Stack, Divider, Typography} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const Contactpage = () => {


  return (
    <Layout pageTitle='Contact us'  context='light'>

        <Container>

            <Typography
              variant='h3' 
              sx={{
                textAlign: 'center',
                my: 5,
                fontFamily: 'monospace',
                fontWeight: 700,
                fontSize: {},
                letterSpacing: '.2rem',
              }}
            >
                Get in Touch
            </Typography>

            <Grid container>

                <Grid item xs={12} md={6}>

                    <Paper elevation={3} sx={{width: {md: 500, sx: '100vw'},}}>
                            <Stack spacing={2} sx={{p: 2}}>
                                <Typography
                                    component='p'
                                    sx={{
                                        fontFamily: 'monospace',
                                        fontWeight: 550,
                                        fontSize: 18,     
                                    }}
                                >
                                    Bado Prod     
                                </Typography>

                                <Divider sx={{backgroundColor: 'lightgray'}} variant='middle' flexItem/>

                                <Stack direction='row' sx={{alignItems: 'center'}} spacing={1}>
                                    <HomeIcon sx={{color: 'black'}} />   
                                    <Typography
                                        component='p'
                                        sx={{
                                            fontFamily: 'monospace',
                                            fontWeight: 500,
                                            fontSize: 15
                                        }}
                                    >
                                        36, chemin sidi yahyia, hydra-alger
                                    </Typography>
                                </Stack>

                                <Stack direction='column' divider={<Divider sx={{backgroundColor: 'lightgray'}} orientation='vertical' flexItem />} spacing={1}>

                                    <Stack direction='row' sx={{alignItems: 'center'}} spacing={1}>
                                        <LocalPhoneIcon sx={{color: 'black'}} fontSize="small"/>
                                        <Typography
                                            component='p'
                                            sx={{
                                                fontFamily: 'monospace',
                                                fontWeight: 500,
                                                fontSize: 15
                                            }}
                                        >
                                            00213 540 446 652  
                                        </Typography>
                                    </Stack>

                                    <Stack direction='row' sx={{alignItems: 'center'}} spacing={1}>
                                        <EmailIcon sx={{color: 'black'}} fontSize="small"/>
                                        <Typography
                                            component='p'
                                            sx={{
                                                fontFamily: 'monospace',
                                                fontWeight: 500,
                                                fontSize: 15
                                            }}
                                        >
                                            contact@badoprod.com 
                                        </Typography>
                                    </Stack>

                                </Stack>

                            </Stack>        
                    </Paper>

                
                    <Box sx={{
                               my: 5, 
                               width: {md: 500, sx: '100vw'}
                               
                            }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.2521495347164!2d3.0391144152210545!3d36.74051827996087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad8b8153cf33%3A0xd129f57aa1cbb3a4!2sBADO%20PROD!5e0!3m2!1sfr!2sdz!4v1662023636145!5m2!1sfr!2sdz"
                            width="100%" 
                            height="350"
                            style={{border: 0}}
                            allowFullScreen
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">                            
                        </iframe>
                    </Box>


                </Grid>

                <Grid item xs={12} md={6}>
                    <Contactform/>
                    <Divider />
                    <Box 
                        sx={{
                            mt: 2, 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'space-around',
                        }}
                    >
                        <Stack spacing={2} direction='row'>
                            <Paper
                                elevation={2} 
                                component='a' 
                                href='https://www.facebook.com/badoprod' 
                                target='_blank'
                                sx={{borderRadius: 7}} 
                            >  
                                <IconButton 
                                    color="primary" 
                                    size='large'
                                > 
                                    <FacebookIcon />
                                </IconButton>        
                            </Paper> 

                            <Paper 
                                elevation={2}
                                component='a' 
                                href='https://www.instagram.com/badoprod/' 
                                target='_blank'
                                sx={{borderRadius: 7}}
                            >
                            
                                <IconButton  
                                    size='large'
                                    sx={{
                                       color: 'rgb(188, 42, 141)'
                                    }}
                                > 
                                    <InstagramIcon />
                                </IconButton>
                                
                            </Paper>       
                        </Stack>
                    </Box>  
                
                </Grid>

            </Grid>
        </Container>
        
    </Layout>
  )
}


export default Contactpage;
