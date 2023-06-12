import React, { useEffect, useState } from 'react';


const Dark = () => {
    const [theme,setTheme] = useState("light-theme");
    const toggleTheme = () => {
        if (theme === "dark-theme") {
            setTheme('light-theme')
        }
        else{
            setTheme("dark-theme")
        }
    }
    useEffect(()=>{
        document.body.className = theme;
    },[theme])
    return (
        <label>
            <input onChange={toggleTheme} className='toggle-checkbox' type='checkbox'></input>
            <div className='toggle-slot'>
                <div className='sun-icon-wrapper'>
                    <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
                </div>
                <div className='toggle-button'></div>
                <div className='moon-icon-wrapper'>
                    <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
                </div>
            </div>
        </label>
    );
};
export default Dark