import { Form, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const NavBrand = styled(Link)`
  color: ${(props) => props.theme.palette.primary};
  font-weight: ${(props) => props.theme.typography.fontWeight.medium};
  font-size: ${(props) => props.theme.typography.fontSize.fs5};
  line-height: 120%;
  letter-spacing: 0.005em;
  text-decoration: none;
`;

const NavPageLink = styled(Link)`
  font-weight: ${(props) => props.theme.typography.fontWeight.regular};
  font-size: ${(props) => props.theme.typography.fontSize.fs3};
  line-height: 120%;
  letter-spacing: 0.005em;
  color: ${(props) => props.theme.palette.black};
  text-decoration: none;
  margin-right: ${(props) => props.theme.spacing.xl};
`;

const BottomNav = styled(Navbar)`
  background: ${(props) => props.theme.palette.light};
`;

const NavInput = styled(Form.Control)`
  background: ${(props) => props.theme.palette.default};
  border-radius: 0;
  outline: none;
  shadow: none;
  width: 30rem;


  &::placeholder {
    color: ${(props) => props.theme.palette.grey};
    font-weight: ${(props) => props.theme.typography.fontWeight.regular};
    font-size: ${(props) => props.theme.typography.fontSize.fs3};
  }

  & ~ svg {
    transform: translate(-50px);
  }

  @media (max-width: 568px) {
    width: 100%;
    display: block;
    margin-bottom: 30px;
  }
`;

const CartItemCountLabel = styled.div`
  background: ${(props) => props.theme.palette.primary};
  color: ${(props) => props.theme.palette.default};
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: translate(15px, -15px);
`;

export {
  NavBrand,
  NavPageLink,
  BottomNav,
  NavInput,
  CartItemCountLabel,
};
