import React from "react";
import { Card, Stack } from "react-bootstrap";
import { CardBody, CardImage } from "./ProductCard.styled";
import { Typography } from "../../Shared/UI/Typography";
import { Product } from "../../../interfaces/product";
import { FC } from "react";

interface Props {
  product: Product;
}

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Card className="border-0">
      <CardImage variant="top" src={product.image} />
      <CardBody className=" px-4 d-flex flex-column align-items-center ">
        <Card.Title className="mt-2">
          <Typography color="black" className="mb-0" fs="fs4">
            {product.title}
          </Typography>
        </Card.Title>
        <Stack
          direction="horizontal"
          gap={3}
          className="justify-content-center mb-3"
        >
          <img src="/images/star.svg" alt="star.img" />
          <img src="/images/star.svg" alt="star.img" />
          <img src="/images/star.svg" alt="star.img" />
          <img src="/images/star.svg" alt="star.img" />
          <img src="/images/star.svg" alt="star.img" />
        </Stack>
        <Typography color="grey" fs="fs2">
          {product.category}
        </Typography>
        <Stack
          direction="horizontal"
          gap={2}
          className="justify-content-center align-items-center mt-2"
        >
          <Typography color="primary" fs="fs2">
            {product.price}
          </Typography>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
