import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from '.components/Home.jsx'
import { HashRouter } from 'react-router'
import About from '/components/About.jsx'

const router = HashRouter (
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
        path: '/about',
        Component: About
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
