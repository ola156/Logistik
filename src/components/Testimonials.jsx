import React from "react";
import { FaDropbox } from "react-icons/fa";
import TestCard from "./TestCard";
import Team1 from "../assets/team_1_1.jpg.webp";
import Team2 from "../assets/team_1_5.jpg.webp";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: Team1,
      text1: "Dave Joe",
      text2: "Goood Services",
    },
    {
      id: 2,
      image: Team2,
      text1: "Sam Kay",
      text2: "Quality Customer Care",
    },
    {
      id: 3,
      image: Team1,
      text1: "John Lee",
      text2: "Fast and Reliable",
    },
  ];

  return (
    <div className="bg-gray-200 p-4 mt-7 py-20">
      <div>
        <div className="flex items-center justify-center flex-col">
          <div className="flex gap-4 items-center">
            <FaDropbox size={22} className="text-orange-500 " />
            <p className="text-xl text-orange-500 mb-3">TESTIMONIAL</p>
          </div>
          <h1 className="text-black text-[27px] font-bold mb-10  text-center services-text">
            What Client’s say about Our Services
          </h1>
        </div>
      </div>
      <div className="flex justify-between items-center gap-3 hero-dotss">
        {testimonials.map(({ id, image, text1, text2 }) => (
          <div key={id}>
            <TestCard image={image} text1={text1} text2={text2} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
