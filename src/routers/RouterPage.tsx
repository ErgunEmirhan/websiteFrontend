import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Layout from '../components/organisms/Layout'
import AboutPage from '../pages/AboutPage'
import ProjectsPage from '../pages/ProjectsPage'

function RouterPage() {
  return (
    <BrowserRouter>
    <Routes>
        
        <Route element={<Layout/>}>
            <Route path= "/" element={<HomePage/>} />
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/projects' element={<ProjectsPage/>}/>
        </Route>

    </Routes>
    </BrowserRouter>
  )
}

export default RouterPage