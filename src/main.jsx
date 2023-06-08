import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { router } from './Routes/Routes.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Provider/AuthProvider.jsx'
import useColorMode from './DarkMode/useColorMode/useColorMode.jsx'


const Dark = () => {
  const [colorMode, setColorMode] = useColorMode();
  const [dark, setDark] = useState(true);

  const toggleDarkMode = () => {
    if (dark) {
      setColorMode("dark");
      setDark(false);
    } else {
      setColorMode("light");
      setDark(true);
    }
  };

  return (
    <div className='h-screen w-screen bg-white dark:bg-black'>
      <div className='absolute'>
        <input
          type="checkbox"
          className="toggle"
          checked={!dark}
          onChange={toggleDarkMode}
        />
        {dark ? (
          <button
            className="dark:text-white text-black bg-sky-500 dark:bg-green-500"
            onClick={toggleDarkMode}
          >
            Dark
          </button>
        ) : (
          <button
            className="dark:text-white text-black bg-sky-500 dark:bg-green-500"
            onClick={toggleDarkMode}
          >
            Light
          </button>
        )}
      </div>
      <RouterProvider router={router} />
    </div>
  );
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <Dark />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
