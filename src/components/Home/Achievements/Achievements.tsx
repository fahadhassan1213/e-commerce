import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { Typography } from "../../Shared/UI/Typography";
import { LogoImage } from "./Achievements.styled";
import { MultiCarousel } from "../MultiCarousel";
import { TestimonialCard } from "../TestimonialCard";

const Achievements = () => {
  return (
    <Container className="d-flex flex-column align-items-center pt-5">
      <Stack className="mb-4 align-items-center pt-md-5">
        <Typography
          fs="fs6"
          lineHeight={1.3}
          className="mb-4 w-md-50"
          fw="bold"
          textAlign="center"
        >
          Our Achievement
        </Typography>
      </Stack>
      <Row className="justify-content-between pb-5">
        <Col xs={6} md={4} lg={2}>
          <LogoImage src="/images/company-logo.svg" />
        </Col>
        <Col xs={6} md={4} lg={2}>
          <LogoImage src="/images/company-logo1.svg" />
        </Col>

        <Col xs={6} md={4} lg={2}>
          <LogoImage src="/images/company-logo2.svg" />
        </Col>

        <Col xs={6} md={4} lg={2}>
          <LogoImage src="/images/company-logo3.svg" />
        </Col>

        <Col xs={6} md={4} lg={2}>
          <LogoImage src="/images/company-logo4.svg" />
        </Col>

        <Col xs={6} md={4} lg={2}>
          <LogoImage src="/images/company-logo5.svg" />
        </Col>
      </Row>
      <Stack className="py-5">
        <MultiCarousel fullWidth={false}>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </MultiCarousel>
      </Stack>
    </Container>
  );
};

export default Achievements;
