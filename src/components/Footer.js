import React from 'react';
import { Box, Grid, Container, Stack, Typography, IconButton } from '@mui/material';
import { Link } from 'gatsby';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {

  const links = [{title: 'Home', link: '/'}, {title: 'Our services', link: '/services'}, {title: 'Products', link: '/products'}, {title: 'Contact us', link: 'contact'}]
  
  const date = new Date()


  return (
    <Box 
      sx={{
        height: {xs: 'auto', md: '40vh'},
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
      }}
    >

       
      <Grid 
        container 
        justifyContent="center"
        alignItems="center"
        spacing={3}  
        sx={{height: '90%', width: '80%'}}
      >
        <Grid 
          item 
          xs={12} 
          md={4}        
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            
          }}
        > 
          <Box>

            <Typography
                sx={{
                  color: 'white',
                  fontSize: 20,
                  fontFamily: 'RotoFontBold',
                }}
              >
                  Bado Prod
              </Typography>
              <Typography
                gutterBottom
                sx={{
                  color: 'white',
                  fontSize: 15,
                  fontFamily: 'RotoFont',
                }}
              >
                36, chemin sidi yahiya, <br /> hydra-alger
              </Typography>
              <Typography
                sx={{
                  color: 'white',
                  fontSize: 15,
                  fontFamily: 'RotoFont',
                }}
              >
                  00213 540 446 652 <br /> contact@badoprod.com
              </Typography>

          </Box>
                
        </Grid>

        <Grid 
          item 
          xs={12}
          md={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center'
          }}
        >

          <Stack direction='row' spacing={2}>
                <IconButton 
                    aria-label="instagram" 
                    href='https://www.instagram.com/badoprod/' 
                    target='_blank'
                    sx={{
                      backgroundColor: 'white',
                      '&:hover' : {
                        color: 'white',

                      }
                    }}
                >
                    <InstagramIcon />
                </IconButton>
                <IconButton 
                    aria-label="youTube" 
                    href='https://www.youtube.com/channel/UC7qS08IeMYk0C30SgmyROrw' 
                    target='_blank'
                    sx={{
                      backgroundColor: 'white',
                      '&:hover' : {
                        color: 'white',

                      }
                    }}
                >
                    <YouTubeIcon />
                </IconButton>
                <IconButton 
                    aria-label="facebook" 
                    href='https://www.facebook.com/badoprod/' 
                    target='_blank'
                    sx={{
                        backgroundColor: 'white',
                        '&:hover' : {
                          color: 'white',
                        }
                    }}
                >
                    <FacebookIcon />
                </IconButton>
                <IconButton 
                    aria-label="linkedIn" 
                    href='https://www.linkedin.com/company/badoprod/' 
                    target='_blank'
                    sx={{
                        backgroundColor: 'white',
                        '&:hover' : {
                          color: 'white',
                        }
                    }}
                >
                    <LinkedInIcon />
                </IconButton>
                <IconButton 
                    aria-label="twitter" 
                    href='https://twitter.com/BadoProd' 
                    target='_blank'
                    sx={{
                        backgroundColor: 'white',
                        '&:hover' : {
                          color: 'white',
                        }
                    }}
                >
                    <TwitterIcon />
                </IconButton>
          </Stack>

        </Grid>

        <Grid 
          item
          xs={12}
          md={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'RotoFont',
          }}
        > 
          <Stack  
            sx={{display: {xs: 'none', md: 'block'}}}
          >

            {
                links.map((li, i) => ( 
                    <Typography
                      key={i}  
                      gutterBottom                         
                    >
                        <Link to={li.link}  style={{color: 'white', textDecoration: 'none', fontFamily: 'RotoFont',}} >{li.title}</Link>
                    </Typography> 
                ))
            }
        
          </Stack>

        </Grid>
      </Grid>
      <Grid container>
        <Grid 
          item
          xs={12} 
          md={12}
          sx={{textAlign: 'center', my: 5}}
        >
          <Typography
            paragraph
            variant='body1'
            sx={{
              color: 'white',
              fontSize: 13     
            }}
            
          >
            &copy;  Copyright Bado Prod  {date.getFullYear()}
          </Typography>
        </Grid>

      </Grid>
  
    </Box>
  )
}


export default Footer 
