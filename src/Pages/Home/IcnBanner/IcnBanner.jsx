import React from 'react';
import { AiOutlineWechat } from 'react-icons/ai';
import { BiFootball } from 'react-icons/bi';
import { FaCandyCane } from 'react-icons/fa';
import { FaGamepad } from 'react-icons/fa';
import Flash from "react-awesome-reveal";
const IcnBanner = () => {
    return (
        <div>
            <div  >
                <Flash>
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
                </Flash>
                <div className=" grid grid-cols-1 md:grid-cols-2  gap-5">
                    {/* 1st div */}
                    <div className=" bg-[--nav-bg] grid grid-cols-1 md:grid-cols-2">
                        <div className="md:ps-6 md:py-48" >
                            <h1 className="px-2 text-3xl md:text-6xl font-bold text-slate-700">Discover a World of Wonder and Summer Camp on  KIDS InMotion !</h1>
                            <p className="px-2 text-xl md:py-5 text-slate-500 font-semibold">
                            Welcome to our Summer Vacation Sports website, where adventure meets excitement and fun knows no bounds! Get ready to dive into a world of thrilling activities, explore new horizons, and make unforgettable memories under the sun. </p>
                        </div>

                    </div>
                    <div>     <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src="https://img.freepik.com/free-vector/soccer-flyer_52683-9755.jpg?w=826&t=st=1686749927~exp=1686750527~hmac=ea665b6de5ccf098186ce9f5aef75e534cc80e57a83c7852d1f7ffd33b89df61" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src="https://img.freepik.com/free-vector/sport-landing-page-template-with-photo_52683-15885.jpg?w=1380&t=st=1686749975~exp=1686750575~hmac=63baca44de2268b673e3ecb8f408ae7ec1c4328f60a5d1340786c83b5abffeb3" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src="https://img.freepik.com/free-vector/boxing-flyer_52683-9759.jpg?t=st=1686749927~exp=1686750527~hmac=d96c434bd3ce99fcb955d76d44afad07590c4ba77674d1a2b667e17945db9b66" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src="https://img.freepik.com/free-vector/basketball-poster-with-stadium-lights_1419-1919.jpg?w=826&t=st=1686750134~exp=1686750734~hmac=9c407f610e556114dcef2e5d381884a3796bb685f9453a0aecd0bd7018498828" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>  </div>
                </div>

            </div>
        </div>
    );
};

export default IcnBanner;