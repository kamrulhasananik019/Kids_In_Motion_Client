import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-[--f-to] '>
            <div className="footer py-10 px-28 text-base-content">
                <div>
                    <img src="https://i.ibb.co/p2ZXTr4/kids-in-motion-summer-sports-camp-removebg-preview.png" width={90} alt="" />
                    <p className='font-bold text-2xl'>Kids In Motion</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Football</a>
                    <a className="link link-hover">Cricket</a>
                    <a className="link link-hover">Hokey</a>
                 
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Support</span>
                    <a className="link link-hover">kids55@gmail.com</a>
                    <a className="link link-hover">+0554454544</a>
                    <a className="link link-hover">www.kids.net</a>
                </div>
            </div>
         <div className='text-center'>   <p>Copyright © 2023 - All right reserved by Kid Ltd</p></div>
        </footer>
        
    );
};

export default Footer;