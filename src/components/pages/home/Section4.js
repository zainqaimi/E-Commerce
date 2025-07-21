import React from "react";
import CardSlider from "../../CardSlider";
import Rectangle from '../../../images/Rectangle 18.png'
// https://fakestoreapi.com/products
function Section4() {
  return (
    <>
      <div className="container  m-auto px-5 py-10 ">
        <div className="flex items-center gap-x-2 text-left">
          <img src={Rectangle} alt="" />
          <h1 className="font-bold text-[16px] text-[#DB4444]">
            This Month
          </h1>
        </div>
        <div className="flex items-center py-2 justify-between text-left">
          <h1 className="font-[600] text-[36px]">Best Selling Products</h1>
          <button className="w-[150px] h-[50px] text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-[4px] text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            View All
          </button>
        </div>
        <div className="flex items-center justify-between py-3  gap-x-5"></div>
        <CardSlider name={""} />
      </div>
    </>
  );
}

export default Section4;
