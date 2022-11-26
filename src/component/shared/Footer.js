import React from "react";

const Footer = () => {
  return (
    <div className="py-10 bg-[#404040]">
      <div className="flex justify-around">
        <div>
          <p className="cursor-pointer normal-case text-2xl font-base text-white">
            <span className="font-[900]">shop</span>cart
          </p>
        </div>
        <div className="flex gap-4 cursor-pointer">
          <p className="font-base text-white">About</p>
          <p className="font-base text-white">Contact</p>
          <p className="font-base text-white">Help</p>
        </div>
        <div>
          <p className="cursor-pointer normal-case font-base text-white">
            English
            <span className="pl-2">
              <i class="fa-solid fa-caret-down"></i>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
