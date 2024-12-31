import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { FiSettings } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 991) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div
      className={`${activeMenu ? "ml-3": ''}  h-screen z-[19900000] overflow-y-scroll  pb-10`}
    >
      <>
        <div
          className={`flex  ${
            activeMenu ? "justify-between" : "justify-center"
          } items-center`}
        >
          <Link
            to="/"
            onClick={handleCloseSideBar}
            className={`items-center gap-3 ${
              activeMenu && "ml-3"
            } mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900`}
          >
            <SiShopware /> {activeMenu && <span>SHOPPING FREEDOM</span>}
          </Link>
         {activeMenu &&  <TooltipComponent content="Menu" position="BottomCenter">
            <button
              type="button"
              onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
            >
              <MdOutlineCancel />
            </button>
          </TooltipComponent>}
        </div>
        <div className="mt-10">
          {links.map((item) => (
            <div key={item.title}>
              {activeMenu && (
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
              )}
              {item.links.map((link) => (
                <div key={link.name}>
                  <TooltipComponent content={link.name} position="BottomCenter">
                    <NavLink
                      to={`/${link.name}`}
                      onClick={handleCloseSideBar}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? currentColor : "",
                      })}
                    >
                      <div className="text-xl">{link.icon}</div>
                      {activeMenu && (
                        <span className="capitalize text-lg">{link.name}</span>
                      )}
                    </NavLink>
                  </TooltipComponent>
                </div>
              ))}
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default Sidebar;
