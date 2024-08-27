import React from "react";
import { TypeAnimation } from "react-type-animation";
import {FaGithub, FaInstagram, FaLinkedinIn} from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai";

const Main = () =>{
    return(
        <div id='main'>
            <img className='w-full h-screen object-cover object-left' src="/src/assets/pexels-steve-1774986.jpg" alt="" />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
                <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                    <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">Hi! I'm Lisa Liu,</h1>
                        <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'A Dreamer',
                                    2000, // wait 1s before replacing "Mice" with "Hamsters"
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
                        <div className="flex justify-between pt-6 max-w-[200px] w-full">
                            <FaGithub className='cursor-pointer' size={20}/>
                            <FaLinkedinIn className='cursor-pointer' size={20}/>
                            <FaInstagram className='cursor-pointer' size={20}/>
                            <AiOutlineMail className='cursor-pointer' size={20}/>
                        </div>
                    </div>
            </div>
                
        </div>
    );
};

export default Main;