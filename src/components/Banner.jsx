import React from "react";

const Banner = () => {
  return (
    <div className="relative">
      <div className="w-full h-screen">
        <img
          className=" w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1581674211019-7f49074a94e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
      </div>
      <div className=" absolute w-full h-full top-0 left-0 bg-black/60 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl text-white font-extrabold lg:text-8xl md:text-7xl">
            Burger House
          </h1>
          <p className="text-sm mt-2 text-white font-medium  lg:text-2xl lg:mt-3 md:text-xl">
            Fueling Adventures, One Burger and Fry at a Time!
          </p>
          <button className="text-white text-lg font-semibold border p-1 mt-3 w-[160px] rounded-full lg:text-4xl lg:w-[200px] bg-transparent lg:mt-5 hover:bg-orange-900">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
