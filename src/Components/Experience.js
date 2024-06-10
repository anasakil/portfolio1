import React from "react";
import { FaBuilding, FaMapMarkerAlt } from "react-icons/fa";
function Experience({ position, company, location,  duration }) {
  return (
    <article className="pt-8 border-b-2 border-dark-content pb-5 dark:border-light-content border-opacity-20 dark:border-opacity-20">
      <div className="flex justify-between items-center">
        <h1 className="text-content md:text-lg lg:text-xl">{position}</h1>
       
      </div>
      <div className="flex justify-between pt-2">
        
        <div className="flex flex-col md:flex-row">
          
          <div className="flex items-center pr-5">
            
            <FaBuilding
              className="dark:text-light-heading text-dark-heading min-w-fit"
              size={16}
            />
            <p className="text-content text-xs md:text-sm font-light pl-1">
              {company}
            </p>
          </div>
          <div className="flex items-center">
            
            <FaMapMarkerAlt
              className="dark:text-light-heading text-dark-heading min-w-fit"
              size={16}
            />
            <p className="text-content text-xs md:text-sm font-light pl-1">
              {location}
            </p>
          </div>
        </div>
        <p className="text-content text-xs md:text-sm font-light pl-1 min-w-fit">
          {duration}
        </p>
      </div>
    </article>
  );
}
export default Experience;
