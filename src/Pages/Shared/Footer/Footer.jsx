import React from 'react';

const Footer = () => {
    return (
            <footer className="footer mt-10 py-10 px-28 bg-[--nav-bg] text-base-content">
                <div>
                    <img src="https://i.ibb.co/p2ZXTr4/kids-in-motion-summer-sports-camp-removebg-preview.png" width={90} alt="" />
                    <p className='font-bold text-2xl'>Kids In Motion</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Football</a>
                    <a className="link link-hover">Cricket</a>
                    <a className="link link-hover">Hokey</a>
                    <a className="link link-hover"></a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Support</span>
                    <a className="link link-hover">SUPPORT 24/7</a>
                    <a className="link link-hover">Live Class</a>
                    <a className="link link-hover">Trainers in ground</a>
                </div>
            </footer>
    );
};

export default Footer;