import React from "react";
import { Card, Stack } from "react-bootstrap";
import { Typography } from "../../Shared/UI/Typography";
import styled from "styled-components";

const CardImage = styled(Card.Img)`
  height: 22rem;
  object-fit: cover;
`;

const ArticleInsightsCard = () => {
  return (
    <Card className="border-0 bg-transparent">
      <CardImage variant="top" src="https://picsum.photos/200/300" />
      <Card.Body className="pb-5 px-4">
        <Card.Title className="mt-2 mb-3">
          <Typography color="black" fs="fs4">
            Best Summer Outfit Style
          </Typography>
        </Card.Title>
        <Stack className="mb-2">
          <Typography color="black" fs="fs3">
            14 Feb Livina Style
          </Typography>
        </Stack>
        <Typography color="grey" fs="fs3">
          Lorem Ipsum has been the industry standard dummy text ever since the
          1500s, when an unknown printer took a galley. Lorem Ipsum has been the
          industry standard dummy text ever since the 1500s.
        </Typography>
        <Stack className="mt-3">
          <Typography color="primary" fs="fs3">
            Explore More
          </Typography>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default ArticleInsightsCard;
