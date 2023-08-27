import React from "react";
import { BsFillBagCheckFill } from "react-icons/bs";
const Confirmation = () => {
  return (
    <div className="w-full h-full bg-transparent  fixed top-0 left 0  z-40 flex  justify-center">
      <div className="w-[240px] lg:h-[120px] lg:w-[300px] h-[100px] mt-[100px] py-7 bg-white shadow-lg p-3 rounded-md flex items-center justify-center flex-col">
        <h1 className="text-center lg:text-2xl text-lg">
          Product Added To Cart
        </h1>
        <div className=" text-green-600 font-semibold">
          <BsFillBagCheckFill size={50} />
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
