import React, {useState, useContext} from 'react';
import {useI18next, I18nextContext} from 'gatsby-plugin-react-i18next';
import {Box, MenuItem, FormControl, Select }from '@mui/material';


 const LanguageSwitcher = () => {

 const context = useContext(I18nextContext);   

 const {languages, changeLanguage,originalPath} = useI18next();
 const [language, setLanguage] = useState(context.language);


 const handleChange = (event) => {

    changeLanguage(event.target.value)

    setLanguage(event.target.value);

 };


  return (
    <Box sx={{ minWidth: 120 }}>
        <FormControl size="small" variant="standard" sx={{color: 'white'}}>
            <Select
                id="demo-simple-select"
                value={language}
                label={language}
                variant="standard"
                sx={{color: 'white', fontFamily: 'RotoFontBold'}}
                onChange={handleChange}
            >
                {languages.map((lng, i) => (

    
                    <MenuItem key={i} value={lng}>
                        {lng}
                    </MenuItem>
                   
                ))}
                
            </Select>
        </FormControl>
  </Box>
  )
}


export default LanguageSwitcher
