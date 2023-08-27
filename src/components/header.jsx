import { BsFillCartFill } from "react-icons/bs";
import Cart from "./Cart";
import React, { useState, useEffect } from "react";
const Header = ({
  cartItems,
  quantities,
  setCartItems,
  setQuantities,
  cartItemCount,
  setCartItemCount,
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [bgColor, setBgColor] = useState("transparent");

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    setScrollPosition(currentPosition);

    if (currentPosition >= 100) {
      setBgColor("rgba(0, 0, 0, 0.603)");
    } else {
      setBgColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const [isCartOpen, setIsCartOpen] = useState(false); // State to track whether the cart is open or not

  // const handleCartToggle = () => {
  //   setIsCartOpen(!isCartOpen); // Toggle the cart state
  // };
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div
        className="w-full h-[80px] flex items-center relative"
        style={{ backgroundColor: bgColor }}>
        <div className="container p-4 mx-auto flex items-center justify-between">
          <div className="">
            <h1 className="text-white font">B-House</h1>
          </div>
          <div>
            <Cart
              items={cartItems}
              quantities={quantities}
              setCartItems={setCartItems}
              cartItemCount={cartItemCount}
              setCartItemCount={setCartItemCount}
            />
          </div>
        </div>

        {/* {isCartOpen && (
          <div className="absolute w-[70%] md:w-[20%] h-screen top-0 left-0 bg-black/90 z-20 transition duration-300">
            <div className="text-white text-1xl w-full h-full flex flex-col gap-4 px-2 py-6 ">
              <h1 className="text-1xl text-white font-semibold">Cart</h1>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Header;
