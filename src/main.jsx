import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';

import Home from './components/Pages/Home/Home.jsx';
import About from './components/Pages/Home/About.jsx';
import Journey from './components/Pages/Journey/Journey.jsx';
import Services from './components/Pages/Services/Services.jsx';
import RecentWork from './components/Pages/RecentWork/RecentWork.jsx';
import Contact from './components/Pages/Contacts/Contact.jsx';
import MainLayout from './components/MainLayout/MainLayout.jsx';
import Experience from './components/Pages/Home/Experience.jsx';



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
        path:"journey",
        element:<Journey/>
      },
      {
        path:"services",
        element:<Services/>
      },
      {
        path:"recentWork",
        element:<RecentWork/>
      },     
      {
        path:"contact",
        element: <Contact/>
      },     
      {
        path:"experience",
        element: <Experience/>
      },     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
