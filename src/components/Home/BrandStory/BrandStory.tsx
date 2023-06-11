import React from "react";
import { Typography } from "../../Shared/UI/Typography";
import { Col, Container, Row, Stack } from "react-bootstrap";

const BrandStory = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col md={6} className="bg-secondary rounded"></Col>
        <Col md={6} className="p-sm-5">
          <Stack>
            <Typography fs="fs6" lineHeight={1.3} className="mb-4 w-sm-50" fw="bold">
              Story about Our Brand
            </Typography>
            <Typography
              color="darkGrey"
              fs="fs3"
              lineHeight={1.3}
              className="mb-5 w-sm-75"
            >
              Develop a website by finding a product identity that has value and
              branding to become a characteristic of a company. We will also
              facilitate the business marketing of these products with our SEO
              experts so that they become a ready-to-use website and help sell a
              product from the company Develop a website by finding a product
              identity that has value and branding to become a characteristic of
              a company. We will also facilitate the business marketing of these
              products with our SEO experts so that they become a ready-to-use
              website and help sell a product from the company
            </Typography>
            <Typography fs="fs3" lineHeight={1.3} color="primary" className="mb-4" fw="bold">
              Read full story
            </Typography>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default BrandStory;
