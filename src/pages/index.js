import React, {useEffect} from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from "../components/Layout";
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {mainPageStyle as mainStyle, linkStyle, descriptionStyle}  from '../styles/homepage';
import {Typography, Grid, Stack, Container, Paper, Box, Button} from '@mui/material';
import SearchEngineOptimization from "../components/utility/Seo";





const TextSection = () => {

  const {t} = useTranslation()

  return(

    <Box
      sx={{
        mx: 5,
        my:  20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
     
    >
        <Typography
          gutterBottom
          variant="h1"
          component={motion.h1}
          initial={{opacity: 0, x: -10}}
          animate={{opacity: 1, x: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          sx={{
            fontFamily: 'RotoFontBold',
            fontSize: {xs: 40, md: 60},
            letterSpacing: '.05rem',
            color: 'inherit',
            textDecoration: 'none',
            opacity: 0,
          }}
        >
          Quality, not quantity
        </Typography>
        <br />
        <Typography
          paragraph
          component={motion.p}
          initial={{opacity: 0, x: -10}}
          animate={{opacity: 1, x: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
          sx={{
            fontFamily: 'RotoFont',
            fontSize: {xs: 20, md: 25},
            fontWeight: 500,
            letterSpacing: '.05rem',
            color: 'inherit',
            textDecoration: 'none',
            opacity: 0,
          }}
        >
          {t("introductionquot")}
        </Typography>
        <Stack 
          spacing={2} 
          my={1} 
          direction="row" 
          sx={{my: 5}}
          component={motion.div}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{ ease: "easeOut", duration: 1, delay: 1 }}
        >
          <Button 
            variant="contained"
            sx={{backgroundColor: 'black'}}
          >
            <Link to='/services' style={linkStyle}>{t("oursrvicesbutton")}</Link>  
          </Button>
          <Button 
            variant="text"
            sx={{color: 'white'}}
          >
            <Link to='/contact' style={linkStyle}>{t("contactusbutton")}</Link>
          </Button>
        </Stack>
    </Box>
  )
}

const ServicesCards = ({service, index}) => {

  const controls = useAnimation();

  const [ref, inView] = useInView();

  const {title, text, image} = service

  const isPair = (index + 1) % 2 === 0 

  const variants = {

    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: "easeOut",
        duration: 0.8
      }
    },
    
  }

  useEffect(() => {
    if (inView) {
      controls.start("onscreen");
    }
  }, [controls, inView]);


  return(

    <Paper 
      component={motion.div}
      elevation={2}
      sx={{
        my: 5,
        p: 2
      }}
      whileInView="onscreen"
      initial="offscreen"
      variants={variants}
      viewport={{ amount: 0.6}}
    >

      <Grid   
        container 
        sx={{justifyContent: 'center', alignItems:'center'}} 
        spacing={2}
        direction={{xs: 'column', md: isPair ? 'row-reverse' : 'row'}}
      >
        <Grid item xs={12} md={4}>
          <GatsbyImage
            image={getImage(image)}
            alt={image.name}
          />
        </Grid>
        
        <Grid item xs={12} md={6} >
          <Typography
            gutterBottom
            variant='h1'
            sx={{
              fontFamily: 'RotoFontBold',
              fontSize: {xs: 30, md: 40},
              color: 'black',
            }}
          >
            {title}
          </Typography>
          <Typography
          paragraph
          sx={{
            fontFamily: 'RotoFont',
            fontSize: {xs: 20, md: 25},
            color: 'black'
          }}
          >
            {text}
          </Typography>

        </Grid>

      </Grid>

    </Paper>

    

  )

}



const IndexPage = ({data}) => {


  const cardsImages = data.allFile.edges

  const { t } = useTranslation();

  console.log(t("businessservicetext"));

  
  const displayImage = (name) => {
    return cardsImages.filter(img => img.node.name === name)[0]

  }



  const services = [
    {title: 'Business', 
     text: t("businessservicetext"),
     image: displayImage('Business').node
    },
    {title: 'Advertising', 
     text: t("advertisingservicetext"),
     image: displayImage('Announcement').node
    },
    {title: 'Development', 
     text: t("devservicetext"),
     image:  displayImage('Developement').node
    },
    {title: 'Optimization', 
     text: t("optimazationservicetext"),
     image:  displayImage('Optimization').node
    },
  ]



  return (
    <Layout pageTitle='Home' pageStyle={mainStyle} context='dark'>

        <Box sx={descriptionStyle}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <TextSection />
            </Grid>
          </Grid>  
        </Box>

        <Box sx={{my: 15}}>

          <Container>

            <Typography
              gutterBottom
              variant="h2"
              align="center"
              sx={{color: 'black', fontFamily: 'RotoFont',}}
            > 
              {t("aboutusheader")}
            </Typography>

            <Typography
                  paragraph
                  variant="body1"
                  align="center"
                  sx={{
                    color: 'black', 
                    fontFamily: 'RotoFont',
                    fontSize: 30, 
                    my: {xs: 2, md: 5}
                  }}
                > 
                  {t("aboutustext")}

            </Typography>        
          </Container>
        </Box>

        <Box 
          sx={{
              my: 10, 
              mx: {xs: 5, md: 7},
              py: 2,
          }}
        >

          <Typography
            gutterBottom
            variant="h2"
            align="center"
            sx={{color: 'black', fontFamily: 'RotoFont'}}
          > 
            {t("servicesheader")}
          </Typography>

          {
            services.map((service, i) => (
            
              <ServicesCards key={i} index={i} service={service} />
          
            ))
          }

        </Box>
          
        

    </Layout>
    
      
  )
}

export default IndexPage

export const query = graphql`query($language: String!) {
  allFile(filter: {sourceInstanceName: {eq: "cards_illustations"}}) {
    edges {
      node {
        name,
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, width: 400, height: 400)
        } 
      }
    }
  }
  locales: allLocale(filter: {ns: {eq: "home"}, language: {eq: $language}}) {
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
  <SearchEngineOptimization title="HOME" />
)
