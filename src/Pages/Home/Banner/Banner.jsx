import React from 'react';

const Banner = () => {
    return (
        <div >
            <div
                className="hero  h-96"
                style={{
                    backgroundImage: 'url("https://as2.ftcdn.net/v2/jpg/02/19/80/13/1000_F_219801337_3kbasqLvgbUxAGVDH8QS35Sm4SEiPJFJ.jpg")'
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Kids In Motion</h1>
                        <p className="mb-5">Welcome to our Summer Vacation Sports website, where adventure meets excitement and fun knows no bounds! Get ready to dive into a world of thrilling activities, explore new horizons, and make unforgettable memories under the sun.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;