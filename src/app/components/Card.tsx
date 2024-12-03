"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
} from "@nextui-org/react";

interface cardProps {
  name: string;
  description?: string;
  price: number;
  //   stock: number;
  image: string;
}

const CardProduct = ({ name, price, description, image }: cardProps) => {
  return (
    <Card className="py-4 max-w-[400px]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{price}</p>
        <small className="text-default-500">{description}</small>
        <h4 className="font-bold text-large">{name}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={image}
          width={270}
          height={270}
        />
      </CardBody>
      <CardFooter>
        <Button className="w-full" color="primary">
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardProduct;
