import React from "react";
import { Stack, Navbar, Container, Form, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faHeart, faUser } from "@fortawesome/free-regular-svg-icons";

import {
  NavBrand,
  NavPageLink,
  BottomNav,
  NavInput,
  CartItemCountLabel,
} from "./Headers.styled";
import {
  faCartShopping,
  faPhone,
  faSearch,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { Typography } from "../UI/Typography";

const Headers = () => {
  return (
    <>
      <Navbar className="py-3">
        <Container>
          <Navbar.Brand>
            <NavBrand to="/home">Dealerz.</NavBrand>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Stack direction="horizontal" gap={4}>
                <Stack direction="horizontal" gap={2}>
                  <FontAwesomeIcon icon={faPhone} size="sm" />
                  <Typography fs="fs3" color="black">
                    Call Center
                  </Typography>
                </Stack>
                <Stack direction="horizontal" gap={2}>
                  <FontAwesomeIcon icon={faTruck} size="sm" />
                  <Typography fs="fs3" color="black">
                    Shipping & Returns
                  </Typography>
                </Stack>
              </Stack>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <BottomNav expand="lg">
        <Container className="py-3">
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-sm-5 my-2 my-lg-0 d-flex d-sm-block flex-row py-4 py-sm-0 justify-content-between"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavPageLink  to="/">Home</NavPageLink>
              <NavPageLink  to="/shop">Shop</NavPageLink>
              <NavPageLink  to="#">About</NavPageLink>
              <NavPageLink  to="#">Blog</NavPageLink>
            </Nav>
            <Form className="d-sm-flex justify-content-between w-100">
              <Stack direction="horizontal">
                <NavInput
                  type="search"
                  placeholder="Search what you need"
                  className="me-2 border-0 px-3 py-2"
                  aria-label="Search"
                />
                <FontAwesomeIcon icon={faSearch} color="#9A9AB0" className="d-none d-sm-block"/>
              </Stack>
              <Stack direction="horizontal" gap={4} className="justify-content-between justify-content-sm-start">
                <Stack direction="horizontal">
                  <NavPageLink to="/">
                    <FontAwesomeIcon icon={faHeart} size="lg" />
                  </NavPageLink>
                </Stack>
                <Stack direction="horizontal">
                  <NavPageLink to="/">
                    <Stack direction="horizontal">
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        size="lg"
                        style={{ position: "relative" }}
                      />
                      <CartItemCountLabel>3</CartItemCountLabel>
                    </Stack>
                  </NavPageLink>
                </Stack>
                <Stack direction="horizontal">
                  <NavPageLink to="/">
                    <FontAwesomeIcon icon={faUser} size="lg" />
                  </NavPageLink>
                </Stack>
                <Stack direction="horizontal">
                  <NavPageLink to="/">
                    <FontAwesomeIcon icon={faBell} size="lg" />
                  </NavPageLink>
                </Stack>
              </Stack>
            </Form>
          </Navbar.Collapse>
        </Container>
      </BottomNav>
    </>
  );
};

export default Headers;
