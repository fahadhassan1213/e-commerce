import React, { FC } from "react";
import { Card, Stack } from "react-bootstrap";
import { CardImage, GoButton } from "./CollectionCard.styled";
import { Typography } from "../../Shared/UI/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Product } from "../../../interfaces/product";

interface Props {
  data: Product;
}

const CollectionCard: FC<Props> = ({ data }) => {
  return (
    <Card className="border-0" style={{ height: "35rem" }}>
      <CardImage variant="top" src={data.image} />
      <Card.Body className="pb-5 px-4 d-flex flex-column justify-content-between align-items-start">
        <Stack>
          <Typography color="grey" fs="fs3" textTransform="capitalize">
            {data.category}
          </Typography>
          <Card.Title className="mt-2 mb-3">
            <Typography color="black" fs="fs4">
              {data.title}
            </Typography>
          </Card.Title>
        </Stack>
          <GoButton className="rounded-pill border-0">
            <FontAwesomeIcon icon={faArrowRight} color="white" />
          </GoButton>
      </Card.Body>
    </Card>
  );
};

export default CollectionCard;
