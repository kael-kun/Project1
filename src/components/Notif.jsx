import React from "react";
import { IoMdCloudDone } from "react-icons/io";

const Notif = () => {
  return (
    <div className="w-full h-full bg-transparent  fixed top-0 left 0   flex  justify-center">
      <div className="w-[240px] lg:h-[120px] lg:w-[300px] h-[100px] mt-[50px] py-7 bg-white shadow-lg p-3 rounded-md flex items-center justify-center flex-col">
        <h1 className="text-center font-semibold lg:text-2xl text-lg text-gray-800">
          Order Done
        </h1>
        <div className=" text-green-600 font-semibold">
          <IoMdCloudDone size={50} />
        </div>
      </div>
    </div>
  );
};

export default Notif;
