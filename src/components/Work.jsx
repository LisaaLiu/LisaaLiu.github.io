import React from 'react';
import WorkItem from './WorkItem';

const data = [
    { year: 'May 2024 - Aug 2024', company: 'UKG', title: 'Software Developer Intern', duration: '4 Months', details: '' },
    { year: 'Sept 2023 - Dec 2023', company: 'Health Canada', title: 'Software Developer Intern', duration: '4 Months', details: '' },
    { year: 'Jan 2023 - Apr 2023', company: 'Environment and Climate Change Canada', title: 'Data Analyst', duration: '4 Months', details: '' },
    { year: 'May 2022 - Aug 2022', company: 'Mobile Innovation', title: 'IT Support Specialist', duration: '4 Months', details: '' },
    { year: 'July 2021 - Sept 2021', company: 'TechBytes Foundation', title: 'Software and Design Intern', duration: '', 
        details: ''}
];

const Work = () => {
    return (
        <div id='Work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-primary mb-4'>Work</h1>
            {data.map((item, idx) => {
                return (
                    <WorkItem
                        key={idx}
                        year={item.year}
                        company={item.title}
                        title={item.company}
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
