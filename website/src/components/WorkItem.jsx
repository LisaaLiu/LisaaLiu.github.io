import React from "react";

const WorkItem = ({ year, company, title, duration, details, isEven }) => {
  return (
    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
      <div
        className={`relative flex items-center justify-between md:justify-normal ${
          isEven ? "md:flex-row-reverse" : ""
        } group is-active`}>
        
        
        {/* Icon */}
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1  ${
            isEven ? "md:-translate-x-1/2" : "md:translate-x-1/2"
          }`}
        ></div>
        
        {/* Card */}
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
          <p className="flex items-center justify-between space-x-2">
            <span className="text-xl font-semibold text-[#001b5e]">{title}</span>
            <span className="hidden md:block font-caveat text-sm text-indigo-500">{year}</span>
          </p>
          <p className="text-lg font-normal text-stone-500 mb-1">{company}</p>
          <p className="my-2 text-base font-normal text-stone-500">{details}</p>
          
          {/* Time for smaller screens */}
          <div className="md:hidden">
            <p>
              <span className="font-caveat text-sm text-indigo-500">{year}</span>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default WorkItem;
