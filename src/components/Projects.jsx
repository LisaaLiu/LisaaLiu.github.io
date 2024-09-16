import React from "react";
import ProjectItem from "./ProjectItem";
import goStudy from "../assets/GoStudy.png";
import zeroHour from "../assets/zeroHour.png";
import chess from "../assets/image.png";

const Projects = () =>{
    return(
        <div id='Projects' className="max-w-[1300px] m-auto md:pl-10 p-4 py-10">
            <h1 className="text-4xl font-bold text-center text-primary">Projects</h1>
            <p className="text-center py-8 mb-6">
            I've had the wonderful experience of working on these projects, each of which has helped broaden my expertise and hone my skills. Through my projects, I love to intertwine my passion for technology with creating innovative solutions to real-life problems. Whether you're looking for a collaborative partner or an innovative developer, I'm excited to explore how we can create something extraordinary together!
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectItem img={goStudy} title={"Go Study"} tech={"React.js Tailwind"} links={"https://github.com/LisaaLiu/GoStudy/blob/main/gostudy/README.md"}/>
                <ProjectItem img={zeroHour} title={"Zero Hour"} tech={"Python"} links={"https://github.com/LisaaLiu/zeroHour/blob/main/README.md"} zoom/>

            </div>
        </div>
    )

};

export default Projects;