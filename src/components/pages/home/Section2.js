import * as React from "react";
import CardSlider from "../../CardSlider";
import { useNavigate } from "react-router-dom";
import Rectangle from "../../../images/Rectangle 18.png";
function Section2() {
  const date = new Date();
  const navigate = useNavigate();
  const allProducts = () => {
    navigate("/products");
  };

  return (
    <>
      <div className="container m-auto px-5 py-10  border-b-2">
        <div className="flex space-x-96 ">
          <div className="flex items-center gap-x-2 text-left">
            <img src={Rectangle} alt="" />
            <h1 className="font-bold  text-[16px] text-[#DB4444]">Today’s</h1>
          </div>
          <div className="flex items-center  space-x-3">
            <div className=" space-y-2 ">
              <h3 className="font-[500] text-[16px]">Days</h3>
              <h3 className="font-bold text-[32px] ">{date.getDay()}</h3>
            </div>
            <span>:</span>
            <div className=" space-y-2 ">
              <h3 className="font-[500] text-[16px]">Hours</h3>
              <h3 className="font-bold text-[32px] ">{date.getHours()}</h3>
            </div>
            <span>:</span>
            <div className=" space-y-2 ">
              <h3 className="font-[500] text-[16px]">Minutes</h3>
              <h3 className="font-bold text-[32px] ">{date.getMinutes()}</h3>
            </div>
            <span>:</span>
            <div className=" space-y-2 ">
              <h3 className="font-[500] text-[16px]">Seconds</h3>
              <h3 className="font-bold text-[32px] ">{date.getSeconds()}</h3>
            </div>
          </div>
        </div>
        <CardSlider name={"Flash Sales"} />

        <button
          onClick={() => allProducts()}
          className="mt-5 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none  rounded-sm text-sm px-5 py-3 text-center "
        >
          View All Products
        </button>
      </div>
    </>
  );
}

export default Section2;
