import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Layout from '../components/organisms/Layout'
import AboutPage from '../pages/AboutPage'
import ProjectsPage from '../pages/ProjectsPage'
import { DarkModeContext } from '../contexts/DarkModeContext'
import { useState } from 'react'
import ContactPage from '../pages/ContactPage'

function RouterPage() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  return (
    <DarkModeContext.Provider value={{isDarkMode: isDarkMode, setIsDarkMode: setIsDarkMode}}>
    <BrowserRouter>
    <Routes>
        
        <Route element={<Layout/>}>
            <Route path= "/" element={<HomePage/>} />
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/projects' element={<ProjectsPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
        </Route>

    </Routes>
    </BrowserRouter>
    </DarkModeContext.Provider>
  )
}

export default RouterPage