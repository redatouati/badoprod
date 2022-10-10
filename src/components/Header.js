import React, {useState, useEffect} from 'react';
import {Trans, useTranslation, Link} from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';
import {AppBar, Box, Toolbar, IconButton, Menu, Container, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DropdownMenu from './DropdownMenu';
import MenuItem from './MenuItem';
import LanguageSwitcher from './LanguageSwitcher';





const Header = ({context}) => {


  const [anchorElNav, setAnchorElNav] = useState(null);
  const [shadow, setShadow] = useState('none');
  const [switchStyle, setSwitchStyle] = useState(false)

  const pages = [
    {title: "HOME", link: '/', isDropdown: false},
    {title: "OUR SERVICES", link: '/services', isDropdown: false},
    {title: "PRODUCTS", link: '/products', isDropdown: false}, 
    {title: "ART & ARTISTS", isDropdown: true, children: [{title: "IMIDIWAN", link: '/artists/imidiwan'}]}, 
    {title: "CONTACT US", link: '/contact', isDropdown: false}
  ];
  
  
 
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const gradient = { 
    backgroundColor: 'rgb(244,7,7,1)',
    background: '-moz-radial-gradient(circle, rgba(244,7,7,1) 0%, rgba(189,3,3,1) 50%, rgba(157,5,5,1) 100%)',
    background: '-webkit-radial-gradient(circle, rgba(244,7,7,1) 0%, rgba(189,3,3,1) 50%, rgba(157,5,5,1) 100%)',
    background: 'radial-gradient(circle, rgba(244,7,7,1) 0%, rgba(189,3,3,1) 50%, rgba(157,5,5,1) 100%)', 
    boxShadow: shadow,
  }

  const inheritMode = {backgroundColor: 'inherit', boxShadow: shadow}

  let basicStyle = context === 'dark' &&  switchStyle == false  ? inheritMode : gradient




  useEffect(() => {

    

    const handleShadowEffect = () => {


      const windowPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

    

      if(typeof window !== 'undefined' && windowPosition === 0) {
         setShadow('none')
         
      }else {
         setShadow('')
         
      }

      

      if(typeof window !== 'undefined' && windowPosition > 0) {

        setSwitchStyle(true)
        
      }else {

        setSwitchStyle(false)

      }

      
    }


    window.addEventListener('scroll', handleShadowEffect)

  }, [])

 



  return (

    <AppBar 
      position="fixed"  
      sx={{...basicStyle, boxShadow: shadow}}
      >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box
           sx={{mx: 1}}
          >
            <Link to='/'>
              <StaticImage 
                src='../images/logo_dark_badoprod.png'
                alt='bado prod logo' 
                placeholder="blurred"
                layout="fixed"
                width={30}
                height={40}
              />
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {Boolean(anchorElNav) ? <CloseIcon />  :  <MenuIcon />}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' }}}
              PaperProps={{
                style: {width: '95vw'}
              }}
            >         
              <MenuItem pages={pages} handleCloseNavMenu={handleCloseNavMenu}/>
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end',  alignItems: 'center' }}>
            {pages.map((page, i) => (
             
              page.isDropdown ? 
              <DropdownMenu key={i} page={page} context={context}/>      
              : <Button
                 key={i} 
                 sx={{mr: 2}}
                >
                  <Link 
                    to={page.link} 
                    style={{
                        color: 'white', 
                        textDecoration: 'none', 
                        fontSize: 14, 
                        fontWeight: 500,
                        fontFamily: 'RotoFont',
                        letterSpacing: 0.4,
                    }}
                  >
                    {page.title}
                  </Link> 
                </Button>             
            ))}
          </Box>

          <LanguageSwitcher />

        </Toolbar>
      </Container>
    </AppBar>
    
  )
}



export default Header
