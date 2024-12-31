import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { Stacked, Pie, Button, SparkLine } from "../components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "./../data/dummy";
import { useStateContext } from "../context/ContextProvider";
import { GoPrimitiveDot } from "react-icons/go";

const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80  m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center relative ">
          <div className="w-full h-full bg-white/[0.5] dark:bg-black/[0.5]  absolute top-0 left-0 p-8 pt-9">
            <div className="w-full h-full flex  flex-col justify-center">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-black dark:text-white">Earnings</p>
                  <p className="text-2xl text-black  dark:text-white ">$63,448.78</p>
                </div>
                <div className="p-4 rounded-full block lg:hidden xl:block" style={{background:currentColor}} ><BsCurrencyDollar/></div>
              </div>
              <div className="mt-1">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>


      <div className="flex gap-2 md:gap-5 lg:gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 md:m-6 p-4 rounded-2xl w-full ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 gap-10 flex flex-wrap justify-center">
            <div className="lg:border-r-1 border-color m-4 pr-10 lg:w-[40%] w-full">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 text-xs ml-3">
                    23%
                  </span>
                </p>
                <p className="mt-1 text-gray-500">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$48,438</span>
                </p>
                <p className="mt-1 text-gray-500">Expense</p>
              </div>
              <div className="mt-5 ">
                <SparkLine
                  type="Line"
                  id="line-sparkline"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
               
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div className="lg:w-[40%] w-full">
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
