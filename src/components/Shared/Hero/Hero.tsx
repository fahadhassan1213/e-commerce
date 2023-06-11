import React, { FC } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { DefaultButton } from "../UI/DefaultButton";
import { Typography } from "../../Shared/UI/Typography";
import { styled } from "styled-components";

interface Props {
  hideButton?: boolean;
  heading?: string;
}

const StyledContainer = styled(Container)`
  background: url("./images/hero-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Hero: FC<Props> = ({ hideButton, heading }) => {
  return (
    <StyledContainer className="py-5">
      <Row className="justify-content-sm-end pb-5">
        <Col md={8} lg={5} className="p-sm-5 px-4">
          <Stack>
            <Typography fs="fs8" lineHeight={1.3} className="mb-4" fw="bold">
              {heading}
            </Typography>
            <Typography
              color="darkGrey"
              fs="fs3"
              lineHeight={1.3}
              className="mb-5"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            {!hideButton && (
              <DefaultButton
                variant="primary"
                filled
                fs="fs3"
                padded="md"
                className="mb-3"
              >
                Find out More
              </DefaultButton>
            )}
          </Stack>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Hero;
