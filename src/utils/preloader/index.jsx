import React, { useEffect, useState } from "react";
import "./style.css";
const Preloader = ({ currentMode }) => {
  const [mode, setmode] = useState("Light");
  useEffect(() => {
    setmode(currentMode);
  }, [currentMode]);
  return (
    <div
      id="preloader"
      className={`${
        mode === "Dark" ? "bg-main-dark-bg/[0.7]" : "bg-white/[0.8]"
      } `}
    >
      <div id="loader" />
    </div>
  );
};

export default Preloader;
