import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { MdSegment } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { NavLink } from "react-router";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className=" ">
      <div className="py-3 bg-black md:flex items-center justify-evenly hidden">
        <div className="text-white flex items-center ml-4 ">
          <FiPhone className="mx-2 text-orange-500" size={20} />
          <h3 className="font-extrabold mr-1">Phone :</h3>
          <p className="font-semibold hover:text-orange-500">
            +234 808-744-2174
          </p>
        </div>
        <div className="text-white flex items-center ml-4">
          <MdOutlineEmail className="mx-2 text-orange-500" size={20} />
          <h3 className="font-extrabold mr-1">Email :</h3>
          <p className="font-semibold  hover:text-orange-500">
            agboolausman01@gmail.com
          </p>
        </div>
        <div className="text-white flex items-center ml-4">
          <FaXTwitter className="mx-2  hover:text-orange-500" size={20} />
          <RiInstagramFill className="mx-2  hover:text-orange-500" size={20} />
          <FaFacebookF className="mx-2  hover:text-orange-500 " size={20} />
          <FaLinkedinIn className="mx-2  hover:text-orange-500" size={20} />
        </div>
      </div>
      <header className="  px-2 py-4  ">
        <nav className="max-w-[90%] mx-auto ">
          <div className="flex justify-between items-center">
            <div className="">
              <img src={logo} alt="" className="sm:w-40 w-30" />
            </div>
            <div className="md:hidden block">
              <MdSegment
                className="text-white hover:text-black"
                size={25}
                onClick={() => setIsNavOpen(true)}
              />
            </div>
            <ul className="md:flex justify-between gap-10 lg:mr-25 hidden transition-colors text-white font-bold uppercase">
              <li className="hover:text-orange-500 underline-offset-3 hover:underline">
                Home
              </li>
              <li className="hover:text-orange-500 underline-offset-3 hover:underline">
                Service
              </li>
              <li className="hover:text-orange-500 underline-offset-3 hover:underline">
                About
              </li>
              <li className="hover:text-orange-500 underline-offset-3 hover:underline">
                Contact
              </li>
            </ul>
          </div>
        </nav>
        {isNavOpen && (
          <div className="fixed border-1 bg-white border-left border-l-black border-r-0 border-t-0 border-b-0 h-full w-[60%]  top-0 right-0 md:hidden block">
            <div>
              <div className=" bg-blue-700 mb-5 px-3 py-5  flex justify-between items-center">
                <img src={logo} alt="" className="w-30" />
                <IoMdCloseCircleOutline
                  className="text-white hover:text-orange-500"
                  size={22}
                  onClick={() => setIsNavOpen(false)}
                />
              </div>

              <ul className="flex flex-col justify-between gap-4  px-6 py-3 transition-colors text-black font-semibold uppercase">
                <NavLink to="/">
                  <li className="text-black  hover:text-orange-500   ">Home</li>
                </NavLink>
                <NavLink to="/">
                  <li className="text-black  hover:text-orange-500">Service</li>
                </NavLink>{" "}
                <NavLink to="/">
                  <li className="text-black  hover:text-orange-500">About</li>
                </NavLink>{" "}
                <NavLink to="/">
                  <li className="text-black  hover:text-orange-500">Contact</li>
                </NavLink>
              </ul>
              <div className="flex flex-col gap-5 mt-5 text-sm  ">
                <div className="text-black flex items-center ">
                  <FiPhone className="mx-2 text-orange-500" size={20} />
                  <h3 className="font-extrabold mr-1">Phone :</h3>
                  <p className="font-semibold hover:text-orange-500">
                    +234 808-744-2174
                  </p>
                </div>
                <div className="text-black flex items-center ">
                  <MdOutlineEmail className="mx-2 text-orange-500" size={20} />
                  <h3 className="font-extrabold  mr-1">Email :</h3>
                  <p className="font-semibold  hover:text-orange-500">
                    agboolausman01@
                  </p>
                </div>
              </div>
              <div className="text-black absolute bottom-25 right-[30%]  flex items-center ">
                <FaXTwitter className="mx-2  hover:text-orange-500" size={20} />
                <RiInstagramFill
                  className="mx-2  hover:text-orange-500"
                  size={20}
                />
                <FaFacebookF
                  className="mx-2  hover:text-orange-500 "
                  size={20}
                />
                <FaLinkedinIn
                  className="mx-2  hover:text-orange-500"
                  size={20}
                />
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Nav;
