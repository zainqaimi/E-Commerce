import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  // addtocard,
  // clearCart,
  removeItem,
  selectcartitems,
  selectcartsTotalPrice,
  updateItemCount,
} from "./redux/slices/cartSlice";
// import { Alert } from "@mui/material";

function Checkout() {
  const [coupon, setCoupon] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const cartItem = useSelector(selectcartitems);
  const totalPrice = useSelector(selectcartsTotalPrice);

  // All items ko remove krne k liye
  // const handlRemove = (item) => {
  //   dispatch(clearCart(item));
  // };
  const handleUpdateCount = (id, newCount) => {
    dispatch(updateItemCount({ id, count: newCount }));
  };
  // Item ko remove karna
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };
  const handleCoupon = () => {
    try {
      // <Alert severity="success">This is a success Alert.</Alert>;
      alert('congratulation You won 10% Discount')
      setCoupon(true);
    } catch (err) {
      console.log("coupon Error .", err);
    } finally {
      // setCoupon(false);
      setValue("");
    }
  };

  return (
    <>
      <div class="m-auto px-5 container my-40 relative ">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Qty
              </th>
              <th scope="col" class="px-6 py-3">
                Subtotal
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItem.map((item) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 py-4 flex items-center space-x-2 font-semibold text-gray-900 dark:text-white">
                  <img
                    src={item.image}
                    alt=""
                    className="w-[50px] h-[50px] mr-3"
                  />
                  {item.title}
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  ${item.price}
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                    <div>
                      <input
                        type="number"
                        value={item.quantity}
                        id="first_product"
                        class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1"
                        placeholder="1"
                        onChange={(e) =>
                          handleUpdateCount(item.id, Number(e.target.value))
                        }
                        // min={1}
                        // max={10}
                        // step={1}
                        disabled
                        required
                      />
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  ${item.price * item.quantity}
                </td>
                <td class="px-6 py-4">
                  <Link
                    href=""
                    class="font-medium text-red-600 dark:text-red-500 hover:underline"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
          {/* <tfoot>
              <tr className="font-semibold text-gray-900">
                <th scope="row" className="px-6 py-3 text-base">
                  Total
                </th>
                <td className="px-6 py-3">{cartItem.length}</td>
                <td className="px-6 py-3">${totalPrice.toFixed(2)}</td>
              </tr>
            </tfoot> */}
        </table>
        <div className="flex items-center justify-between my-5">
          <button className="w-[200px] h-[50px] rounded-[4px] border border-black/50 bg-slate-100 hover:bg-slate-200">
            Return To Shop
          </button>
          <button className="w-[200px] h-[50px] rounded-[4px] border border-black/50 bg-slate-100 hover:bg-slate-200">
            Update Cart
          </button>
        </div>
        <div className="flex items-start justify-between my-40">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Coupon Code"
              className="w-[300px] h-[50px] rounded-[4px] border border-gray-500 outline-none placeholder:text-gray-400 px-2"
            />
            <button
              onClick={handleCoupon}
              className={`w-[200px] h-[50px] rounded-[4px] text-sm bg-red-600 hover:bg-red-800 text-white ${
                value.length === 0 || value.length < 4
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              Apply Coupon
            </button>
            {/* // className="w-[200px] h-[50px] rounded-[4px] text-white bg-red-600 hover:bg-red-700"> */}
          </div>

          <div className="w-[470px] h-[324px] rounded-md font-[400] border border-gray-500 p-5 space-y-5 ">
            <div className=" text-left space-y-6">
              <h1 className=" font-bold text-[20px]">Cart Total</h1>
              <div className="border-b border-gray-300 pb-3 flex items-center justify-between">
                <h3>Subtotal:</h3>
                <h3>${totalPrice}</h3>
              </div>
              <div className="border-b border-gray-300 pb-3 flex items-center justify-between">
                <h3>Shipping:</h3>
                <h3>Free</h3>
              </div>
              <div className="border-b border-gray-300 pb-3 flex items-center justify-between">
                <h3>Total:</h3>
                {coupon ? (
                  <h3>${Math.round(totalPrice-totalPrice/100*10)}</h3>
                ) : (
                  <h3>${Math.round(totalPrice)}</h3>
                )}
              </div>
            </div>
            <button className="w-[250px] h-[50px] text-center m-auto rounded-[4px] text-white bg-red-600 hover:bg-red-700">
              Procees to checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
