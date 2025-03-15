import React, { useState } from "react";

import { MdOutlineManageAccounts } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import { LiaWeightSolid } from "react-icons/lia";
import { CiLocationArrow1 } from "react-icons/ci";
const Form = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const tabs = [
    { id: "tab1", label: "Request A Quote" },
    { id: "tab2", label: "Real Time Tracking" },
  ];

  const tabContent = {
    tab1: (
      <form className="w-full h-full p-7 flex flex-col gap-4">
        <div className="flex w-full gap-3 tab-content">
          <div className="w-full relative flex ">
            <input type="text" placeholder="Full Name" className="input-box" />
            <MdOutlineManageAccounts
              className="absolute text-white right-3 top-4"
              size={20}
            />
          </div>
          <div className="w-full relative flex ">
            <input
              type="email"
              placeholder="Your Email"
              className="input-box"
            />
            <MdOutlineAttachEmail
              className="absolute text-white right-3 top-4"
              size={20}
            />
          </div>
        </div>
        <div className="flex w-full gap-3 tab-content">
          <div className="w-full relative flex ">
            <input type="text" placeholder="Weight, Kg" className="input-box" />
            <LiaWeightSolid
              className="absolute text-white right-3 top-4"
              size={20}
            />
          </div>
          <div className="w-full relative flex ">
            <input
              type="text"
              placeholder="Distance, Km"
              className="input-box"
            />
            <CiLocationArrow1
              className="absolute text-white right-3 top-4"
              size={20}
            />
          </div>
        </div>
        <select className="input-box px-6">
          <option value="" className="text-black">
            Select Option
          </option>
          <option value="" className="text-black">
            Feright 1
          </option>
          <option value="" className="text-black">
            Feright 2
          </option>
          <option value="" className="text-black">
            Feright 3
          </option>
        </select>
        <button className="px-4 py-3  rounded bg-white hover:bg-orange-500 uppercase font-bold text-black hover:text-white">
          Submit
        </button>
      </form>
    ),
    tab2: (
      <form className="w-full h-full p-7   flex flex-col gap-4">
        <div className="flex w-full gap-3 tab-content">
          <div className="w-full relative flex ">
            <input type="text" placeholder="Full Name" className="input-box" />
            <MdOutlineManageAccounts
              className="absolute text-white right-3 top-4"
              size={20}
            />
          </div>
          <div className="w-full relative flex ">
            <input
              type="email"
              placeholder="Your Email"
              className="input-box"
            />
            <MdOutlineAttachEmail
              className="absolute text-white right-3 top-4"
              size={20}
            />
          </div>
        </div>
        <div className="flex w-full ">
          <div className="w-full relative flex ">
            <textarea placeholder="Type here" className="input-box" />
            <CiLocationArrow1
              className="absolute text-white right-3 top-4"
              size={20}
            />
          </div>
        </div>

        <button className="px-4 py-3  rounded bg-white hover:bg-orange-500 uppercase font-bold text-black hover:text-white">
          Submit
        </button>
      </form>
    ),
  };

  return (
    <div className="w-full py-30 flex  justify-center bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 ">
      <div className=" tabs-div min-w-[850px]  rounded bg-white  border shadow-xl tab-div ">
        <div className="flex flex-wrap border-b border-orange-500">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 font-semibold ${
                activeTab === tab.id
                  ? "!border-b-2 border-orange-500 text-orange-500"
                  : "text-black hover:text-gray-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="bg-blue-700 px-6 pb-7 pt-4">
          {tabContent[activeTab]}
        </div>
      </div>
    </div>
  );
};

export default Form;
