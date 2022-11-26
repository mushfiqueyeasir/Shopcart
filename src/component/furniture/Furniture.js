import React from "react";
import furniture from "../../resource/Rectangle3.png";
import useData from "../../hooks/useData";
import ProductCard from "../banner/ProductCard";

const Furniture = () => {
  const [data, loading] = useData();
  if (loading) {
    return <h2>Loading....</h2>;
  }
  return (
    <div className="container mx-auto py-7">
      <div className="py-7 flex justify-center">
        <img src={furniture} alt="" />
      </div>
      <h2 className="font-bold ">Deals on furniture</h2>
      <hr className="dotted" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 pt-4">
        {data.slice(11, 16).map((item, index) => (
          <ProductCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Furniture;
