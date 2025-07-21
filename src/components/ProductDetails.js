import { Rating, Stack } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CardSlider from "./CardSlider";
import { useDispatch, useSelector } from "react-redux";
import {
  addtocard,
  selectcartitems,
  updateItemCount,
  // selectcartsTotalPrice,
} from "./redux/slices/cartSlice";

//read  react qeurey
const ProductDetails = () => {
  // const navigate = useNavigate();
  // const [value,setValue] = useState('')
  const dispatch = useDispatch();
  const cartItem = useSelector(selectcartitems);
  // const totalPrice = useSelector(selectcartsTotalPrice);
  console.log(cartItem);

  const location = useLocation();
  const { product } = location.state;
  const [count, setCount] = useState(0);
  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    setCount(count - 1);
  };
  const handlAddItem = (item) => {
    dispatch(
      addtocard({
        ...item,
        quantity: count,
      })
    );
  };
  // Item ka count update karna
  const handleUpdateCount = (id, newCount) => {
    dispatch(updateItemCount({ id, count: newCount }));
  };
  return (
    <>
      <div className="container px-5 py-5 m-auto flex items-center justify-between">
        <div className="flex flex-col items-center space-y-3">
          <img
            src={product.image}
            alt=""
            className="skew-x-12 w-[170px] h-[140px]"
          />
          <img
            src={product.image}
            alt=""
            className="skew-y-12 w-[170px] h-[140px]"
          />
          <img
            src={product.image}
            alt=""
            className="skew-x-12 w-[170px] h-[140px]"
          />
          <img
            src={product.image}
            alt=""
            className="skew-y-12 w-[170px] h-[140px]"
          />
        </div>
        <div>
          <img src={product.image} alt={product.title} className="h-[500px]" />
        </div>
        <div className="text-left flex flex-col space-y-6 w-1/4">
          <div className="text-left flex flex-col space-y-3 py-5 border-b border-gray-500">
            <h1 className="text-[24px] font-[600]">{product.title}</h1>
            <div className="flex items-center space-x-2 ">
              <Stack spacing={1}>
                <Rating
                  name="size-small"
                  defaultValue={product.rating.rate}
                  size="small"
                />
              </Stack>
              <h1 className="font-[500] text-gray-500 text-[12px] border-r-[1px] pr-2 border-gray-500">
                ({product.rating.count}Reviews)
              </h1>
              <p className="text-sm text-[#00FF66]">In Stock</p>
            </div>
            <h2 className="text-2xl font-[400]">${product.price}</h2>
            <p className="text-[14px] font-[400]">{product.description}</p>
          </div>
          <img
            src="../images/Frame 918.png"
            alt=""
            className="w-[150px] h-[20px] "
          />
          <div className="flex items-center space-x-2">
            <h1>Size:</h1>
            <div className="flex items-center space-x-3">
              <button className="w-[32px] h-[32px] bg-gray-300 rounded-[4px] text-sm hover:bg-red-600 hover:text-white ">
                XS
              </button>
              <button className="w-[32px] h-[32px] bg-gray-300 rounded-[4px] text-sm hover:bg-red-600 hover:text-white ">
                X
              </button>
              <button className="w-[32px] h-[32px] bg-gray-300 rounded-[4px] text-sm hover:bg-red-600 hover:text-white ">
                S
              </button>
              <button className="w-[32px] h-[32px] bg-gray-300 rounded-[4px] text-sm hover:bg-red-600 hover:text-white ">
                M
              </button>
              <button className="w-[32px] h-[32px] bg-gray-300 rounded-[4px] text-sm hover:bg-red-600 hover:text-white ">
                XL
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <button
                disabled={count === 0}
                onClick={handleDec}
                className={`w-[40px] h-[40px] bg-gray-200 rounded-[4px] text-sm hover:bg-red-600 hover:text-white ${
                  count === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                -
              </button>
              <input
                type="number"
                className="w-[80px] rounded-[4px] text-center font-[400] h-[35px] border border-black"
                value={count}
                onChange={(e) => handleUpdateCount(product.id, Number(e.target.value))}
              />
              <button
                onClick={handleInc}
                className="w-[40px] h-[40px] bg-gray-200 rounded-[4px] text-sm hover:bg-red-600 hover:text-white "
              >
                +
              </button>
            </div>
            <button
              disabled={count === 0}
              onClick={() => handlAddItem(product)}
              className={`w-[250px] h-[44px] rounded-[4px] text-sm bg-red-600 hover:bg-red-800 text-white ${
                count === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Buy Now
            </button>
            <img src="./images/Frame 904.png" alt="" />
          </div>
          <div className="w-full flex items-center space-x-2">
            <img src="./images/icon-delivery.png" alt="" />
            <div className=" flex flex-col space-y-1">
              <h3 className="text-[14px] font-[600]">Free Delivery</h3>
              <p className="text-[12px] font-[500]">
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>
          <div className="w-full flex items-center space-x-2">
            <img src="./images/Icon-return.png" alt="" />
            <div className=" flex flex-col space-y-1">
              <h3 className="text-[14px] font-[600]">Return Delivery</h3>
              <p className="text-[12px] font-[500]">
                Free 30 Days Delivery Returns. Details
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-5 py-5 m-auto ">
        <div className="flex items-center text-left">
          <img src="./images/Rectangle 18.png" alt="" />
          <h1 className="font-bold px-3 text-[16px] text-[#DB4444]">
            Related Item
          </h1>
        </div>
        <CardSlider />
      </div>
    </>
  );
};

export default ProductDetails;
