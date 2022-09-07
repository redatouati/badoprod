import React, {useState} from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import DropdownMenu from './DropdownMenu';


const pages = [
  {title: 'HOME', link: '/', isDropdown: false},
  {title:'OUR SERVICES', link: '/services', isDropdown: false},
  {title:'PRODUCTS', link: '/products', isDropdown: false}, 
  {title:'ART & ARTISTS', isDropdown: true, children: [{title: 'IMIDIWAN', link: '/artists/imidiwan'}]}, 
  {title:'CONTACT US', link: '/contact', isDropdown: false}
];



const Header = ({context}) => {

  

  const [anchorElNav, setAnchorElNav] = useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 

  return (

    <AppBar position="static"  sx={{backgroundColor: 'inherit', boxShadow: context === 'dark' ? 'none' : '1px 1px 2px 2px lightgray'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           <StaticImage 
              src='../images/logo_dark_badoprod.png'
              alt='bado prod logo' 
              placeholder="blurred"
              layout="fixed"
              width={30}
              height={40}
           />
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <StaticImage 
              src='../images/logo_dark_badoprod.png'
              alt='bado prod logo' 
              placeholder="blurred"
              layout="fixed"
              width={30}
              height={40}
           />
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color: context === 'light' ? 'black' : 'white' }}/>
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page, i) => (
                <MenuItem key={i} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={page.link} style={{textDecoration: 'none', color: 'black', fontSize: 15, fontWeight: 500}} >{page.title}</Link> 
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page, i) => (
              <Button
                key={i}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mr: 2, color: 'white', display: 'block',}}
              >              
                {
                  page.isDropdown ? 
                  <DropdownMenu page={page} context={context}/>      
                  : <Link to={page.link} style={{color: context === 'light' ? 'black' : 'white', textDecoration: 'none', fontWeight: 600}}>
                     {page.title}
                    </Link>      
                }
           
                  
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
    
  )
}

export default Header
