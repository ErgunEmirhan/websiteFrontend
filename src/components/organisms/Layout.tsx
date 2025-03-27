import { Box, createTheme, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import React, { useState } from 'react'
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
            <Outlet/>
        </Box>
        </ThemeProvider>
  )
}

export default Layout