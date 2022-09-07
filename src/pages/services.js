import React from 'react';
import Layout from '../components/Layout';
import {Link} from 'gatsby';
import { mainPageStyle as mainStyle, boxStyle } from '../styles/services';
import {Box, Paper, Grid, Typography, Button} from '@mui/material';
import { Container } from '@mui/system';




const Item = ({service}) => {

   return (

      <Paper 
        elevation={3} 
        sx= {{
              height: {xs: 'auto', md: 150}, 
              width: {xs: 'auto', md: 250},
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              px: 1,
            }}
      >

        <Typography 
          component='p' 
          sx={{
            fontFamily: 'monospace',
            fontSize: {xs: 15, sm: 25, md: 20},
            fontWeight: 650,
            letterSpacing: '.05rem',
            color: 'inherit',
            textDecoration: 'none',
            textAlign: 'center',
            height: 'auto', 
          }}
        >
         {service}
        </Typography>
      </Paper>

   )

}

const ServicesPage = () => {

  const services = ['Investment advice and company creation', 
                    'Communication strategy consulting and advertising', 
                    'Visual identity - BRANDING - creation', 
                    'Audio-visual production',
                    'Classic & digital marketing',
                    'Website creation and optimazation',
                    'Network installation, data processing',
                    'Offset and digital printing on any support, signage panel'
                   ]

  return (
    <Layout pageTitle='Our Services' pageStyle={mainStyle} context='light'>
        <Container>
              <Grid 
                container 
                spacing={{xs: 4, sm: 3, md: 2}} 
                sx={{py: 2, my: 7,}}
              >
                {services.map((service, i) => (

                    <Grid key={i} item xs={12} md={3}>

                       <Item service={service}/>

                    </Grid>

                ))}
              </Grid>

              <Box 
                component='div'
                sx={{
                  height: {md: '30vh', xs: '25vh'},
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >

              <Typography
                variant='h3'
                sx={{
                  textAlign: 'center',
                  fontSize: {xs: 20, sm: 40, md: 45},
                }}
              >
                Interested by working with us ? 
                <br/>
                <Button variant='contained' sx={{my: 2}} size='medium'>
                   <Link to='/contactus' style={{fontSize: '25', textDecoration: 'none', color: 'white'}}> contact us</Link>
                </Button>
                
              </Typography>

        </Box>

      </Container>
          
    </Layout>
    
  )
}

export default ServicesPage;
