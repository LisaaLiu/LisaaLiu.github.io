import React from "react";
import ProjectItem from "./ProjectItem";
import Vite from "../assets/react.svg";

const Projects = () =>{
    return(
        <div id='Projects' className="max-w-[1040px] m-auto md:pl-10 p-4 py-10">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className="text-center py-8 mb-6">
            I've had the wonderful experience of working on these projects, each of which has helped broaden my expertise and hone my skills. Through my projects, I love to intertwine my passion for technology with creating innovative solutions to real-life problems. Whether you're looking for a collaborative partner or an innovative developer, I'm excited to explore how we can create something extraordinary together!
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectItem img={Vite} title={"Insert project Here"}/>
                <ProjectItem img={Vite} title={"Insert project Here"}/>
                <ProjectItem img={Vite} title={"Insert project Here"}/>
            </div>
        </div>
    )

};

export default Projects;