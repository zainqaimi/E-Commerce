import React from "react";
import Rectangle from "../../../images/Rectangle 18.png";
import CardSlider from "../../CardSlider";

function Section6() {
  return (
    <>
      <div className="container m-auto px-5 py-10 my-5">
        <div className="flex items-center gap-x-2 text-left">
          <img src={Rectangle} alt="" />
          <h1 className="font-bold text-[16px] text-[#DB4444]">Our Products</h1>
        </div>
        <div className="flex items-center py-2 justify-between text-left">
          <h1 className="font-[600] text-[36px]">Explore Our Products</h1>
        </div>
        <CardSlider />
        {/* <div className="my-5">
            <img src={frame734} alt="" />
          </div> */}

        <button className="mt-5 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none  rounded-sm text-sm px-5 py-3 text-center ">
          View All Products
        </button>
      </div>
    </>
  );
}

export default Section6;
