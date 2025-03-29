import { AppBar, Box, Button, Divider, MenuItem, MenuList, styled, Toolbar, Typography } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useContext } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import { useNavigate } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

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


function Navbar() {
    const navigate = useNavigate();
    const {isDarkMode, setIsDarkMode} = useContext<any>(DarkModeContext)

  return (
    <AppBar>
        <StyledToolbar>
            <Box>
                <Typography variant='h6'>EMIRHAN ERGUN</Typography>
            </Box>
            <Divider orientation='vertical' variant='middle' flexItem/>
           <Box>
                <MenuList id='menu-appbar' sx={{display: 'flex', flexDirection: 'row'}}>
                    {pages.map((page) => (
                    <MenuItem key={page.title} onClick={() => navigate(page.path)}>
                        <Typography sx={{textAlign: 'center'}} >{page.title}</Typography>
                    </MenuItem>
                    ))}
                </MenuList>
           </Box>
           <Divider orientation='vertical' variant='middle' flexItem/>

            <Box sx={{display: {xs: 'none', md: 'flex'}}}>
               <MenuList id='media-icons' sx={{display: {xs: 'none', md: 'flex'}}}>
                    <MenuItem>
                        <Button onClick={() => window.open('https://www.linkedin.com/in/ergun-emirhan/')}><LinkedInIcon sx={{color:'white'}}/></Button>
                    </MenuItem>
                    <MenuItem>
                        <Button onClick={() => window.open('https://github.com/ErgunEmirhan')}><GitHubIcon sx={{color:'white'}}/></Button>
                    </MenuItem>
                </MenuList>
            </Box>           
            <Divider orientation='vertical' variant='middle' flexItem/>
            <Box>
                <Button><LanguageIcon sx={{color:'white'}}/></Button>
                <Button onClick={() => setIsDarkMode(!isDarkMode)}>{!isDarkMode ? <LightModeIcon sx={{color:'white'}}/> : <DarkModeIcon sx={{color:'white'}}/>}</Button>
            </Box>
          
        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar