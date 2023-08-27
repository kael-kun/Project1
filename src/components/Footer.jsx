import React from "react";
import { Typography } from "@material-tailwind/react";
const Footer = () => {
  return (
    <div>
      {" "}
      <footer className="w-full bg-black text-white p-8">
        <div className="flex container mx-auto flex-row flex-wrap items-center justify-center gap-y-6 gap-x-10 bg-transparent text-white text-center md:justify-between ">
          <div className="font text-blue-gray-500">B-HOUSE</div>
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-white focus:text-white">
                About Us
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-white focus:text-white">
                License
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-white focus:text-white">
                Contribute
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-white focus:text-white">
                Contact Us
              </Typography>
            </li>
          </ul>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <Typography color="blue-gray" className="text-center font-normal">
          &copy; 2023 Patrick Bongalos
        </Typography>
      </footer>
    </div>
  );
};

export default Footer;
