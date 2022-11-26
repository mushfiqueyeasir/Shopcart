import React from "react";
import feature from "../../resource/Component1.png";
import useData from "../../hooks/useData";
import "./Banner.css";
import ProductCard from "./ProductCard";

const Banner = () => {
  const [data, loading] = useData();
  if (loading) {
    return <h2>Loading....</h2>;
  }

  return (
    <div className="py-7 px-2">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-3">
        <div>
          <h1 className="text-6xl lg:text-8xl">
            We picked some
            <span className="font-[900] text-[#FFAE5D]">cool things</span> for
            you
          </h1>
        </div>
        <div className="col-span-2 w-full pt-6 lg:py-0 px-2 lg:px-5">
          <h2 className="font-bold text-xl pb-3 ">hot deals for you</h2>
          <hr className="dotted" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2  pt-4">
            {data.slice(0, 6).map((item, index) => (
              <ProductCard key={index} data={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="py-7 flex justify-center">
        <img src={feature} alt="" />
      </div>
    </div>
  );
};

export default Banner;
