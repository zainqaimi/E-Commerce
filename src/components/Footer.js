import React from "react";
import iconSend from "../images/icon-send.png";
import AppStore from "../images/AppStore.png";
import GooglePlay from "../images/GooglePlay.png";
import Facebook from '../images/Icon-Facebook.png'
import Linkedin from '../images/Icon-Linkedin.png'
import Twitter from '../images/Icon-Twitter.png'
import instagram from '../images/icon-instagram.png'
import QrCode from '../images/Qr Code.png'



function Footer() {
  return (
    <>
      <div className="bg-black m-auto">
        <div className="container flex flex-wrap items-center justify-between m-auto px-5 py-5 bg-black text-white">
          <div className="flex flex-col space-y-3 text-left my-2">
            <h1 className="font-bold md:text-[24px] text-[18px] ">Exclusive</h1>
            <h2 className="md:text-[20px] text-[16px] font-medium">
              Subscribe
            </h2>
            <p className="md:text-[18px] text-[14px] ">
              Get 10% off your first order
            </p>
            <div className="flex items-center">
              <input
                type="search"
                className="bg-black  md:py-3 md:px-4 p-1 rounded-[4px] border border-white "
                placeholder="Enter your email"
              />
              <img
                src={iconSend}
                alt=""
                className="w-[24px] h-[24] md:-ml-10 -ml-8"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-3 text-left ">
            <h2 className="text-[20px] font-medium">Support</h2>
            <p>
              111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
            </p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
          <div className="flex flex-col space-y-3 text-left ">
            <h2 className="text-[20px] font-medium">Account</h2>
            <p>My Account</p>
            <p>cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>
          <div className="flex flex-col space-y-3 text-left ">
            <h2 className="text-[20px] font-medium">Quick Link</h2>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
          <div className="flex flex-col space-y-3 text-left ">
            <h2 className="text-[20px] font-medium">Download App</h2>
            <p className="text-[12px] text-[#FAFAFA]">
              Save $3 with App New User Only
            </p>
            <div className="flex items-center gap-x-1">
              <img src={QrCode} alt="" />
              <div className="items-center gap-y-1">
                <img src={AppStore} alt="" />
                <img src={GooglePlay} alt="" />
              </div>
            </div>
            <div className="flex space-x-4 items-center">
              <img src={Facebook} alt="" />
              <img src={Linkedin}alt="" />
              <img src={Twitter} alt="" />
              <img src={instagram} alt="" />
            </div>
          </div>
        </div>
        <div className=" text-center  py-5 bg-black text-[#F9F9F933]">
          Copyright Rimel 2022. All right reserved
        </div>
      </div>
    </>
  );
}

export default Footer;
