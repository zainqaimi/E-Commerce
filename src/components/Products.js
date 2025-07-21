import { Rating, Skeleton, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
const baseURL = "https://fakestoreapi.com/products";
function Products() {
  const getData = async () => {
    const res = await axios.get(baseURL);
    const data = await res.data;
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["Products"],
    queryFn: getData,
  });

  if (isLoading) return <Skeleton/>;
  if (error) return <p>Oop's Some thing went wrong check your internet...{error.message}</p>;
  return (
    <>
  
      <h1 className="text-center text-3xl font-bold py-3 underline">Our Product's</h1>
      <div className="container px-5 py-5 flex flex-wrap items-center justify-between m-auto">
        {data.map((card) => (
          <div
            key={card.id}
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
                  src="/images/heart small.png"
                  alt=""
                  className="absolute top-4 right-0"
                />
                <img
                  src="./images/Quick View.png"
                  alt=""
                  className="absolute top-12 right-0"
                />
                {/* Hover Button */}
                <button
                 
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
    </>
  );
}

export default Products;
