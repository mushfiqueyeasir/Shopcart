import React from "react";

const NavBar = () => {
  const menu = [
    "Fresh",
    "Today's Deals",
    "Mobiles",
    "Gift Cards",
    "Women Clothing",
    "Men Clothing",
    " Kids Clothing",
    "Health",
    "Pet corner",
    "Books",
    "Beauty",
    "Kitchen",
    "Bed Room",
    "Spot",
    "Bags",
  ];
  return (
    <div className=" container mx-auto py-3">
      <div className="flex justify-between pb-3">
        <p className="cursor-pointer normal-case text-2xl font-base">
          <span className="font-[900]">shop</span>cart
        </p>
        <button className="cursor-pointer normal-case text-xl font-base">
          <span className="font-[900] pr-2">
            <i className="fa-solid fa-circle-user" />
          </span>
          Sign In
        </button>
      </div>
      <hr className="border-[1px] border-[#808080]" />

      <div className="hidden lg:flex justify-between pt-4">
        <button className="p-3 rounded-2xl bg-[#FFAE5D] border-[#FFAE5D] font-semibold">
          <span>
            <i className="fa-solid fa-location-dot pr-2" />
          </span>
          Dhaka, 1212
        </button>

        <div className="flex border-[1px] px-3 rounded-2xl border-[#808080] ">
          <input type="text" placeholder="Search" className="w-full max-w-xs" />
          <button className="">
            <i className="fa-solid fa-magnifying-glass text-[#88080]"></i>
          </button>
        </div>
      </div>

      <div className="flex justify-around gap-2 pt-5">
        {menu.map((item, index) => (
          <button className="text-[#606060] font-medium">{item}</button>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
