import React from 'react';
import { withTrans } from '../i18n/withTrans';
import Layout from '../components/Layout';
import { Container, Grid, Box, Typography } from '@mui/material';
import SearchEngineOptimization from '../components/utility/Seo';
import {mainPageStyle as mainStyle} from '../styles/contact';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactCard from '../components/ContactCard';
import SocialMediaContainer from '../components/SocialMediaContainer';




const Contactpage = ({t}) => {

   
    const socialMediaItems = [
        {
            name: 'Instagram', 
            link: 'https://www.instagram.com/badoprod/',
            iconComponent: <InstagramIcon fontSize='large' sx={{ color: 'rgb(188, 42, 141)'}}/>
        },
        {
            name: 'Youtube', 
            link: 'https://www.youtube.com/channel/UC7qS08IeMYk0C30SgmyROrw',
            iconComponent: <YouTubeIcon fontSize='large' sx={{ color: 'rgb(255, 0, 0)'}}/>
        },
        {
            name: 'Facebook', 
            link: 'https://www.facebook.com/badoprod', 
            iconComponent: <FacebookRoundedIcon fontSize='large' sx={{color: 'rgb(23, 169, 253)'}}/>
        },
        {
            name: 'LinkedIn', 
            link: 'https://www.linkedin.com/company/badoprod/', 
            iconComponent: <LinkedInIcon fontSize='large' sx={{color: 'rgb(10, 102, 194)'}}/>
        },
        {
            name: 'Twitter', 
            link: 'https://twitter.com/BadoProd', 
            iconComponent: <TwitterIcon fontSize='large' sx={{color: 'rgb(29, 161, 242)'}}/>
        },
    ]

    const contactInfo = {
        title: 'Bado Prod',
        address: t("36, chemin sidi yahyia, hydra-alger"),
        phoneNumber: '00213 540 446 652',
        email: 'contact@badoprod.com'
    }

    console.log(t("36, chemin sidi yahyia, hydra-alger"));



    return (
        <Layout pageTitle='Contact us'  context='light' pageStyle={mainStyle}>

            <Container>

                <Typography
                    variant='h3' 
                    sx={{
                        textAlign: 'center',
                        my: 5,
                        fontWeight: 700,
                        fontFamily: 'RotoFontBold',
                        letterSpacing: '.2rem',
                    }}
                >
                    {t("headTitle")}
                </Typography>

                <Grid container>

                    <Grid item xs={12} md={12}>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                              <ContactCard info={contactInfo}/>
                            </Grid>
                            <Grid item xs={12} md={6}> 
                              <SocialMediaContainer socialMediaItems={socialMediaItems} />    
                            </Grid>
                        </Grid>      
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Box 
                            sx={{
                                my: 5, 
                                width: '100%'   
                            }}
                        >
                            <iframe
                                title='Bado_Prod_agency_locales '
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.2521495347164!2d3.0391144152210545!3d36.74051827996087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad8b8153cf33%3A0xd129f57aa1cbb3a4!2sBADO%20PROD!5e0!3m2!1sfr!2sdz!4v1662023636145!5m2!1sfr!2sdz"
                                width="100%" 
                                height="350"
                                style={{border: 0}}
                                allowFullScreen
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade">                            
                            </iframe>
                        </Box>

                    </Grid>

                </Grid>
            </Container>
            
        </Layout>
    )
}


export default withTrans(Contactpage, 'contact');

export const Head = () => (
    <SearchEngineOptimization title='CONTACT US' />
)
