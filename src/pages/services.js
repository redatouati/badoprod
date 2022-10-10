import React from 'react';
import {useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from '../components/Layout';
import {Link, graphql} from 'gatsby';
import { mainPageStyle as mainStyle} from '../styles/services';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {Box, Paper, Grid, Typography, Button} from '@mui/material';
import { Container } from '@mui/system';
import SearchEngineOptimization from '../components/utility/Seo';
import { t } from 'i18next';



const Item = ({service}) => {

  const {image, title} = service

   return (

      <Paper 
        elevation={3} 
        sx= {{
              width: 250,
              height: 300,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 2,
            }}
      >

        <Box>

          <GatsbyImage 
            image={getImage(image)}
            alt={image.name}
            width={400}
            height={300}
          />

        </Box>

   
          <Typography 
            paragraph
            sx={{
              height: 100,
              fontFamily: 'RotoFont',
              fontSize: 20,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          {title}
          </Typography>

      
      </Paper>

   )

}

const ServicesPage = ({data}) => {

  const cardsImages = data.allFile.edges;
  
  const {t} = useTranslation()

  const displayImage = (name) => {
    return cardsImages.filter(img => img.node.name === name)[0].node

  }

  console.log(t("Investment advice and company creation"));



  const services = [{title: t("Investment advice and company creation"), image: displayImage('investment')}, 
                    {title: t("Communication strategy consulting and advertising"), image: displayImage('comunication')}, 
                    {title: t("Visual identity - BRANDING - creation"), image: displayImage('branding')}, 
                    {title: t("Audio-visual production"), image: displayImage('audio-visio-prod')},
                    {title: t("Classic & digital marketing"), image: displayImage('marketing')},
                    {title: t("Website creation and optimazation"), image: displayImage('webdev')},
                    {title: t("Network installation, data processing"), image: displayImage('comunication')},
                    {title: t("Offset and digital printing on any support, signage panel"), image: displayImage('digital-priniting')}
                  ]

  return (
    
    <Layout pageTitle='Our Services' pageStyle={mainStyle} context='light'>

        <Container sx={{m: 'auto'}}>

        <Grid 
            container 
            spacing= {2} 
            sx={{
              py: 1,
              my: 7,
            }}
          >
            {services.map((service, i) => (

                <Grid key={i} item xs={12} md={4}>

                    <Item service={service}/>

                </Grid>

            ))}
            <Grid item xs={12} md={4}>

              <Paper 
                elevation={3} 
                sx= {{
                      width: 250,
                      height: 300,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      p: 2,
                    }}
              >

                <Typography
                    variant='h3'
                    gutterBottom
                    sx={{
                      textAlign: 'center',
                      fontSize: 30,
                      fontFamily: 'RotoFont'
                    }}
                >
                  {t("Interested in working with us ?")}
                  <br/>
                  <Button variant='contained' sx={{my: 2, fontFamily: 'RotoFont'}} size='medium'>
                    <Link to='/contactus' style={{fontSize: '25', textDecoration: 'none', color: 'white'}}> {t("CONTACT US")}</Link>
                  </Button>
                  
                </Typography>

              </Paper>
                
            </Grid>
          </Grid>

        </Container>
        
           
    </Layout>
    
  )
}

export default ServicesPage

export const query = graphql`query($language: String!) {
  allFile(filter: {sourceInstanceName: {eq: "services_illustrations"}}) {
    edges {
      node {
        name,
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        } 
      }
    }
  }
  locale: allLocale(filter: {ns: {eq: "services"}, language: {eq: $language}}) {
    edges {
      node {
        ns
        language
        data
      }
    }
  }
}` 

export const Head = () => (
  <SearchEngineOptimization title='SERVICES'/>
)
