import React from "react";
import NewsLetter from "./NewsLetter";
import logo from "../assets/logo.svg";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { MdSegment } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 px-15 py-5 foot flex justify-between items-center">
      <div className="">
        <p className="text-white text-sm font-medium mb-4">
          {" "}
          &copy 2025 All Rights Reserved By Logistik.
        </p>
      </div>
      <div className="text-white flex items-center ml-4">
        <FaXTwitter className="mx-2  hover:text-orange-500" size={20} />
        <RiInstagramFill className="mx-2  hover:text-orange-500" size={20} />
        <FaFacebookF className="mx-2  hover:text-orange-500 " size={20} />
        <FaLinkedinIn className="mx-2  hover:text-orange-500" size={20} />
      </div>
    </div>
  );
};

export default Footer;
