import React from "react";

const Buttons = ({ ButtonClass, HandleClick, title }) => {
  return <button className={` ${ButtonClass}`}>{title}</button>;
};

export default Buttons;
