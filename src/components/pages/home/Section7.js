import { Link } from "@mui/material";
import React from "react";
import Rectangle from "../../../images/Rectangle 18.png";
import playstation from "../../../images/playstation_large 1.png";
import speaker from "../../../images/Frame 707.png";
import perfume from "../../../images/Frame 706.png";
import Ellipse from "../../../images/Ellipse 24 copy.png";
function Section7() {
  return (
    <>
      <div className="container m-auto px-5 py-10 my-10">
        <div className="flex items-center gap-x-2 text-left">
          <img src={Rectangle} alt="" />
          <h1 className="font-bold text-[16px] text-[#DB4444]">Featured</h1>
        </div>
        <div className="flex items-center py-2 justify-between text-left">
          <h1 className="font-[600] text-[36px]">New Arrival</h1>
        </div>
        <div className="flex my-10  items-center space-x-8 ">
          <div className="bg-black pt-20 px-5">
            <div className="relative">
              <img src={playstation} alt="" />
              <div className=" absolute bottom-8 flex flex-col space-y-3 text-left text-white">
                <h1 className="font-[600] text-[24px]">PlayStation 5</h1>
                <p className="font-[400] text-[14px]">
                  Black and White version of the PS5
                  <br />
                  coming out on sale.
                </p>
                <Link to="">
                  <span className="text-white font-[500] text-[16px] hover:underline decoration-none">
                    Shop Now
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-4 items-center justify-between">
          <div className=" bg-black w-full flex items-end justify-between px-[30px] py-[32px]">
              <div className=" flex flex-col space-y-2 text-left text-[#FAFAFA]">
                <h1 className="font-[600] text-[24px]">Women’s Collections</h1>
                <p className="font-[400] text-[12px]">
                Featured woman collections that<br /> give you another vibe.
                </p>
                <Link to="">
                  <span className="text-white font-[500] text-[16px] hover:underline decoration-none">
                    Shop Now
                  </span>
                </Link>
              </div>
              <img src={speaker} alt="" className="" />
            </div>
          <div className="flex items-center space-x-4">
          <div className="relative bg-black px-[30px] py-[32px]">
              <img src={speaker} alt="" className="relative z-10" />
              <img src={Ellipse} alt="" className="absolute top-0 right-0 left-0 bottom-0" />
              <div className="z-20 absolute bottom-8 flex flex-col space-y-2 text-left text-[#FAFAFA]">
                <h1 className="font-[600] text-[24px]">Speakers</h1>
                <p className="font-[400] text-[12px]">
                Amazon wireless speakers
                </p>
                <Link to="">
                  <span className="text-white font-[500] text-[16px] hover:underline decoration-none">
                    Shop Now
                  </span>
                </Link>
              </div>
            </div>
            <div className="relative bg-black px-[30px] py-[32px]">
              <img src={perfume} alt="" className="relative z-10" />
              <img src={Ellipse} alt="" className=" absolute top-0 right-0 left-0 bottom-0" />
              <div className=" absolute z-20 bottom-8 flex flex-col space-y-2 text-left text-[#FAFAFA]">
                <h1 className="font-[600] text-[24px]">Perfume</h1>
                <p className="font-[400] text-[12px]">
                GUCCI INTENSE OUD EDP
                </p>
                <Link to="">
                  <span className="text-white font-[500] text-[16px] hover:underline decoration-none">
                    Shop Now
                  </span>
                </Link>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section7;
