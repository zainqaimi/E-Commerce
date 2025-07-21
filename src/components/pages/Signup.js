import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import SideImage  from '../../images/Side Image signup.png'

function Signup() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const firebase = useFirebase();
  const navigate = useNavigate();
  useEffect(() => {
    if (firebase.isLoggedIn === true) {
      // navigate To Home
      navigate("/home");
    }
  }, [firebase, navigate]);
  const HandleSignUp = async (e) => {
    try {
      e.preventDefault();
      console.log("signup....");
      const res = await firebase.SignupUserWithEmailAndPassword(
        email,
        password
      );
      console.log("signup sucess" + res);
      alert("signup sucess");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="container m-auto py-10 px-5 flex items-center justify-between ">
        <div className="-ml-14">
          <img src={SideImage} alt="" />
        </div>
        <section className="bg-gray-50 w-1/3">
          <div className="flex flex-col space-y-6 justify-between text-left">
            <div className="w-full bg-white shadow space-y-6 ">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl ">
                Create an account
              </h1>
              <p className="text-[10px] font-bold">Enter your details below</p>
              <form className="flex flex-col space-y-8" onSubmit={HandleSignUp}>
                <input
                  type="text"
                  name="text"
                  className="bg-gray-50 border-b-2 placeholder:text-slate-400 placeholder:text-[12px] border-b-slate-300 text-gray-900 text-sm outline-none  w-full p-2.5 pb-1"
                  placeholder="Name"
                  required=""
                />
                <input
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border-b-2 border-b-slate-300 placeholder:text-slate-400 placeholder:text-[12px] text-gray-900 text-sm outline-none  w-full p-2.5 pb-1"
                  placeholder="Email or Phone Number"
                  required=""
                />

                <input
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="bg-gray-50 border-b-2 border-b-slate-300 mb-1 text-gray-900 text-sm placeholder:text-slate-400 placeholder:text-[12px] outline-none  w-full p-2.5 pb-1"
                  required=""
                />

                <button
                  onSubmit={HandleSignUp}
                  className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                <p className="text-[16px] text-center py-5 font-light text-gray-500">
                  Already have an account?
                  <Link
                    to="/signin"
                    className="font-medium text-[16px] ml-1 hover:underline decoration-slate-500 decoration-2"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Signup;
