import React from 'react';
import WorkItem from './WorkItem';

const data = [
    { year: 'May 2024 - Aug 2024', company: 'UKG', title: 'Software Developer Intern', duration: '4 Months', details: 'Details about the job' },
    { year: 'Sept 2023 - Dec 2023', company: 'Health Canada', title: 'Software Developer Intern', duration: '4 Months', details: 'Details about the job' },
    { year: 'Jan 2023 - Apr 2023', company: 'Environment and Climate Change Canada', title: 'Data Analyst', duration: '4 Months', details: 'Details about the job' },
    { year: 'May 2022 - Aug 2022', company: 'Mobile Innovation', title: 'IT Support Specialist', duration: '4 Months', details: 'Details about the job' },
    { year: 'July 2021 - Sept 2021', company: 'TechBytes Foundation', title: 'Software and Design Intern', duration: '4 Months', details: 'Details about the job' },
];

const Work = () => {
    return (
        <div id='Work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-4'>Work</h1>
            {data.map((item, idx) => {
                return (
                    <WorkItem
                        key={idx}
                        year={item.year}
                        company={item.company}
                        title={item.title}
                        duration={item.duration}
                        details={item.details}
                        isEven={idx % 2 === 1}
                    />
                );
            })}
        </div>
    );
};

export default Work;
