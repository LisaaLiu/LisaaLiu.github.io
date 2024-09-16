import React from 'react';

const ProgrammingTools = () => {
    return (
        <div className="flex gap-5 flex-wrap py-4 justify-center items-center">
            <div className='flex flex-col justify-center items-center rounded-full shadow-lg bg-other shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <img src="/src/assets/react.svg" alt="React" width="50" />
                <p className='text-center'>React</p>
            </div>
            <div className='flex flex-col justify-center items-center rounded-full shadow-lg bg-other shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <img src="/src/assets/icons8-tailwind-css.svg" alt="Tailwind" width="50" />
                <p className='text-center'>Tailwind</p> 
            </div>
            <div className='flex flex-col justify-center items-center rounded-full shadow-lg bg-other shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <img src="/src/assets/icons8-jira.svg" alt="Jira" width="50" />
                <p className='text-center'>Jira</p>
            </div>
            <div className='flex flex-col justify-center items-center rounded-full shadow-lg bg-other shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <img src="/src/assets/icons8-kubernetes.svg" alt="Kubernetes" width="70" />
                <p className='text-center'>Kubernetes</p>
            </div> 
            <div className='flex flex-col justify-center items-center rounded-full shadow-lg bg-other shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <img src="/src/assets/icons8-git.svg" alt="Git" width="50" />
                <p className='text-center'>Git</p>
            </div>
            <div className='flex flex-col justify-center items-center rounded-full shadow-lg bg-other shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <img src="/src/assets/icons8-docker.svg" alt="Docker" width="50" />
                <p className='text-center'>Docker</p>
            </div>
            <div className='flex flex-col justify-center items-center rounded-full shadow-lg bg-other shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <img src="/src/assets/icons8-figma.svg" alt="Figma" width="50" />
                <p className='text-center'>Figma</p>
            </div>
            <div className='flex flex-col justify-center items-center rounded-full shadow-lg bg-other shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <img src="/src/assets/icons8-azure.svg" alt="Azure" width="50" />
                <p className='text-center'>Azure</p>
            </div>
        </div>
    );
};

export default ProgrammingTools;
