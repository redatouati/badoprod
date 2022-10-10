import React, {useState} from 'react';
import { Link } from 'gatsby';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


const CollapsMenuItem = ({page, isOpen, handleOpen}) => {

  const {title, children} = page

  return (
    <>
      <ListItemButton 
        onClick={handleOpen}
        alignItems='center' 
      >
        <ListItemText primary={title} primaryTypographyProps= {{ style :{fontFamily: 'RotoFont', fontWeight: 500, fontSize: 17}}}/>
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map((child, i) => (
            <ListItemButton sx={{ pl: 4 }} key={i}>
              <Link 
                 to={child.link} 
                 style={{
                    color: 'black' , 
                    textDecoration: 'none', 
                    fontFamily: 'RotoFont',
                    fontWeight: 500, 
                    fontSize: 17,
                    mx: 2,
                  }}
              >
                {child.title}
              </Link>
            </ListItemButton>

           ))}
        </List>
      </Collapse>
    </>
  )

}



export default function MenuItem({pages}) {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ 
        bgcolor: 'background.paper' ,
        display: 'flex',
        flexDirection: 'column',
        m: 2
       
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    > 
      {pages.map((page, i) => (

        page.isDropdown ? 
        <CollapsMenuItem key={i} page={page} isOpen={open} handleOpen={handleClick} /> 
        : <ListItemButton 
            key={i}
            sx={{
              my: 1, 
              width: '70%',
            }}
            > 
          <Link 
            to={page.link}
            style={{
              color: 'black', 
              textDecoration: 'none',
              fontFamily: 'RotoFont', 
              fontSize: 17, 
              fontWeight: 500,
              my: 2,
            }}
          >
            {page.title}
          </Link>
        </ListItemButton>

      ))}
 
    </List>
  );
}