import React from "react";
import img1 from "../../../images/Ellipse 23.png";
import img2 from "../../../images/beg.png";
function Section5() {

  return (
    <>
      <div className="container m-auto px-5 my-5">
        <div className="bg-black  text-white flex px-14 items-center justify-between ">
          <div className="flex flex-col text-left w-1/3 justify-between space-y-6">
            <p className="text-[#00FF66] text-[16px] ">Categories</p>
            <h1 className="text-[46px]">Enhance Your Music Experience</h1>
            <div className="flex items-center space-x-3 ">
              <div className="font-bold items-center pt-1  flex flex-col text-black h-[60px] w-[60px] text-sm rounded-full bg-gray-200">
                <h3 className="">23</h3>
                <h3 className="">Hours</h3>
              </div>
              <span className="text-[32px] font-bold">:</span>
              <div className="font-bold items-center pt-1  flex flex-col text-black h-[60px] w-[60px] text-sm rounded-full bg-gray-200">
                <h3 className="">23</h3>
                <h3 className="">Hours</h3>
              </div>
              <span className="text-[32px] font-bold">:</span>
              <div className="font-bold items-center pt-1  flex flex-col text-black h-[60px] w-[60px] text-sm rounded-full bg-gray-200">
                <h3 className="">23</h3>
                <h3 className="">Hours</h3>
              </div>
              <span className="text-[32px] font-bold">:</span>
              <div className="font-bold items-center pt-1  flex flex-col text-black h-[60px] w-[60px] text-sm rounded-full bg-gray-200">
                <h3 className="">23</h3>
                <h3 className="">Hours</h3>
              </div>
            </div>
            <button className="w-[150px] h-[100] p-3 rounded-sm text-white bg-[#00FF66] hover:bg-green-500">
              Buy Now!
            </button>
          </div>
          <img src={img1} alt="" className=" relative w-2/3 h-fit" />
          <img src={img2} alt="" className=" absolute right-[130px]" />
        </div>
      </div>
    </>
  );
}

export default Section5;
