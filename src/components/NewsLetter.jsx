import React from "react";

const NewsLetter = () => {
  return (
    <div className="">
      <div className="mt-5  flex justify-evenly gap-6">
        <div className="  ">
          <h2 className="text-2xl text-white">Subscribe to our NewsLetter</h2>
        </div>
        <div className=" ">
          <form className=" flex items-center  align-center">
            <input
              type="email"
              placeholder="Input Your Email"
              className=" py-3 px-4 text-gray-500 outline-0 text-sm border-orange-500 border"
            />
            <button className="cta " type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
