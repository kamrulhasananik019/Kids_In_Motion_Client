import React from 'react';

const Banner = () => {
    return (
        <div>
            <div
                className="hero "
                style={{
                    backgroundImage: 'url("https://img.freepik.com/free-vector/green-cricket-sports-background-with-illustration-players-golden-trophy-cup_1302-5494.jpg?w=1060&t=st=1686476279~exp=1686476879~hmac=26c97baa2fcc3e70bd5ac5b886e51c2cc769025c20330f30683a7ef06e370b50")'
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;