import React from "react";
import { FaDropbox } from "react-icons/fa";
import Buttons from "./Buttons";
import AboutImg from "../assets/about_1.png.webp";
import person1 from "../assets/team_1_1.jpg.webp";
import sign from "../assets/signature.png.webp";
import service1 from "../assets/service_2_1.svg";
import service2 from "../assets/service_1_3.svg";
const AboutUs = () => {
  const HandleClick = () => {
    console.log("clicked");
  };
  return (
    <div className="mt-10 p-6 h-[100%] w-full mb-10">
      <div className="flex items-center justify-between about-div">
        <div className="w-[48%] p-3 about-img-div mt-7">
          <img src={AboutImg} alt="about" className="object-cover" />
        </div>
        <div className="w-[48%] px-3 about-img-div">
          <div className="flex gap-2 px-4 mb-4">
            <FaDropbox size={20} className="text-orange-400" />
            <p className="text-xl font-bold">About Us</p>
          </div>
          <h2 className="text-3xl text-black font-extrabold mb-3">
            Provide Transportation Services Since 1996
          </h2>
          <p className="text-gray-400 mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            recusandae est inventore excepturi exercitationem! Sequi est, nobis
            earum mollitia totam, eaque exercitationem numquam repellendus
            architecto dicta, cumque fuga sint corrupti.
          </p>
          <div className="flex justify-between items-center pr-4">
            <Buttons
              title="Read More"
              ButtonClass="py-3 px-4 text-white "
              HandleClick={HandleClick}
            />
            <div className="flex gap-4 items-center">
              <img
                src={person1}
                alt="img1"
                className="w-[50px] h-[50px] rounded-full"
              />
              <img src={sign} alt="sign" className="w-[70px] h-[50px]" />
            </div>
          </div>

          <div className="flex mt-10 about-div-1 gap-1">
            <div className="flex items-center gap-3 bg-orange-300  p-4 ">
              <img src={service1} alt="aford" />
              <div className="text-black">
                <h2 className="text-xl font-bold">Affordable Cost</h2>
                <p className="text-sm">
                  Mauris blandit aliquet, eget Tincidunt nibh pulvinar
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-orange-300  p-4 ">
              <img src={service2} alt="aford" />
              <div className="text-black">
                <h2 className="text-xl font-bold">Shot Time Delivery</h2>
                <p className="text-sm">
                  tincidunt nibh pulvinar. Sed Porttitor lectus nibh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
