import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { router } from './Routes/Routes.jsx'
import {

  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Provider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <div className='md:mx-28'> <RouterProvider router={router} /></div>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
