import * as React from "react";
import Layout from "../components/Layout";
import { Link } from 'gatsby';
import {mainPageStyle as mainStyle, linkStyle}  from '../styles/homepage';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";



// markup
const IndexPage = () => {
  return (
    <Layout pageTitle='Home' pageStyle={mainStyle} context='dark'>
      <Container>
        <Box sx={{my: '80px', width: {xs:'90%', md: 1/2}}}>
          <Typography
              gutterBottom
              variant="h1"
              component='h1'
              sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontSize: {xs: 40, md: 60},
                fontWeight: 1000,
                letterSpacing: '.05rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
            Quality, not quantity
          </Typography>
          <br />
          <Typography
              paragraph
              sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontSize: {xs: 15, md: 25},
                fontWeight: 500,
                letterSpacing: '.05rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
            We have made quality our habit. It’s not something that we just strive for – we live by this principle every day..
          </Typography>
          <Stack spacing={2} my={3} direction="row">
            <Button 
              variant="contained"
              sx={{backgroundColor: 'black'}}
            >
             <Link to='/services' style={linkStyle}>Our services</Link>  
            </Button>
            <Button 
              variant="text"
              sx={{color: 'white'}}
            >
              <Link to='/contact' style={linkStyle}>Contact us</Link>
            </Button>
          </Stack>
        </Box>
      </Container>

    </Layout>
    
      
  )
}

export default IndexPage
