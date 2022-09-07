import React from 'react';
import Layout from '../components/Layout';
import { mainPageStyle as mainStyle } from '../styles/products';
import { useStaticQuery, graphql } from 'gatsby';
import {Grid, Paper, Typography, Container} from '@mui/material';
import { GatsbyImage, getImage} from 'gatsby-plugin-image';


const Item = ({item}) => {
   
  return (

   
         <GatsbyImage 
            image={item} 
            alt='badou prod product'
            width= '200'
            height= '200'
          />
    
  )
   

}

const Productpage = () => {

    const {allFile: {edges}} = useStaticQuery(graphql`
        query {
            allFile(filter: {sourceInstanceName: {eq: "products_images"}}) {
                edges {
                  node {
                    childImageSharp {
                        gatsbyImageData(
                            width: 150,
                            height: 150,
                            placeholder: BLURRED,

                        )
                    }
                  }
                }
            }
        }

    `)

    
    const images = edges.map(edge => getImage(edge.node.childImageSharp.gatsbyImageData)) 


    return (
        <Layout pageTitle='Our products' pageStyle={mainStyle} context='dark'>
            <Container sx={{py: 4,}}>      
                <Grid 
                    container 
                    columnSpacing={2}
                    rowSpacing={2}
                >
                    
                    {

                        images.map( (image, i) => (
                            <Grid 
                              item
                              key={i}   
                              xs={6} md={2}
                            >
                                <Item item={image}/>
                            </Grid> 
                        ))
                    }
                    
                </Grid>
                
            </Container>
        </Layout>
        
    )
}



export default Productpage;
