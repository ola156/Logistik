import React from "react";
import { FaDropbox } from "react-icons/fa";
import service1 from "../assets/project_1_3.jpg.webp";
import service2 from "../assets/project_1_1.jpg.webp";
import service3 from "../assets/blog-s-1-3-414x273.jpg.webp";
import PortfolioCard from "./PortfolioCard";

const Blog = () => {
  const img = [
    {
      id: 1,
      image: service1,
      text1: "Effective packing",
      text2: "Packing and Distributions",
    },
    {
      id: 2,
      image: service2,
      text1: "Truck Freight",
      text2: "Transport and  Distribution",
    },
    {
      id: 3,
      image: service3,
      text1: "Air Freight",
      text2: "Transport for Products",
    },
  ];
  return (
    <div className="p-7 mt-7 mb-14">
      <div>
        <div className="flex items-center justify-center flex-col">
          <div className="flex gap-4 items-center">
            <FaDropbox size={22} className="text-orange-500 " />
            <p className="text-xl text-orange-500 mb-3">Our PORTFOLIO</p>
          </div>
          <h1 className="text-black text-[27px] font-bold mb-10 services-text">
            Our Recent Work Showcase
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 hero-dots">
        {img.map(({ id, image, text1, text2 }) => (
          <div key={id}>
            {" "}
            <PortfolioCard image={image} text1={text1} text2={text2} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
