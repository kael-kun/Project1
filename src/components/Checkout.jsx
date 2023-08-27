import React from "react";
import { useState } from "react";
import {
  Card,
  Textarea,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Notif from "./Notif";

export const Checkout = ({ showCheckout, setShowCheckout }) => {
  const handleCloseCheckout = () => {
    setShowCheckout(false);
  };

  const [isFormOpen, setIsFormOpen] = useState(true);

  const [showNotif, setShowNotif] = useState(false);
  const handleNotif = async () => {
    const fullNameInput = document.getElementById("full-name");
    const addressInput = document.getElementById("address");
    const contactNumberInput = document.getElementById("contact-number");

    const fullName = fullNameInput.value;
    const address = addressInput.value;
    const contactNumber = contactNumberInput.value;

    if (
      fullName.trim() === "" ||
      address.trim() === "" ||
      contactNumber.trim() === ""
    ) {
      alert("Please fill in all input fields.");
      return;
    }

    setShowNotif(true);

    // Wait for the notification display duration using async/await
    await new Promise((resolve) => setTimeout(resolve, 800));

    setShowNotif(false);
    setIsFormOpen(false); // Close the form after showing notification

    // Reset input fields
    fullNameInput.value = "";
    addressInput.value = "";
    contactNumberInput.value = "";
  };

  return (
    <div className="bg-black/70 fixed top-0 left-0 w-full h-screen">
      {showNotif && <Notif />}
      <div className="container p-4 mx-auto h-screen flex items-center justify-center ">
        <Card className=" bg-white p-4" shadow={false}>
          <Typography variant="h4" className="text-center text-black/90">
            Check Out Your Order
          </Typography>

          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-2">
              <Input size="lg" label="Full Name" id="full-name" />
              <Textarea label="Address" id="address" />
              <Input size="lg" label="Contact Number" id="contact-number" />
            </div>

            <div className="w-full text-center">
              <Typography
                variant="small"
                className="font-normal text-orange-900 text-base">
                Cash On Delivery Only
              </Typography>
            </div>

            <Button
              onClick={handleNotif}
              className="mt-6 mb-[5px] bg-deep-orange-900"
              fullWidth>
              Check Out ORDER
            </Button>
            <Button
              onClick={handleCloseCheckout}
              className=" bg-deep-orange-900"
              fullWidth>
              Cancel
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};
export default Checkout;
