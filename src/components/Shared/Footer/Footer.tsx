import React, { FC } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import {
  ImageContainer,
  FooterLogoText,
  SocialMediaBadge,
} from "./Footer.styled";
import { Typography } from "../UI/Typography";

const Footer: FC = () => {
  return (
    <Container className="bg-white py-5">
      <Row>
        <Col xs={8} className="p-0">
          <Stack direction="horizontal">
            <ImageContainer />
            <Stack>
              <Stack gap={4}>
                <FooterLogoText to="/" className="mt-2">
                  Dealerz.
                </FooterLogoText>
                <Typography fs="fs3" fw="medium">Privacy Policy</Typography>
                <Typography fs="fs3" fw="medium">Terms and Condition</Typography>
              </Stack>
              <Typography fs="fs3" fw="medium">@2020 TanahAir Studio. All rights reserved.</Typography>
            </Stack>
          </Stack>
        </Col>
        <Col className="pt-4 d-flex justify-content-end">
          <Stack direction="horizontal" className="align-items-start" gap={4}>
            <SocialMediaBadge>Yt</SocialMediaBadge>
            <SocialMediaBadge>Fb</SocialMediaBadge>
            <SocialMediaBadge>Tw</SocialMediaBadge>
            <SocialMediaBadge>Ig</SocialMediaBadge>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
