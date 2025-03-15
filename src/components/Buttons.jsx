import React from "react";

const Buttons = ({ ButtonClass, HandleClick, title }) => {
  return <button className={` ${ButtonClass} cta`}>{title}</button>;
};

export default Buttons;
