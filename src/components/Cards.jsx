import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
const Cards = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 lg:grid-cols-3 gap-3 mt-10 mb-10">
      <Card className="mt-6 w-full h-[200px] lg:h-[350px]">
        <CardHeader color="blue-gray" className="relative h-full">
          <img
            className="h-full w-full object-cover hover:scale-105 duration-300"
            src="https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="card-image"
          />
        </CardHeader>
        <CardFooter className="pt-0 mt-4">
          <Button className=" bg-deep-orange-400">Order Now</Button>
        </CardFooter>
      </Card>
      <Card className="mt-6 w-full h-[200px] lg:h-[350px]">
        <CardHeader color="blue-gray" className="relative h-full">
          <img
            className="h-full w-full object-cover hover:scale-105 duration-300"
            src="https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt="card-image"
          />
        </CardHeader>
        <CardFooter className="pt-0 mt-4">
          <Button className=" bg-deep-orange-400">Order Now</Button>
        </CardFooter>
      </Card>
      <Card className="mt-6 w-full  h-[200px] lg:h-[350px] col-span-2 md:col-span-1 lg:col-span-1">
        <CardHeader color="blue-gray" className="relative h-full">
          <img
            className="h-full w-full object-cover hover:scale-105 duration-300"
            src="https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
            alt="card-image"
          />
        </CardHeader>

        <CardFooter className="pt-0 mt-4">
          <Button className=" bg-deep-orange-400">Order Now</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cards;
