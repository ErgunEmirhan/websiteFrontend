import { AppBar, Box, Button, Divider, styled, Toolbar, Typography } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useContext } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import NavbarMenuList from '../atoms/NavbarMenuList';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',  // Default display value
    justifyContent: 'start',
    [theme.breakpoints.down('xs')]: {
      display: 'none', // Hide on small screens
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex', // Show on medium and up screens
    },
  }));

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
    const {isDarkMode, setIsDarkMode} = useContext<any>(DarkModeContext)

  return (
    <AppBar>
        <StyledToolbar>
            <Box sx={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Box>
                <Typography variant='h6'>EMİRHAN ERGÜN</Typography>
            </Box>
                <NavbarMenuList/>
            </Box>
           
            <Box sx={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
                <Box>
                <Button onClick={() => window.open('https://www.linkedin.com/in/ergun-emirhan/')}><LinkedInIcon sx={{color:'white'}}/></Button>
                <Button onClick={() => window.open('https://github.com/ErgunEmirhan')}><GitHubIcon sx={{color:'white'}}/></Button>
                </Box>
            <Divider orientation='vertical' variant='middle' flexItem/>
            <Box>
                <Button><LanguageIcon sx={{color:'white'}}/></Button>
                <Button onClick={() => setIsDarkMode(!isDarkMode)}>{!isDarkMode ? <LightModeIcon sx={{color:'white'}}/> : <DarkModeIcon sx={{color:'white'}}/>}</Button>
            </Box>
            </Box>
           
          
        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar