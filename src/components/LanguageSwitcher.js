import React from 'react';
import {Box, MenuItem, FormControl, Select }from '@mui/material';
import { useTranslation } from "react-i18next"


 const LanguageSwitcher = () => {

 
 const languages = ['en', 'fr', 'ar']

 const {i18n} = useTranslation()

 const { language, changeLanguage} = i18n;



 const handleChange = (event) => {

    changeLanguage(event.target.value)

 };



  return (
    <Box sx={{ minWidth: 120 }}>
        <FormControl size="small" variant="standard" sx={{color: 'white'}}>
            <Select
                id="demo-simple-select"
                value={language.split('-')[0]}
                label={language.split('-')[0]}
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
