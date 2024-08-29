import React from 'react';
import jsLogo from 'programming-languages-logos/src/javascript/javascript.svg';
import tsLogo from 'programming-languages-logos/src/typescript/typescript.svg';
import cLogo from 'programming-languages-logos/src/c/c.svg';
import cppLogo from 'programming-languages-logos/src/cpp/cpp.svg';
import javaLogo from 'programming-languages-logos/src/java/java.svg';
import pythonLogo from 'programming-languages-logos/src/python/python.svg';
import htmlLogo from 'programming-languages-logos/src/html/html.svg';

const ProgrammingIcons = () => {
    return (
        <div className="flex gap-5 flex-wrap py-4 justify-center items-center" >
            <div className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <img src={jsLogo} alt="JavaScript" width="50" />
                <p className='text-center'>Javascript</p>
            </div>
            <div className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <img src={tsLogo} alt="TypeScript" width="50" />
                <p className='text-center'>TypeScript</p> 
            </div>
            <div className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <img src={cLogo} alt="C" width="50" />
                <p className='text-center'>C</p>
            </div>
            <div className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <img src={cppLogo} alt="C++" width="50" />
                <p className='text-center'>C++</p>
            </div>
            <div className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <img src="/src/assets/sql-database-generic-svgrepo-com.svg" alt="SQL" width="50" />
                <p className='text-center'>SQL</p>
            </div> 
            <div className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <img src={javaLogo} alt="Java" width="50" />
                <p className='text-center'>Java</p>
            </div>
            <div className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <img src={pythonLogo} alt="Python" width="50" />
                <p className='text-center'>Python</p>
            </div>
            <div className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <img src={htmlLogo} alt="HTML" width="50" />
                <p className='text-center'>HTML</p>
            </div>
            <div className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <img src="/src/assets/icons8-css.svg" alt="CSS" width="70" />
                <p className='text-center'>CSS</p>
            </div>
            
        </div>
    );
};

export default ProgrammingIcons;
