import { Rating, Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardSkeleton from "./CardSkeleton";
import { useNavigate } from "react-router-dom";
import rightArrow from "../images/icons arrow-right.png";
import leftArrow from "../images/icons_arrow-left.png";
import heart from "../images/heart small.png";
import View from "../images/Quick View.png";

const baseURL = "https://fakestoreapi.com/products";
const CardSlider = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const getApi = async () => {
    setLoading(true);
    setErr(null);
    try {
      const res = await axios.get(baseURL);
      if (res.status === 200) {
        setCards(res.data);
      } else {
        setErr(`Unexpected response status: ${res.status}`);
      }
    } catch (error) {
      setErr("Failed to fetch data. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getApi();
  },[]);
  const navigate = useNavigate();
  const handleAddToCart = (product) => {
    navigate("/product-details", { state: { product } }); // Pass the product data to ProductDetails
  };

  const nextCard = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <div className="container m-auto flex items-center py-2 justify-between text-left">
        <h1 className="font-[600] text-[36px]">{props.name}</h1>

        <div className="flex items-center gap-x-5">
          {/* Timer code can be placed here */}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={prevCard}
            className={`bg-white text-black rounded-full w-[50px] h-[50px] pl-3 hover:bg-gray-300 ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentIndex === 0}
          >
            <img src={leftArrow} alt="Previous" />
          </button>
          <button
            onClick={nextCard}
            className={`bg-white text-black rounded-full w-[50px] pl-3 h-[50px] hover:bg-gray-300 ${
              currentIndex === cards.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={currentIndex === cards.length - 1}
          >
            <img src={rightArrow} alt="Next" />
          </button>
        </div>
      </div>

      {loading && (
        <div className="flex space-x-4">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      )}

      {err && <p>Oop's Some thing went wrong check your internet...</p>}

      {!loading && !err && cards.length > 0 && (
        <div className="relative  overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 p-4"
                style={{ maxWidth: "300px" }}
              >
                <div
                  className="bg-white rounded shadow-lg overflow-hidden pb-4 relative group"
                  style={{ height: "400px" }}
                >
                  <div className="relative bg-[#F5F5F5] mb-10 p-5">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-52 "
                    />
                    <p className="absolute top-3 left-3 bg-red-600 px-3 py-1 rounded-md text-white text-[12px]">
                      -40%
                    </p>
                    <img
                      src={heart}
                      alt=""
                      className="absolute top-4 right-0"
                    />
                    <img
                      src={View}
                      alt=""
                      className="absolute top-12 right-0"
                    />
                    {/* Hover Button */}
                    <button
                      onClick={() => handleAddToCart(card)}
                      className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-black text-white w-full py-2 px-4 rounded-br-[4px] rounded-bl-[4px] opacity-0 group-hover:opacity-100 transition duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>

                  <div className="bg-white flex flex-col space-y-2 text-left h-[130px] overflow-hidden">
                    <h1 className="font-[700] text-[16px] truncate">
                      {card.title}
                    </h1>
                    <div className="flex items-center space-x-3">
                      <h1 className="font-[500] text-red-600 text-[16px]">
                        ${card.price.toFixed() - 5}
                      </h1>
                      <h1 className="font-[500] text-slate-500 text-[16px] line-through">
                        ${card.price.toFixed()}
                      </h1>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Stack spacing={1}>
                        <Rating
                          name="size-small"
                          defaultValue={card.rating.rate}
                          size="small"
                        />
                      </Stack>
                      <h1 className="font-[500] text-slate-500 text-[16px]">
                        ({card.rating.count})
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!loading && !err && cards.length === 0 && <p>No data available...</p>}
    </>
  );
};

export default CardSlider;
