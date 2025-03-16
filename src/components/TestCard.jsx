import React from "react";
import { IoStarSharp } from "react-icons/io5";
const TestCard = ({ image, text1, text2 }) => {
  return (
    <div className="bg-white p-4 ">
      <div className="flex items-center gap-7 mb-3">
        <img src={image} alt="img" className="w-[50px] rounded-full" />
        <div>
          <h2 className="text-xl font-semibold text-black">{text1}</h2>
          <p className="text-sm text-orange-500">Satisfied Customers</p>
        </div>
      </div>
      <p className="p-2">
        Collecting feedsback from customers is the key to running a sucessful
        business. it can help you understand your customers.
      </p>
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-sm">{text2}</h3>
        <div className="flex gap-1 text-amber-300">
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
        </div>
      </div>
    </div>
  );
};

export default TestCard;
