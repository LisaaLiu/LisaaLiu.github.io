import React, {useState} from 'react';
import {BsPerson} from 'react-icons/bs';
import {GrProjects} from 'react-icons/gr';
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail} from 'react-icons/ai';

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () =>{
        setNav(!nav);
    };
    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' size={30}/>
            {
                nav?(
                    <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                        <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-buttons shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineHome size={20} />
                            <span className='pl-4'>Home</span>
                        </a>
                        <a onClick={handleNav} href="#AboutMe" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-buttons shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <BsPerson size={20} />
                            <span className='pl-4'>About Me</span>
                        </a>
                        <a onClick={handleNav} href="#Work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-buttons shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <GrProjects size={20} />
                            <span className='pl-4'>Work</span>
                        </a>
                        <a onClick={handleNav} href="#Projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-buttons shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineProject size={20} />
                            <span className='pl-4'>Projects</span>
                        </a>
                        <a onClick={handleNav} href="#Contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-buttons shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineMail size={20} />
                            <span className='pl-4'>Contact Me</span>
                        </a>
                    </div>
                ):(
                    ''
                )
            }
            <div className='md:block hidden fixed top-[25%] z-10'> 
                {/* anything above the medium point will show block otherwise will be hidden */}
                <div className='flex flex-col'>
                    <a href="#main" className='rounded-full shadow-lg bg-other shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineHome size={20}/>
                    </a>
                    <a href="#AboutMe" className='rounded-full shadow-lg bg-other shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsPerson size={20}/>
                    </a>
                    <a href="#Work" className='rounded-full shadow-lg bg-other shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <GrProjects size={20}/>
                    </a>
                    <a href="#Projects" className='rounded-full shadow-lg bg-other shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineProject size={20}/>
                    </a>
                    <a href="#Contact" className='rounded-full shadow-lg bg-other shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail size={20}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NavBar