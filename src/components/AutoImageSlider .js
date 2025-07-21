import React, { useState, useEffect } from "react";
import airpod from "../images/airpods_PN_640x290_EN.jpg";
import iphone14 from "../images/iphone14_PN_640x290_EN.jpg";

const AutoImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Images array
  const images = [
    airpod,
    iphone14,
    airpod,
    iphone14,
  ];

  // Auto-play slider logic using useEffect and setInterval
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  // Handle manual click for dot navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full m-auto">
      {/* Slider wrapper */}
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <img
                className="w-full object-cover "
                src={image}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots (pagination) */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-red-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default AutoImageSlider;
