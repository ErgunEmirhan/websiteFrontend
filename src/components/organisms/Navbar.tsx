import { AppBar, Box, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

const pages = ['Home', 'About', 'Projects']
function Navbar() {
    
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
            
            
        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar