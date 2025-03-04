import React from "react";
import logo from "../assets/logo.svg";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Nav = () => {
  return (
    <>
      <div className="p-3 bg-black flex items-center justify-evenly">
        <div className="text-white flex items-center ml-4">
          <FiPhone className="mx-2 text-orange-500" size={20} />
          <h3 className="font-extrabold mr-1">Phone :</h3>
          <p className="font-semibold">+234 808-744-2174</p>
        </div>
        <div className="text-white flex items-center ml-4">
          <MdOutlineEmail className="mx-2 text-orange-500" size={20} />
          <h3 className="font-extrabold mr-1">Email :</h3>
          <p className="font-semibold">agboolausman01@gmail.com</p>
        </div>
        <div className="text-white flex items-center ml-4">
          <FaXTwitter className="mx-2" size={20} />
          <RiInstagramFill className="mx-2 " size={20} />
          <FaFacebookF className="mx-2 " size={20} />
          <FaLinkedinIn className="mx-2 " size={20} />
        </div>
      </div>
      <header className="w-full bg-orange-600 px-2 py-4 shadow">
        <nav className="max-w-[90%] mx-auto ">
          <div className="flex justify-between items-center">
            <div className="">
              <img src={logo} alt="" className="w-40" />
            </div>
            <ul className="flex justify-between gap-10">
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
