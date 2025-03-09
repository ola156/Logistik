import React from "react";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { FaRegCirclePause } from "react-icons/fa6";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaDropbox } from "react-icons/fa";
const HeroContent = ({
  setPlayStatus,
  heroCount,
  playStatus,
  setHeroCount,
}) => {
  const heroData = [
    { text1: "World wide", text2: "Best shipping" },
    { text1: "Transport", text2: "For Everything" },
    { text1: "Rail Freight", text2: "and Logistics" },
  ];
  return (
    <div className="hero">
      <div className="text-white   hero-text">
        <div className="flex items-center gap-2">
          {" "}
          <FaDropbox size={20} className="text-orange-400" />{" "}
          <p> We Provide the best services</p>
        </div>
        <p className="text-2xl">{heroData[heroCount].text1}</p>
        <p className="text-6xl">{heroData[heroCount].text2}</p>
      </div>
      <div className="flex  items-center gap-[50px] hero-explore">
        <p className="text-orange-500 text-sm font-light">
          Explore the Features
        </p>
        <TbArrowBadgeRightFilled className="text-orange-500" size={19} />
      </div>
      <div className="mt-[80px] flex justify-between ">
        <ul className="flex items-center gap-[23px] hero-dot">
          <li
            onClick={() => setHeroCount(0)}
            className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}
          ></li>
        </ul>
        <div className="flex items-center gap-[30px] text-2xl text-white font-light ">
          <span onClick={() => setPlayStatus(!playStatus)}>
            {playStatus ? (
              <FaRegCirclePause size={22} />
            ) : (
              <FaRegCirclePlay size={22} />
            )}
          </span>
          <p>See the video</p>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
