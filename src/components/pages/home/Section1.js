import React from "react";
import AutoImageSlider from "../../AutoImageSlider ";
import vector from "../../../images/Vector.png";

function Section1() {
  return (
    <>
      <div className="container  mx-auto mt-0 px-5 flex items-center justify-between">
        <div className=" border-slate-300 border-r-2 w-1/4 py-5 pr-5 h-full mt-0">
          <div className=" flex flex-col gap-y-5  font-[600px]">
            <div className="flex items-center justify-between">
              <h3>Woman’s Fashion</h3>
              <img src={vector} alt="" className="w-[8px] h-[12px]" />
            </div>
            <div className="flex items-center justify-between">
              <h3>Men’s Fashion</h3>
              <img src={vector} alt="" className="w-[8px] h-[12px]" />
            </div>
            <div className="flex items-center justify-between">
              <h3>Electronics</h3>
            </div>
            <div className="flex items-center justify-between">
              <h3>Home & Lifestyle</h3>
            </div>
            <div className="flex items-center justify-between">
              <h3>Medicine</h3>
            </div>
            <div className="flex items-center justify-between">
              <h3>Sports & Outdoor</h3>
            </div>
            <div className="flex items-center justify-between">
              <h3>Baby’s & Toys</h3>
            </div>
            <div className="flex items-center justify-between">
              <h3>Groceries & Pets</h3>
            </div>
            <div className="flex items-center justify-between">
              <h3>Health & Beauty</h3>
            </div>
          </div>
        </div>
        <div className="w-3/4 pl-12 pt-12">
          <AutoImageSlider />
        </div>
      </div>
    </>
  );
}

export default Section1;
