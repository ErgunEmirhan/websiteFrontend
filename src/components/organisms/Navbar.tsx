import { AppBar, Box, Button, Divider, Menu, MenuItem, MenuList, styled, Toolbar, Typography } from '@mui/material'
import React, { Dispatch, SetStateAction, useContext } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { DarkModeContext } from '../../contexts/DarkModeContext';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

const pages = ['Home', 'About', 'Projects']


function Navbar() {
    
    const {isDarkMode, setIsDarkMode} = useContext<any>(DarkModeContext)

  return (
    <AppBar>
        <StyledToolbar>
            <Typography variant='h6'>EMIRHAN ERGUN</Typography>
                <MenuList id='menu-appbar' sx={{display: 'flex', flexDirection: 'row'}}>
                    {pages.map((page) => (
                    <MenuItem key={page}>
                        <Typography sx={{textAlign: 'center'}} >{page}</Typography>
                    </MenuItem>
                    ))}
                </MenuList>
            <Box sx={{display: {xs: 'none', md: 'flex'}}}>
               <MenuList id='media-icons' sx={{display: {xs: 'none', md: 'flex'}}}>
                    <MenuItem>

                    </MenuItem>
                </MenuList>
            </Box>
            <Divider orientation='vertical' variant='middle' flexItem/>
            <Button onClick={() => setIsDarkMode(!isDarkMode)}>{!isDarkMode ? <LightModeIcon sx={{color:'white'}}/> : <DarkModeIcon/>}</Button>

        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar