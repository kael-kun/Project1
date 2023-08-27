import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import Checkout from "./Checkout";
import { useState } from "react";
import {
  Card,
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

const Cart = ({
  items,
  quantities,
  setCartItems,
  cartItemCount,
  setCartItemCount,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleDelete = (index) => {
    // Update the cartItemCount when an item is deleted
    setCartItemCount((prevCount) => Math.max(prevCount - 1, 0));

    // Other delete logic
    const updatedItems = items.filter((_, i) => i !== index);
    setCartItems(updatedItems);
  };

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  console.log("hello" + setCartItems);
  const totalCost = items.reduce((total, cartItem) => {
    if (quantities[cartItem.id]) {
      return total + cartItem.price * quantities[cartItem.id];
    }
    return total;
  }, 0);

  const [showCheckout, setShowCheckout] = useState(false);

  const handleCheckoutClick = () => {
    setShowCheckout(true);
  };
  const handleCloseCheckout = () => {
    setShowCheckout(false);
  };

  return (
    <div>
      <React.Fragment>
        <Button
          onClick={openDrawer}
          className="flex items-center justify-center gap-2 bg-deep-orange-900">
          Cart
          <div className="text-[20px] relative">
            <BsFillCartFill />
            <div className="absolute top-0 right-0 bg-transparent m-[-10px]">
              <p className="text-[18px]">
                {cartItemCount > 0 && (
                  <span className="cart-badge">{cartItemCount}</span>
                )}
              </p>
            </div>
          </div>
        </Button>

        <Drawer
          size={500}
          open={open}
          onClose={closeDrawer}
          className="p-4 h-screen w-[300px] lg:w-[400px] md:w-[400px]">
          <div className="mb-[10px] h-[5%] flex items-center justify-between">
            <Typography
              variant="h5"
              color="blue-gray"
              className="flex items-center gap-3 font-semibold">
              Your Cart <BsFillCartFill />
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <div className="mb-2 h-[75vh] lg:h-[80vh] md:h-[80vh]  sm:h-[80vh] overflow-y-scroll">
            {items &&
              items.map((cartItem, index) => (
                <Card
                  key={`${cartItem.id}-${index}`}
                  className=" flex justify-between w-[95%] lg:w-[90%] lg:h-[140px] border-t-4 h-[103px] md:h-[120px]  mb-3 relative">
                  <div className="">
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-3xl absolute bottom-[4px] right-[4px] text-red-600 cursor-pointer">
                      <MdDelete />
                    </button>
                  </div>
                  <div className="flex items-center h-full">
                    <div className="h-full">
                      <img
                        src={cartItem.images}
                        alt=""
                        className="w-[95px] md:w-[110px] h-full rounded-lg object-cover"
                      />
                    </div>

                    <div className="p-2 flex flex-col ">
                      <p className="text-black text-[13px] lg:text-base md:text-lg">
                        {cartItem.name}
                      </p>
                      <p className="text-black text-[13px] lg:text-base md:text-lg">
                        {" "}
                        Price: ${cartItem.price.toFixed(2)}
                      </p>{" "}
                      {quantities[cartItem.id] && (
                        <p className="text-black text-[13px] lg:text-base md:text-lg">
                          Quantity: {quantities[cartItem.id]}
                        </p>
                      )}
                      {quantities[cartItem.id] && (
                        <p className="text-black text-[15px] lg:text-base md:text-lg">
                          Total: $
                          {(cartItem.price * quantities[cartItem.id]).toFixed(
                            2
                          )}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
          </div>
          <div className="lg:text-3xl text-2xl font-semibold">
            Total Order: ${totalCost.toFixed(2)}
          </div>
          <div className="mt-3">
            <Button onClick={handleCheckoutClick} size="sm">
              CHECK OUT
            </Button>
            {showCheckout && (
              <Checkout
                showCheckout={showCheckout}
                setShowCheckout={setShowCheckout}
              />
            )}
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default Cart;
