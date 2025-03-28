import { AppBar, Box, Button, Divider, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
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

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
/*
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
*/
    const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 

  return (
    <AppBar>
        <StyledToolbar>
            <Typography variant='h6'>EMIRHAN ERGUN</Typography>
            <Box>
                <Menu id='menu-appbar' 
                anchorEl={anchorElNav} 
                anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} 
                keepMounted 
                transformOrigin={{vertical: 'top', horizontal: 'left'}}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{display: {xs: 'block', md: 'none'}}}>
                    {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography sx={{textAlign: 'center'}} >{page}</Typography>
                    </MenuItem>
                    ))}
                </Menu>
            </Box>
            <Divider orientation='vertical' flexItem/>
            <Button onClick={() => setIsDarkMode(!isDarkMode)}>{!isDarkMode ? <LightModeIcon sx={{color:'white'}}/> : <DarkModeIcon/>}</Button>

        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar