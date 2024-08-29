import React from "react";
import ProgrammingIcons from "./Languages";
import ProgrammingTools from "./Tools";

const AboutMe = () => {
    return (
        <div id="AboutMe" className="max-w-[1400px] m-auto md:pl-4 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-primary">About Me</h1>
            <div className="md:max-w-2xl mx-auto xl:max-w-6xl px-10 py-10 md:py-8 md:px-0">
                <div className="md:flex pt-6">
                    <img
                        src="/src/assets/picture.jpeg"
                        alt=""
                        className="rounded-2xl shadow-md hover:shadow-lg h-full w-full md:w-72 object-cover mr-4"
                    />
                    <div className="mt-4 h-full flex-1 w-full md:mt-0 bg-white rounded-2xl md:p-6 p-4 shadow-lg leading-snug" >
                        <h1 className="text-2xl font-semibold text-[#298036] pl-4 py-2 pr-4">Hello!</h1>
                        <p className="text-base pl-4 pr-4">
                            Welcome to my little corner of the internet!<br /><br />
                            I'm Lisa Liu, a Software Engineering student at the University of Waterloo, graduating in 2026.<br /><br />

                            As a Software Engineering student at the University of Waterloo,
                            I've embarked on a journey to delve into the fields of software development and human-computer interaction,
                            focusing on how technology can seamlessly integrate with and enhance the human experience.
                            With a specialization in human-computer interaction, I'm hoping to complement my academic pursuits with various internship roles,
                            ranging from User Experience Developer to Front-end Engineering.<br /><br />

                            In my free time, I enjoy creating new recipes in the kitchen and sitting down with a good book.<br /><br />
                            I've also recently taken interest in rock climbing and spin classes, but those are a work in progress.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h2 className="text-2xl font-bold text-center text-secondary">
                        Programming Languages
                    </h2>
                    <ProgrammingIcons />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-center text-secondary pt-2">
                        Tools and Frameworks
                    </h2>
                    <ProgrammingTools />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
