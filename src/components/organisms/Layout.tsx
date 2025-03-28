import { Box, Button, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import  { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const theme = createTheme({ palette: { mode: isDarkMode ? 'dark' : 'light' } });

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Box>
            <Navbar/>
            <Button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Dark Mode</Button>
            <Outlet/>
        </Box>
        </ThemeProvider>
  )
}

export default Layout