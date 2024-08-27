import React from 'react';
import WorkItem from './WorkItem';

const data = [
    {
        year: 2024,
        title: 'Software Developer',
        duration: '4 Months',
        details:'\n\nsdjfksjdfkhsdfhskdf'
    },
    {
        year: 2024,
        title: 'Software Developer',
        duration: '4 Months',
        details:'\n\nsdjfksjdfkhsdfhskdf'
    },
    {
        year: 2024,
        title: 'Software Developer',
        duration: '4 Months',
        details:'\n\nsdjfksjdfkhsdfhskdf'
    },

];

const Work = () =>{
    return(
        <div id='Work' className='max-w-[1040ps] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
                Work
            </h1>
            {data.map((item, idx)=>(
                <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
            ))}
        </div>
    )
};

export default Work;