import React, {useState} from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Box, IconButton, Typography} from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


const ProductsCataloge = ({images}) => {

  const [imageIndex, setImageIndex] = useState(0)

  const currentImage = images[imageIndex].asset

  const imageTitel = currentImage.filename.replace(/(?:.badoprod.|jpg|\d+)/gi, '')
                                          .replace(/(?:_|-|\.)/g, ' ')
                                          


  const nextImage = () => {

    if (imageIndex <  images.length - 1) {

       setImageIndex(imageIndex + 1)

    } else if (imageIndex === images.length - 1) {

      setImageIndex(0)

    }

  }

  const previousImage = () => {

    if (imageIndex > 0 ) { 

      setImageIndex(imageIndex - 1)

    } else if (imageIndex === 0) {

      setImageIndex(images.length - 1)

    }

  }

  


  return (


      <Box
        sx={{
          width: {xs: '100%', md: '50%'},
          height: {xs: '100%', md: '50%'},
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 5,
        }}
      >
          <Typography 
            gutterBottom
            sx={{
              color: 'white',
              fontFamily: 'RotoFont',
              fontSize: 25,
            }}
          >
            {imageTitel}
          </Typography>

          <Box 
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
              <IconButton onClick={previousImage} sx={{backgroundColor: 'white'}}>
                <ArrowCircleLeftIcon fontSize='large' color='primary'/>
              </IconButton>

              <GatsbyImage
                image={getImage(currentImage)} 
                alt={currentImage.filename}
              />

              <IconButton onClick={nextImage} sx={{backgroundColor: 'white'}} >
                <ArrowCircleRightIcon  fontSize='large' color='primary'/>
              </IconButton>

          </Box> 

        </Box>

        
  )
}


export default ProductsCataloge
