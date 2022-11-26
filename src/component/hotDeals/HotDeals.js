import React from "react";
import useData from "../../hooks/useData";
import ProductCard from "../banner/ProductCard";

const HotDeals = () => {
  const [data, loading] = useData();
  if (loading) {
    return <h2>Loading....</h2>;
  }
  return (
    <div className="container mx-auto py-7">
      <h2 className="font-bold ">Today's hot deals</h2>
      <hr className="dotted" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 pt-4">
        {data.slice(6, 11).map((item, index) => (
          <ProductCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default HotDeals;
