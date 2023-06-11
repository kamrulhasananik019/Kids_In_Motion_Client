import React, { useEffect, useState } from 'react';
import useColorMode from '../../../DarkMode/useColorMode/useColorMode';
import Banner from '../Banner/Banner';

const Home = () => {
  const [colorMode, setColorMode] = useColorMode();
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    const newColorMode = dark ? "light" : "dark";
    setColorMode(newColorMode);
    setDark(!dark); // Toggle the 'dark' state
  };
  useEffect(() => {
    const storedTheme = localStorage.getItem("color-theme");
    if (storedTheme === "dark" && !dark) {
      setColorMode("dark");
      setDark(true); // Update the 'dark' state
    } else if (storedTheme === "light" && dark) {
      setColorMode("light");
      setDark(false); // Update the 'dark' state
    }
  }, [dark, setColorMode]);


  return (
    <section className="h-screen  bg-white dark:bg-black">
      <div className=" w-full  ">
        <div className=' flex  justify-end'>
          <input
            type="checkbox"
            className="toggle"
            checked={!dark}
            onChange={toggleDarkMode}
          />
          {dark ? (
            <p
              className="rounded dark:text-white text-black bg-sky-500 dark:bg-green-500"

            >
              Dark
            </p>
          ) : (
            <p
              className="rounded dark:text-white text-black bg-sky-500 dark:bg-green-500"

            >
              Light
            </p>
          )}
        </div>
      </div>
      <div className='pt-20px'>
        <Banner></Banner>
      </div>
    </section>

  );
};

export default Home;