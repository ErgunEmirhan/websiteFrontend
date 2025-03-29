import { Box, Button, Menu, MenuItem, MenuList, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface NavbarMenuItem{
    title: string,
    path: string
}

const pages: NavbarMenuItem[] = [{
    title: 'Home',
    path: '/'
},
{
    title: 'About',
    path: '/about'
},
{
    title: 'Projects',
    path: '/projects'
},
{
    title: 'Contact',
    path: '/contact'
}
]

function NavbarMenuList() {
    const navigate = useNavigate();
     const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
      const open = Boolean(anchorEl);
      const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = (path: string) => {
        setAnchorEl(null);
        navigate(path)
      };
      const theme = useTheme();
      const isLargerThanSm = useMediaQuery(theme.breakpoints.up('sm'));
  return (<>{!isLargerThanSm && 
    <Box>
    <Button id='menu-button' 
    onClick={handleClick}
    sx={{color: 'white'}}
    endIcon={<KeyboardArrowDownIcon />}
    >
        Menu</Button>
    <Menu
    id= "menu-appbar"
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    
    >
        <MenuList id='menulist-appbar' sx={{display: 'flex', flexDirection: 'row'}}>
            {pages.map((page) => (
            <MenuItem key={page.title} onClick={() => handleClose(page.path)}>
                <Typography sx={{textAlign: 'center'}} >{page.title}</Typography>
            </MenuItem>
            ))}
        </MenuList>
    </Menu>
        
   </Box>}
   {isLargerThanSm
   &&
   <MenuList id='menulist-appbar' sx={{display: 'flex', flexDirection: 'row'}}>
            {pages.map((page) => (
            <MenuItem key={page.title} onClick={() => navigate(page.path)}>
                <Typography sx={{textAlign: 'center'}} >{page.title}</Typography>
            </MenuItem>
            ))}
        </MenuList>
   }
   </>
  )
}

export default NavbarMenuList