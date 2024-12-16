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
          className="object-center rounded-xl border border-default-200 w-full"
          src={image}
          loading="lazy"
        />
      </CardBody>
      <CardFooter>
        <Button className="w-full" color="primary">
          Ver producto
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardProduct;
