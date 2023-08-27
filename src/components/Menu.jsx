import React from "react";
import data from "./data";
import Cart from "./Cart";
import { useState } from "react";
import { PiHamburgerBold } from "react-icons/pi";
import { ImGlass } from "react-icons/im";
import { FaPizzaSlice } from "react-icons/fa";
import { GiFrenchFries } from "react-icons/gi";
import Confirmation from "./Confirmation";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Breadcrumbs } from "@material-tailwind/react";

const Menu = ({
  foods,
  setFoods,
  cartItems,
  setCartItems,
  quantities,
  setQuantities,
  cartItemCount,
  setCartItemCount,
}) => {
  const filterType = (category) => {
    const filteredFoods = data.filter((item) => item.category === category);
    setFoods(filteredFoods);
  };

  const addToCart = async (item) => {
    const newQuantity = quantities[item.id];

    if (newQuantity !== undefined && newQuantity !== "") {
      const newItem = { ...item, quantity: newQuantity };
      setCartItems((prevCartItems) => [...prevCartItems, newItem]);
      setShowConfirmation(true);

      // Wait for the confirmation display duration using async/await
      await new Promise((resolve) => setTimeout(resolve, 800));

      setShowConfirmation(false);

      // Update the cart item count
      setCartItemCount((prevCount) => prevCount + 1);
    } else {
      alert("Please input quantity.");
    }
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: newQuantity,
    }));
  };

  console.log(quantities);
  const [showConfirmation, setShowConfirmation] = useState(false);
  return (
    <div className="w-full lg:mb-[80px] lg:mt-[80px] relative">
      {showConfirmation && (
        <Confirmation onClose={() => setShowConfirmation(false)} />
      )}
      <div className="container mx-auto lg:mb-12">
        <h1 className="text-center font-semibold text-2xl text-deep-orange-900 md:text-3xl">
          Top Rated Menu Items
        </h1>
        <div className="mt-4">
          <h3 className="font-semibold text-l text-gray-700 mx-4 md:text-[20px]">
            Filter Type
          </h3>
          <div className="mt-2 flex items-center justify-center lg:justify-start md:justify-start mb-4">
            <Breadcrumbs className=" bg-blue-gray-50">
              <button
                onClick={() => setFoods(data)}
                className="flex items-center gap-0.5  text-black/70 hover:text-deep-orange-900 text-xs lg:text-lg md:text-[20px]">
                <PiHamburgerBold />
                <p>All</p>
              </button>
              <button
                onClick={() => filterType("Pizza")}
                className="flex items-center gap-1   text-black/70 hover:text-deep-orange-900 text-sm lg:text-lg md:text-[20px]">
                <FaPizzaSlice />
                <p>Pizza</p>
              </button>
              <button
                onClick={() => filterType("Burger")}
                className="flex items-center gap-1   text-black/70 hover:text-deep-orange-900 text-sm lg:text-lg md:text-[20px]">
                <PiHamburgerBold />
                <p>Burger</p>
              </button>
              <button
                onClick={() => filterType("Fries")}
                className="flex items-center gap-1   text-black/70 hover:text-deep-orange-900 text-sm lg:text-lg md:text-[20px]">
                <GiFrenchFries />
                <p>Fries</p>
              </button>
              <button
                onClick={() => filterType("Drinks")}
                className="flex items-center gap-1   text-black/70 hover:text-deep-orange-900 text-sm lg:text-lg md:text-[20px]">
                <ImGlass />
                <p>Drinks</p>
              </button>
            </Breadcrumbs>
          </div>
          <div className="container mx-auto gap-2 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
            {foods.map((item) => (
              <Card
                key={item.id}
                className="lg:w-full w-full h-[320px] lg:h-[400px]">
                <CardHeader shadow={false} floated={false} className="h-96">
                  <img
                    src={item.images}
                    alt="card-image"
                    className="h-full w-full object-cover hover:scale-105 duration-300"
                  />
                </CardHeader>
                <CardBody className="p-0.5 lg:p-4">
                  <div className="mb-2 flex items-center justify-between flex-col lg:flex-row lg:p-0.5">
                    <p className="font-semibold text-orange-900  md:text-[20px]">
                      {" "}
                      {item.name}
                    </p>
                  </div>
                  <div className="">
                    <Typography
                      color="blue-gray"
                      className="font-semibold text-blue-gray-700 ml-3 text-[14px] lg:ml-1 lg:text-[16px] md:text-[18px]">
                      Price: ${item.price.toFixed(2)}
                    </Typography>
                    <Typography
                      color="blue-gray"
                      className="font-semibold text-blue-gray-700 ml-3 text-[14px] lg:ml-1 lg:text-[16px] md:text-[18px]">
                      Quantity
                      <input
                        type="number"
                        min="1"
                        value={quantities[item.id] || ""}
                        onChange={(e) =>
                          handleQuantityChange(item.id, e.target.value)
                        }
                        className="quantity-input m-2 w-[50px] h-[30px] px-2 py-1 borderr rounded text-center"
                      />
                    </Typography>
                  </div>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button
                    onClick={() => addToCart(item)}
                    ripple={false}
                    fullWidth={true}
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
