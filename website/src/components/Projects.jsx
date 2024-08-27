import React from "react";
import ProjectItem from "./ProjectItem";
import Vite from "../assets/react.svg";

const Projects = () =>{
    return(
        <div id='Projects' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className="text-center py-8">
                sjdfksjdfljshdlhsldflsjdlfsjdflshldfhlskdlfksdkhsldkfshdflkshdlfkshldkfskdhflksjhdflkjhslkdhfksjhdf
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