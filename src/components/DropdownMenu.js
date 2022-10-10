import React, {useState} from "react";
import { Link } from 'gatsby';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { ArrowDropDown } from "@mui/icons-material";




const DropdownMenu = ({page, context}) => {

    const {title, children} = page
  
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    }
  
    const handleClose = (e) => {

      setAnchorEl(null);
    }
    
  
    return (
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{color: 'white', fontWeight: 500, fontSize: 14, fontFamily: 'RotoFont'}}
          endIcon= {<ArrowDropDown/>}

        >
          {title}
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {
            children.map((child, i) => (
              
              <MenuItem onClick={handleClose} key={i}>
                 <Link to={child.link} style={{color: 'black' , textDecoration: 'none', fontFamily: 'RotoFont'}}>
                    {child.title}
                  </Link>
              </MenuItem> 
            
            ))
          }
          
         
        </Menu>
      </div>
    );
}

export default DropdownMenu;