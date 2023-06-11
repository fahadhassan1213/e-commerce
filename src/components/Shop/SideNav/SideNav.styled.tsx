import { Form } from "react-bootstrap";
import { styled } from "styled-components";

const NavInput = styled(Form.Control)`
  background: transparent;
  border-radius: ${({theme}) => theme.sizes.borderRadius.sm};
  outline: none;
  shadow: none;
  border: 1px solid;


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

export { NavInput };
