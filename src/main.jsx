import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';

import Home from './components/Pages/Home/Home.jsx';
import About from './components/Pages/Home/About.jsx';

import Contact from './components/Pages/Contacts/Contact.jsx';
import MainLayout from './components/MainLayout/MainLayout.jsx';
import Work from './components/Pages/Work/Work.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path:"",
        element: <Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"work",
        element: <Work/>
      },    
      {
        path:"contact",
        element: <Contact/>
      },         
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
