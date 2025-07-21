import React from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbDeviceWatchStats } from "react-icons/tb";
import { MdOutlineCameraAlt } from "react-icons/md";
import { PiHeadphones } from "react-icons/pi";
import { LuGamepad } from "react-icons/lu";
import Rectangle from '../../../images/Rectangle 18.png'
function Section3() {
  return (
    <>
      <div className="container m-auto px-5 py-10 ">
      <div className="flex items-center gap-x-2 text-left">
      <img src={Rectangle} alt="" />
          <h1 className="font-bold  text-[16px] text-[#DB4444]">Categories</h1>
        </div>
        <div className="flex items-center py-2 justify-between text-left">
          <h1 className="font-[600] text-[36px]">Browse By Category</h1>
          <div>
            <img src="./images/Frame 726.png" alt="" />
          </div>
        </div>
        <div className="flex items-center py-8 justify-between">
          <div className="w-[150px] h-[140px] space-y-2 items-center flex flex-col justify-center hover:bg-red-600 hover:border-none hover:text-white border-[#0000004D]/20 border-2 rounded-[4px]">
            {/* <img src={phone} alt="" /> */}
            <IoIosPhonePortrait className="w-[50px] h-[50px]" />
            <h1 className="text-[16px] font-[400]">Phones</h1>
          </div>
          <div className="hover:bg-red-600 hover:border-none hover:text-white w-[150px] h-[140px] space-y-2 items-center flex flex-col justify-center border-[#0000004D]/20 border-2 rounded-[4px]">
            {/* <img src={phone} alt="" /> */}
            <HiOutlineComputerDesktop className="w-[50px] h-[50px]" />
            <h1 className="text-[16px] font-[400]">computers</h1>
          </div>
          <div className="hover:bg-red-600 hover:border-none hover:text-white w-[150px] h-[140px] space-y-2 items-center flex flex-col justify-center border-[#0000004D]/20 border-2 rounded-[4px]">
            <TbDeviceWatchStats className="w-[50px] h-[50px]" />
            <h1 className="text-[16px] font-[400]">smartwatch</h1>
          </div>
          <div className="hover:bg-red-600 hover:border-none hover:text-white w-[150px] h-[140px] space-y-2 items-center flex flex-col justify-center border-[#0000004D]/20 border-2 rounded-[4px]">
            <MdOutlineCameraAlt className="w-[50px] h-[50px]" />
            <h1 className="text-[16px] font-[400]">Camera</h1>
          </div>
          <div className="hover:bg-red-600 hover:border-none hover:text-white w-[150px] h-[140px] space-y-2 items-center flex flex-col justify-center border-[#0000004D]/20 border-2 rounded-[4px]">
            <PiHeadphones className="w-[50px] h-[50px]" />
            <h1 className="text-[16px] font-[400]">HeadPhones</h1>
          </div>
          <div className="hover:bg-red-600 hover:border-none hover:text-white w-[150px] h-[140px] space-y-2 items-center flex flex-col justify-center border-[#0000004D]/20 border-2 rounded-[4px]">
            <LuGamepad className="w-[50px] h-[50px]" />
            <h1 className="text-[16px] font-[400]">Gaming</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3;
