import React from "react";
import iphone14 from "../../resource/review/iphone14.png";
import ipad from "../../resource/review/ipad.png";

const Review = () => {
  const data = [
    {
      image: ipad,
      name: "2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi, 128GB)",
      slogan: "you bought it at the best price",
      price: "₹99,900.00",
    },
    {
      image: iphone14,
      name: "iPhone 14 Pro Max with Apple M1 chip (6.7-inch/17.0 cm, 128GB)",
      slogan: "you bought it at the best price",
      price: "₹1,39,900.00",
    },
  ];

  let star = [];
  for (let i = 0; i < 5; i++) {
    star.push(<i class="fa-regular fa-star"></i>);
  }

  return (
    <div className="container mx-auto py-7">
      <h2 className="font-bold text-xl pb-3">Review your purchase</h2>
      <hr className="dotted" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-4">
        {data.map((item, index) => (
          <div className="rounded-2xl shadow-lg p-2 grid grid-cols-2 items-center">
            <div>
              <img src={item.image} alt="" />
            </div>
            <div className="px-6">
              <h2 className="text-2xl font-bold">{item.name}</h2>
              <h2 className="font-semibold pt-5">{item.slogan}</h2>
              <h2 className="font-bold text-xl">{item.price}</h2>

              <div className="pt-5 flex gap-3 text-2xl text-[#FFAE5D]">
                {star.map((item, index) => item)}
                <p className="text-sm pl-4">0 rating</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
