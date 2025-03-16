import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
const PortfolioCard = ({ image, text1, text2 }) => {
  return (
    <div className="relative portfolio  md:w-[100%] lg:w-[100%]  ">
      <div>
        <img
          src={image}
          alt="img"
          className="relative  w-full h-[310px] object-cover "
        />
      </div>
      <div className="bg-white absolute text-black p-5 py-6 top-[20%] right-[2%] left-[8%] port fade-in flex justify-between">
        <div>
          <p className="text-orange-500"> {text1}</p>
          <h2 className=" font-bold md:text-xl lg:text-2xl]">{text2}</h2>
        </div>
        <div>
          <CiLocationArrow1 size={30} className="" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
