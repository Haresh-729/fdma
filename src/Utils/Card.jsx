import React, { useState, useEffect } from 'react';
import icon from "../assets/icon.png";
import { ArrowRightIcon } from '@heroicons/react/24/outline';
const Card = ({ image, title, index }) => {
    const [content, setContent] = useState(false);
  
    const handleMouseOver = () => {
      setContent(true);
    };
  
    const handleMouseOut = () => {
      setContent(false);
    };
  
    return (
      <>
        {content ? (
          <div
            key={index}
            className="flex-shrink-0 w-[15rem] h-[20rem] rounded-xl overflow-hidden"
            onMouseOut={handleMouseOut}
            onMouseOver={handleMouseOver}
          >
            <div className="flex flex-col items-center justify-center bg-[#fd6274] h-full gap-5 px-2 ">
              <img src={icon} alt="icon_1" className="w-[3rem]" />
              <p className="text-white font-bold">{title}</p>
              <p className="text-center text-white">
                Dolore cupidatat qui ipsum duis cupidatat ex labore ullamco ut
                elit.
              </p>
              <a href="https://fylehq.com" target="_blank">
                <div className="flex flex-row items-center justify-center px-2 py-2 rounded-sm bg-white text-[#ff3a50] select-none cursor-pointer hover:shadow-lg">
                    READ MORE <ArrowRightIcon className="w-7"/>
                </div>
              </a>
            </div>
          </div>
        ) : (
          <div
            key={index}
            className="flex-shrink-0 w-[15rem] h-[20rem] rounded-xl overflow-hidden"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <img className="w-full h-full object-cover" src={image} alt={`Slide ${index}`} />
          </div>
        )}
      </>
    );
  };

  export default Card;
  