import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import SideImage  from '../../images/Side Image signup.png'

function SignIn() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const firebase = useFirebase();
  const navigate = useNavigate();
  useEffect(() => {
    if (firebase.isLoggedIn === true) {
      // navigate To Home
      navigate("/home");
    } else {
      navigate("/signin");
    }
  }, [firebase, navigate]);

  const HandleSignIn = async (e) => {
    try {
      e.preventDefault();
      console.log("SignIn....");
      const res = await firebase.SigninUserWithEmailAndPass(email, password);
      console.log("SignIn.... Sucess >====>" + res);
    } catch (err) {
      console.log("Unexpected Error", err);
    }
  };
  return (
    <>
      <div className="container m-auto py-5 my-5 px-5 flex items-center justify-between ">
        <div className="-ml-14">
          <img src={SideImage} alt="" />
        </div>
        <section className="bg-gray-50 w-1/3">
          <div className="flex flex-col items-center justify-between text-left">
            <div className="w-full bg-white shadow ">
              <div className="p-6 space-y-8 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-3xl ">
                  Log in to Exclusive
                </h1>
                <form
                  className="space-y-8 md:space-y-6"
                  onSubmit={HandleSignIn}
                >
                  <div className="flex flex-col space-y-3">
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
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="ml-3 text-sm">
                        <button
                          onSubmit={HandleSignIn}
                          className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-[4px] text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                          Sign in
                        </button>
                      </div>
                    </div>
                    <Link
                      to="#"
                      className="text-sm font-medium text-red-600 hover:underline hover:text-red-600 dark:text-primary-500"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <button
          onClick={firebase.signinWithGoogle}
          className="w-full text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Sign in With Google
        </button> */}
        </section>
      </div>
    </>
  );
}

export default SignIn;
