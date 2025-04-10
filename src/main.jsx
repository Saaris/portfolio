import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Degree from './components/Degree.jsx'
import Contact from './components/Contact.jsx'



const router = createHashRouter (
  [
    {
    path: "/",
    Component: App,
    children: 
    [
      {
      index: true,
      Component: Home
      },
      {
      path: '/home/:id',
      Component: Home
      },
      {
      path: '/about/:id',
      Component: About
      },
      {
      path: '/projects',
      Component: Projects
      },
      {
      path: '/degree',
      Component: Degree
      },
      {
      path: '/contact',
      Component: Contact
      }
    ]
  }
  ]
)

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
)
