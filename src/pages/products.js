import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';
import { mainPageStyle as mainStyle } from '../styles/products';
import { graphql } from 'gatsby';
import {Grid, Paper, Box, Typography, Container, ImageList, ImageListItem, useMediaQuery} from '@mui/material';
import { GatsbyImage, getImage} from 'gatsby-plugin-image';
import SearchEngineOptimization from "../components/utility/Seo";
import { motion } from "framer-motion";
import ProductsCataloge from '../components/ProductsCataloge';
import BackgroundFilter from '../components/BackgroundFilter';


const Item = ({item, i, handleClick}) => {

  const {t} = useTranslation()

  const {node: {name, thumbnail}} = item

  const image = thumbnail.asset

  const colors = ['#468189', '#77aca2', '#9dbebb']

   
  return ( 

        <ImageListItem
          sx={{
            position: 'relative',
            textAlign: 'center',
            color: 'white',
            cursor: 'pointer',
          }}
          onClick={() => {handleClick(item.node.images)}}
        >

            <Typography
              variant='h4'
              sx={{
                fontFamily: 'RotoFontBold',
                position: 'absolute',
                fontSize: {xs: 20, md: 25},
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textDecoration: 'underline',
                zIndex: 2,
              }}
            >
                {t(name)}
            </Typography>

            <GatsbyImage 
                image={getImage(image)} 
                alt='badou prod product'
            />

            <Box 
              component={motion.div}
              sx={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: colors[i],
                opacity: 0.8,
              }}
              initial={{
                opacity: 0.8,
              }}
              whileHover={{
                opacity: 0,
                transition: { duration: 1 }
              }}
            >
                      
            </Box>

        </ImageListItem>
        
    
  )
   

}



const Productpage = ({data}) => {

    const {allSanityProduct: {edges}} = data

    const [showCatalogue, setShowCatalogue] = useState(false)

    const [images, setImages] = useState([])

    const {t} = useTranslation()

    const closeCatalogue = () => {
         
      setShowCatalogue(false)

    
    }


    const handleClick = (images) => {
         
      setShowCatalogue(true)

      setImages(images)


    }

    
  
    return (

        <Layout pageTitle='Our products' pageStyle={mainStyle} context='light'>

          {
            showCatalogue && 

            <BackgroundFilter handleClick={closeCatalogue}/>

           }

          {
           showCatalogue && 
           <ProductsCataloge images={images}/>
          }


          <Container>

             <Typography
                gutterBottom
                paragraph
                variant='h4'
                color='black'
                textAlign='center'
                fontFamily='RotoFont'
                sx={{my: 5}}
             >

              {t("See our work on a wide range of supports")}

             </Typography>

            <ImageList 
              cols={3} 
              rowHeight={250}
            >    
                {
                  edges.map((edge,i) => (
                      <Item 
                        item={edge} 
                        key={i} 
                        i={i}
                        handleClick={handleClick}
                      /> ) )
                }          
            </ImageList>

          </Container>


        </Layout>
        
    )
}



export default Productpage;

export const query = graphql`query($language: String!) {

    allSanityProduct {
        edges {
          node {
            name
            _id
            thumbnail {
              asset {
                gatsbyImageData(placeholder: BLURRED)
                _id
                
              }
            }
            images {
              asset {
                gatsbyImageData(placeholder: BLURRED)
                _id
                filename
              }
            }
          }
        }
    }

    locale: allLocale(filter: {ns: {eq: "products"}, language: {eq: $language}}) {
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
    <SearchEngineOptimization title="PRODUCTS" />
  )
