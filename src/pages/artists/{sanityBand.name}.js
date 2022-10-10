import React, {useState} from 'react';
import { graphql } from 'gatsby';
import {useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from '../../components/Layout';
import {Grid, Box, Stack, Paper, Typography, IconButton } from '@mui/material';
import SocialMediaContainer from '../../components/SocialMediaContainer';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchEngineOptimization from '../../components/utility/Seo';
import {mainPageStyle as mainStyle}  from '../../styles/bandpage';




const ParagraphComponent = ({title, description}) => {

  const {t} = useTranslation()

  console.log(t(title));


  return (

    <Paper
      elevation={3}
      sx={{m: {xs: 2, md: 4}, p: {xs: 3, md: 4}}}
    >
      <Stack direction='column'>

        <Typography
          variant='h1'
          gutterBottom
          sx={{
            fontSize: {xs: 35, md: 55},
            fontFamily: 'RotoFont',
          }}
        >
          {t(title)}
        </Typography>

        <Typography
          paragraph
          variant='body2'
          sx={{
            fontSize: 19,
            fontFamily: 'RotoFont',
          }}
        >
          {t("description")}
        </Typography>


      </Stack>

    </Paper>

  )

}

const BandMember = ({bandMember}) => {

  const memberImage = getImage(bandMember.image.asset)

  const {role, name} = bandMember

  const {t} = useTranslation()



  return (
    
      <Grid  item xs={6} md={4}>
        <Paper elevation={2} sx={{mb: 2, width: 150}}>
        <GatsbyImage 
          image={memberImage}
          alt={bandMember.name}
        />
        </Paper>
        
        <Typography
         variant='h3'
         gutterBottom
         sx={{fontSize: {xs: 15, md: 20}, fontWeight: 500, fontFamily: 'RotoFont',}}
        >
         {t(name)}
        </Typography>
        <Typography
         variant='h3'
         gutterBottom
         sx={{fontSize: {xs: 10, md: 14}, fontFamily: 'RotoFont',}}
        >
         {t(role)}
        </Typography>
      </Grid>
  )
}

const ImageGalery = ({album}) => {

  const {edges} = album

  const {t} = useTranslation()


  return(
    <Paper
      elevation={3}
      sx={{m: {xs: 2, md: 4}, p: {xs: 3, md: 4}}}
    >  
      <Stack sx={{ maxHeight: 500, overflowY: 'scroll'}}>

        <Typography
          variant='h1'
          gutterBottom
          sx={{
            fontSize: {xs: 35, md: 55},
            fontFamily: 'RotoFont',
          }}
        >
          {t("Feed")}
        </Typography>

        <Grid container
          rowSpacing={1}
          columnSpacing={0}
        >

          {
            edges.map((edge, i) => (
              <Grid 
                item 
                key={i}
                xs={3}
                md={4}
              >
                <GatsbyImage 
                image={getImage(edge.node.localFile)}
                />    
              </Grid>
            ))
          }

        </Grid>

      </Stack>
      
    </Paper>
  )



}


const ArtistPage = ({data}) => {

    const {t} = useTranslation()

    const {sanityBand} = data
    const {allInstagramContent} = data
    const {_rawSocialmedia: socialMedia} = sanityBand
    const posterImage = getImage(sanityBand.poster.asset.gatsbyImageData)

    
    const socialMediaItems = [
        {
          name: 'Instagram', 
          link: socialMedia.instagram, iconComponent: 
          <InstagramIcon fontSize='large' sx={{ color: 'rgb(188, 42, 141)'}}/>
        },
        {
          name: 'Facebook', 
          link: socialMedia.facebook, 
          iconComponent: <FacebookRoundedIcon fontSize='large' sx={{color: 'rgb(23, 169, 253)'}}/>
        },
        {
          name: 'Youtube', 
          link: socialMedia.youtube, 
          iconComponent: <YouTubeIcon fontSize='large' sx={{color: 'rgb(255 0 0)'}}/>
        }
    ]
  

    return (
        <Layout pageTitle={sanityBand.name} context='light' pageStyle={mainStyle}>
          <GatsbyImage
            image={posterImage}
            alt={`${sanityBand.name}_poster}`} 
          />
          <Box sx={{height: '100%'}}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <ParagraphComponent title={sanityBand.name} description={sanityBand.presentation}/>
                <ImageGalery album={allInstagramContent}/>
              </Grid>
  
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={3}
                  sx={{m: {xs: 2, md: 4}, p: {xs: 2, md: 4}}} 
                >
                  <Stack >
                    <Typography
                      variant='h1'
                      gutterBottom
                      sx={{
                        fontSize: {xs: 35, md: 55},
                        fontFamily: 'RotoFont',
                      }}
                    > 
                     {t("Members")}
                    </Typography>
                    <Grid 
                        container
                        spacing={2}
                        sx={{my: 1}}
                    >
                      {
                        sanityBand.bandMembers.map((bandMember, i) => (

                          <BandMember key={i} bandMember={bandMember}/>

                        ))
                      }  
                    </Grid>
                                        
                  </Stack>                
                </Paper>
                <SocialMediaContainer 
                    socialMediaItems={socialMediaItems} headerText={t("socialMediaText")} 
                    style={{m: {xs: 2, md: 4},p: {xs: 2, md: 4},}}
                  />
              </Grid>  
            </Grid>
            
          </Box> 
            
        </Layout>
        
      )

}
 
export const query = graphql`
  query ($id: String, $language: String!) {
    sanityBand(id: {eq: $id}) {
      name
      poster {
        _key
        _type
        _rawAsset
        _rawHotspot
        _rawCrop
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
      presentation
      _rawSocialmedia
      socialmedia {
        _key
        _type
        facebook
        instagram
        youtube
      } 
      bandMembers {
        _key
        name
        role
        image {
          asset {
            gatsbyImageData(placeholder: BLURRED, width: 150, height: 150)
          }
        }
      }
    },
    allInstagramContent {
      edges {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 200, height: 200)
            }
          }
        }
      }
    }
    locale: allLocale(filter: {ns: {eq: "artists_imidiwan"}, language: {eq: $language}}) {
      edges {
        node {
          ns
          language
          data
        }
      }
    }
  }`

export default ArtistPage 

export const Head = ({data}) => (
  <SearchEngineOptimization title={`Badoprod-${data.sanityBand.name}`} />
)