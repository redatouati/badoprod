import React, {useState} from 'react';
import { graphql } from 'gatsby';
import {PortableText} from '@portabletext/react'
import Layout from '../../components/Layout';
import { Container, Grid, Box, Stack, Paper, Typography } from '@mui/material';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';




const ParagraphComponent = ({title, body}) => {

  return (

    <Paper
      elevation={3}
      sx={{m: 4, p: 4}}
    >
      <Stack direction='column'>

        <Typography
          variant='h1'
          gutterBottom
          sx={{
            fontSize: 55
          }}
        >
          {title}
        </Typography>

        <Typography
          paragraph
          variant='body2'
          sx={{
            fontSize: 19
          }}
        >
          {body}
        </Typography>


      </Stack>

    </Paper>

  )



}


const ArtistPage = ({data}) => {

    const {sanityBand} = data
    const posterImage = getImage(sanityBand.poster.asset.gatsbyImageData)
  

    return (
        <Layout pageTitle={sanityBand.name} context='light'>
          <GatsbyImage
            image={posterImage}
            alt={`${sanityBand.name}_poster}`} 
          />
          <Box
            sx={{height: '100vh'}}
          >
            <Grid container>
              <Grid item xs={12} md={6}>
                <ParagraphComponent title={sanityBand.name} body={sanityBand.presentation}/>
              </Grid>
              
               
            </Grid>
            
          </Box> 
            
        </Layout>
        
      )

}
 
export const query = graphql`
  query ($id: String) {
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
      socialmedia {
        _key
        _type
        facebook
        instagram
        youtube
      } 
    }
}`

export default ArtistPage 