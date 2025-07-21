// import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import search from "../images/magnifyingglass.png";

// function Navbar() {
//   return (
//     <>
//       <div className="w-full border-b-2">
//         <div className="container m-auto py-5 px-5 flex items-center justify-between ">
//           <h1 className="font-bold md:text-[24px] text-[18px]">Exclusive</h1>
//           <div className="hidden md:flex items-center font-[400px]  text-[16px] justify-between space-x-[48px] list-none">
//             <Link
//               className="hover:underline decoration-slate-500 decoration-2"
//               to={"/home"}
//             >
//               Home
//             </Link>
//             <Link
//               className="hover:underline decoration-slate-500 decoration-2"
//               to={"/contact"}
//             >
//               contact
//             </Link>
//             <Link
//               className="hover:underline decoration-slate-500 decoration-2"
//               to={"/about"}
//             >
//               About
//             </Link>
//             <Link
//               className="hover:underline decoration-slate-500 decoration-2"
//               to={"/signup"}
//             >
//               Sign Up
//             </Link>
//           </div>
//           <div className="flex item items-center  ">
//             <input
//               type="search"
//               className="bg-[#F5F5F5] placeholder:text-[12px] md:px-3 md:py-3 p-1 outline-none rounded-lg "
//               placeholder="What are you looking for?"
//             />
//             <img src={search} alt="" className=" w-[20px] h-[20px] -ml-8" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;
import { HiMagnifyingGlass } from "react-icons/hi2";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useFirebase } from "./context/Firebase";
import { signOut } from "firebase/auth";
import heart from "./../images/heart.png";
import cart from "./../images/Cart1.png";
import { useSelector } from "react-redux";
import { selectcartitems } from "./redux/slices/cartSlice";

const Navbar = () => {
  const navigate = useNavigate()
  const cartItem = useSelector(selectcartitems);
  const firebase = useFirebase();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCheckout = ()=>{
navigate('/checkout')
  }

  return (
    <>
      <div className=" relative w-full border-b-2">
        <nav className="container m-auto flex items-center justify-between p-5">
          <div className="text-2xl font-bold">Exclusive</div>
          <div className="flex items-center space-x-8 font-[400px]  text-[16px]">
            <Link
              className="hover:underline decoration-slate-500 decoration-2"
              to={"/home"}
            >
              Home
            </Link>
            <Link
              className="hover:underline decoration-slate-500 decoration-2"
              to={"/contact"}
            >
              contact
            </Link>
            <Link
              className="hover:underline decoration-slate-500 decoration-2"
              to={"/about"}
            >
              About
            </Link>
            <Link
              className="hover:underline decoration-slate-500 decoration-2"
              to={"/signup"}
            >
              Sign Up
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="px-4 py-2 rounded-lg bg-[#F5F5F5] focus:outline-none focus:ring focus:ring-gray-200 placeholder:text-[12px] outline-none "
              />
              <HiMagnifyingGlass className="absolute right-3 top-3 text-black " />
            </div>

            {firebase.isLoggedIn && (
              <>
                <img src={heart} alt="" />
                <div className="relative">
                  <img src={cart} alt="" onClick={handleCheckout} />
                  <span className="absolute -top-1.5 -right-1 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold leading-none text-white bg-red-600 rounded-full">{cartItem.length}</span>
                </div>
                <div className="relative">
                  <div className="hover:bg-red-600 p-2 hover:text-white rounded-full">
                    <FaUser
                      className=" hover:text-white cursor-pointer text-black"
                      onClick={toggleDropdown}
                    />
                  </div>
                  {isDropdownOpen && (
                    <div className="z-10 absolute right-0 w-48 mt-2 bg-white text-black rounded shadow-lg">
                      <a
                        href="#profile"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Profile
                      </a>
                      <a
                        href="#settings"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Settings
                      </a>
                      <a
                        href="#logout"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={() => signOut(firebase.auth)}
                      >
                        Logout
                      </a>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
