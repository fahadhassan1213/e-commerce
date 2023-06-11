import React from "react";
import { Card, Stack } from "react-bootstrap";
import { CardBody, CardImage } from "./TopItemsCard.styled";
import { Typography } from "../../Shared/UI/Typography";

const TopItemsCard = () => {
  return (
    <Card className="border-0 px-2">
      <CardImage variant="top" src="https://picsum.photos/200/300" />
      <CardBody className=" px-4 d-flex flex-column align-items-center">
        <Card.Title className="mt-2">
          <Typography color="black" fs="fs4">
            Category Dress
          </Typography>
        </Card.Title>
        <Typography color="grey" fs="fs2">
          Category Dress
        </Typography>
        <Stack
          direction="horizontal"
          gap={2}
          className="justify-content-center align-items-center mt-2"
        >
          <Typography color="primary" fs="fs2">
            $384
          </Typography>
          <Typography color="grey" fs="fs2">
            $454
          </Typography>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default TopItemsCard;
