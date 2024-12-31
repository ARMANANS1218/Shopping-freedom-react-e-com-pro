import React, { createContext, useContext, useEffect, useRef, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setisClicked] = useState(initialState);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setcurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const resizeObserverRef = useRef(null);

  const handleClick = (clicked) => {
    setisClicked({ ...initialState, [clicked]: true });
  };

  const setMode = (e) => {
    setcurrentMode(e.target.value);

    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  useEffect(() => {
    resizeObserverRef.current = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      setScreenSize(width);
    });

    resizeObserverRef.current.observe(document.documentElement);

    return () => {
      resizeObserverRef.current.disconnect();
    };
  }, []);

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setisClicked,
        handleClick,
        screenSize,
        currentColor,
        currentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
        setCurrentColor,
        setcurrentMode,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
