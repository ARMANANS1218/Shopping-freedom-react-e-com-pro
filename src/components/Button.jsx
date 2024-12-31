import React from "react";

import { useStateContext } from "../context/ContextProvider";

const Button = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
  click,
}) => {
  const { setisClicked,  isClicked } = useStateContext();

  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
      onClick={() => {
        if (click) {
          setisClicked({ ...isClicked, [click]: false });
          console.log(isClicked)
        }
      }}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
