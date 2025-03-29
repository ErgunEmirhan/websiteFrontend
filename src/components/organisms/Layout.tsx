import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import  { useContext } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { DarkModeContext } from '../../contexts/DarkModeContext';

function Layout() {

  const {isDarkMode} = useContext<any>(DarkModeContext);
  const theme = createTheme({ palette: { mode: isDarkMode ? 'dark' : 'light' } });

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Box>
            <Navbar/>
            
            <Outlet/>
        </Box>
        </ThemeProvider>
  )
}

export default Layout