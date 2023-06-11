import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";

import { Typography } from "../../Shared/UI/Typography";
import { styled } from "styled-components";

const ImageContainer = styled.div`
  width: 20.5rem;
  height: 16rem;
  background: ${(props) => props.theme.palette.secondary};
  margin-right: ${(props) => props.theme.spacing.xxl};
`;

const TestimonialCard = () => {
  return (
    <Container className="bg-white p-sm-5">
      <Row className="justify-content-sm-center">
        <Col lg={4} className="p-sm-4 d-block d-md-none d-lg-block">
          <ImageContainer />
        </Col>
        <Col md={8} lg={4} className="p-4">
          <Stack direction="horizontal">
            <Stack>
              <Stack gap={4}>
                <Typography fs="fs6" fw="medium" color="primary">
                  Good Seller!
                </Typography>
                <Typography fs="fs3" fw="regular" color="grey">
                  I am very happy with the services provided, it is very
                  helpful, starting from the insight that the company gave from
                  the start that I did not understand what it was so I got
                  knowledge and made my website look better
                </Typography>
                <Stack gap={2}>
                  <Typography fs="fs4" fw="medium">
                    Anna Saraspova
                  </Typography>
                  <Typography fs="fs3" fw="regular">
                    Your Beloved Buyer
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default TestimonialCard;
