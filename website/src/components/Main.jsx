import React from "react";
import { TypeAnimation } from "react-type-animation";
import {FaGithub, FaInstagram, FaLinkedinIn} from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai";

const Main = () =>{
    return(
        <div id='main'>
            <img className='w-full h-screen object-cover object-left' src="/src/assets/pexels-steve-1774986.jpg" alt="" />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
                <div className="max-w-[1040px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                    <h1 className="sm:text-6xl text-5xl font-bold text-gray-800">Hi! I'm Lisa Liu,</h1>
                        <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
                            <TypeAnimation
                                sequence={[
                                    'A Dreamer',
                                    2000,
                                    'An Adventurer',
                                    2000,
                                    'A Developer',
                                    2000,
                                ]}
                                wrapper="div"
                                cursor={true}
                                speed={50}
                                style={{ fontSize: '1em', paddingLeft: '5px' }}
                                repeat={Infinity}
                            />
                            
                        </h2>
                        <div className="flex justify-between pt-4 max-w-[250px] w-full">
                            <a className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-1 p-3 cursor-pointer hover:scale-110 ease-in duration-300' href="https://github.com/LisaaLiu" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="cursor-pointer" size={25} />
                            </a>
                            <a  className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-1 p-3 cursor-pointer hover:scale-110 ease-in duration-300' href="https://www.linkedin.com/in/l-lisa" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn className="cursor-pointer" size={25} />
                            </a>
                            <a  className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-1 p-3 cursor-pointer hover:scale-110 ease-in duration-300' href="https://www.instagram.com/lisaa_liu_/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="cursor-pointer" size={25} />
                            </a>
                            <a  className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-1 p-3 cursor-pointer hover:scale-110 ease-in duration-300' href="mailto:lisaliu895@gmail.com">
                                <AiOutlineMail className="cursor-pointer" size={25} />
                            </a>
                        </div>

                    </div>
            </div>
                
        </div>
    );
};

export default Main;