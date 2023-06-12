import React from 'react';
import { AiOutlineWechat } from 'react-icons/ai';
import { BiFootball } from 'react-icons/bi';
import { FaCandyCane } from 'react-icons/fa';
import { FaGamepad } from 'react-icons/fa';
const IcnBanner = () => {
    return (
        <div>
            <div className='mt-10' >
            <div className="md:flex ps-14  bg-[--nav-bg] shadow-xl justify-around md:mt-10 py-20 my-10">
                <div className="flex mb-8 ">
                    <div>
                        <h1 className='text-6xl text-[#80b7aa] px-3'><AiOutlineWechat></AiOutlineWechat></h1>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">SUPPORT 24/7</h1>
                        <p className="font-semibold">Delicated 24/7 Support</p>
                    </div>
                </div>
                <div className="flex mb-8">
                    <div><h1 className='px-3 text-[#80b7aa] text-5xl'><BiFootball></BiFootball></h1></div>
                    <div>
                        <h1 className="text-xl font-bold">
                            Football
                        </h1>
                        <p className="font-semibold">Play Like A Pro</p>
                    </div>
                </div>
                <div className="flex mb-8">
                    <div><h1 className='px-3 text-[#80b7aa] text-6xl'><FaCandyCane></FaCandyCane></h1></div>
                    <div><h1 className="text-xl font-bold">hokey</h1>
                        <p className="font-semibold">hokey Play To Win </p>
                    </div>
                </div>
                <div className="flex mb-8">
                    <div><h1 className='px-3 text-[#80b7aa] text-6xl'><FaGamepad></FaGamepad></h1></div>
                    <div><h1 className="text-xl font-bold">Summer Vibes</h1>
                        <p className="font-semibold">All Types Of Summer Sports  </p>
                    </div>
                </div>
            </div>
            <div className=" lg:grid grid-cols-12 gap-5">
                {/* 1st div */}
                <div className="col-span-8 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 grid grid-cols-1 md:grid-cols-2">
                    <div className="md:ps-6 md:py-48" >
                        <h1 className="px-3 text-3xl md:text-6xl font-bold text-slate-700">Discover a World of Wonder and Play at   <span className='text-[#5145CD]'>KIDS</span> <span className=' bg-clip-text text-transparent bg-gradient-to-tr from-red-600 via-violet-500 to-sky-600'>Zone</span> !</h1>
                        <p className="px-3 text-xl md:py-5 text-slate-500 font-semibold">
                            Welcome to our vibrant world of toys, where creativity knows no bounds! The Toy Page Banner is not just a collection of products; its a celebration of the magic of play.  </p>
                    </div>
                    <div className='mt-48'>
                        <img  className='animate-bounce' src="https://i.ibb.co/TBZr9Kk/stormtrooper-2296199-640-removebg-preview.png" alt="" />
                    </div>
                </div>
                <div className="col-span-4 grid gap-5">
                    {/* 2nd div */}
                    <div className=" bg-gradient-to-r from-cyan-500 to-blue-500 grid grid-cols-1 md:grid-cols-2">
                        <div className="md:mt-28 p-2">
                            <h1 className="text-3xl text-white">Igniting Imagination and Adventure!</h1>
                            <p className="text-white">Immerse yourself in a captivating universe of toy.</p>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/Dp6m0Bd/Untitled-design-2-removebg-preview.png" alt="" />
                        </div>
                    </div>
                    {/* 3rd div */}
                    <div className=" bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 grid grid-cols-1 md:grid-cols-2">
                        <div className="md:mt-28 p-2">
                            <h1 className="text-2xl text-white">Unlock the Joy of Play  Where Adventure Begins!</h1>
                            <p className="text-white font-semibold py-2">Step into a world filled with toys that will ignite your childs imagination </p>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/tPqJmGj/autos-2060420-640-removebg-preview.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </div>
    );
};

export default IcnBanner;