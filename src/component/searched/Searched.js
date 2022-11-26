import React from "react";
import one from "../../resource/searched/one.png";
import two from "../../resource/searched/two.png";
import three from "../../resource/searched/three.png";
import four from "../../resource/searched/four.png";
import five from "../../resource/searched/five.png";

const Searched = () => {
  const data = [one, two, three, four, five];
  return (
    <div className="container mx-auto py-7 px-2">
      <h2 className="font-bold text-2lx pb-3 ">Your searched items</h2>
      <hr className="dotted" />

      <div className="grid grid-cols-2 lg:grid-cols-5 justify-items-center gap-2 pt-4">
        {data.map((item, index) => (
          <img src={item} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Searched;
