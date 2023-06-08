import React from 'react';
import useColorMode from '../../../DarkMode/useColorMode/useColorMode';

const Home = () => {
    const [colorMode, setColorMode] = useColorMode();

    return (
      <div>
        this home
      </div>
    );
};

export default Home;