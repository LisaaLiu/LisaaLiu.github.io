import React from "react";

const ProjectItem = ({ img, title, tech, links, zoom }) => {
    return (
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl overflow-hidden group">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Image */}
            <img src={img} alt={title} className={`relative rounded-xl transition-transform duration-300 ${zoom ? 'scale-110' : ''} group-hover:opacity-10`} />

            {/* Overlay Content */}
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-center">
                <h3 className="text-2xl font-bold text-white tracking-wider">{title}</h3>
                <p className="pb-4 pt-2 text-white">{tech}</p>
                <a href={links} target="_blank" rel="noopener noreferrer">
                    <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg hover:scale-110 transition-transform duration-300">
                        More Information
                    </p>
                </a>
            </div>
        </div>
    );
};

export default ProjectItem;
