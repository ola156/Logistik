import React from "react";
import { FaDropbox } from "react-icons/fa";
import service1 from "../assets/service_1_2.jpg.webp";
import service2 from "../assets/service_1_3.jpg.webp";
import service3 from "../assets/service_1_4.jpg.webp";
import Buttons from "./Buttons";
const Services = () => {
  return (
    <div className="w-full h-dvh mt-10 pt-12 bg-gray-100 p-6">
      <div className="">
        <div className="flex items-center justify-center flex-col">
          <div className="flex gap-4 items-center">
            <FaDropbox size={22} className="text-orange-500 " />
            <p className="text-xl text-orange-500 mb-3">Our Services</p>
          </div>
          <h1 className="text-black text-[30px] font-bold mb-10 services-text">
            Specialist logistics services
          </h1>
        </div>

        <div className="flex justify-evenly items-center services-div gap-2">
          <div className="min-w-[30%]  rounded">
            <img src={service1} alt="service1" />
            <div className="w-full p-4  bg-white ">
              <h2 className="text-xl font-bold text-black mb-3">
                Bike Freight
              </h2>
              <p className="text-gray-900 font-semibold mb-3">
                Bike Freight can be provided by Specialized logistics
              </p>
              <div className="flex justify-center items-center">
                {" "}
                <Buttons
                  title="Learn More"
                  ButtonClass="py-3 px-4 text-white rounded mb-2 "
                />
              </div>
            </div>
          </div>
          <div className="min-w-[30%]">
            <img src={service2} alt="service2" />
            <div className="w-full p-4  bg-white ">
              <h2 className="text-xl font-bold text-black mb-3">
                Road Freight
              </h2>
              <p className="text-gray-900 font-semibold mb-3">
                Road Freight can be provided by Specialized logistics
              </p>
              <div className="flex justify-center items-center">
                {" "}
                <Buttons
                  title="Learn More"
                  ButtonClass="py-3 px-4 text-white rounded mb-2 "
                />
              </div>
            </div>
          </div>
          <div className="min-w-[30%]">
            <img src={service3} alt="service3" />
            <div className="w-full p-4  bg-white ">
              <h2 className="text-xl font-bold text-black mb-3">Air Freight</h2>
              <p className="text-gray-900 font-semibold mb-3">
                Air Freight can be provided by Specialized logistics
              </p>
              <div className="flex justify-center items-center">
                {" "}
                <Buttons
                  title="Learn More"
                  ButtonClass="py-3 px-4 text-white rounded mb-2 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
