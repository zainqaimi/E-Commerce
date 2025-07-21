import React from "react";
import Services from "../../../images/Services.png";
import Services2 from "../../../images/Services2.png";
import Services3 from "../../../images/Services3.png";
import arrowUp from "../../../images/arrow-up.png";
function Section8() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="container items-center m-auto px-40 py-10 my-5">
        <div className="flex items-center justify-between text-center">
          <div className="flex flex-col items-center space-y-2">
            <img src={Services} alt="" />
            <h1 className="text-[20px] font-[600] ">FREE AND FAST DELIVERY</h1>
            <h1 className="text-[14px] font-[400] ">
              Free delivery for all orders over $140
            </h1>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <img src={Services2} alt="" />
            <h1 className="text-[20px] font-[600] ">24/7 CUSTOMER SERVICE</h1>
            <h1 className="text-[14px] font-[400] ">
              Friendly 24/7 customer support
            </h1>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <img src={Services3} alt="" />
            <h1 className="text-[20px] font-[600] ">MONEY BACK GUARANTEE</h1>
            <h1 className="text-[14px] font-[400] ">
              We reurn money within 30 days
            </h1>
          </div>
        </div>
      </div>
      <div className="container  m-auto py-5 my-10 text-left sticky">
        <div className=" absolute right-0 top-0 rounded-full hover:bg-slate-200 text-center  w-[50px] h-[50px]">
          <img
            src={arrowUp}
            alt=""
            className="m-auto pt-3"
            onClick={scrollToTop}
          />
        </div>
      </div>
    </>
  );
}

export default Section8;
