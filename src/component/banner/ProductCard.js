import React from "react";

const ProductCard = ({ data }) => {
  const { price, discount, name, picture } = data;
  return (
    <div className="">
      <figure className="flex justify-center">
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="font-semibold">{name}</h2>
        <div className="flex justify-between">
          <p className="">₹{price}</p>
          <p className="text-[#FF3232]">-{discount}% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
