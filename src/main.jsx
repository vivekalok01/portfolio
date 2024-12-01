import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'
 
const router = createBrowserRouter([
  {
   path:'/',
   element:<App></App>,
   children:[
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path:'/about',
      element: <About></About>
    },
    {
      path: '/contact',
      element: <Contact></Contact>
    },
    {
      path: '/project',
      element: <Projects></Projects>
    }
   ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
