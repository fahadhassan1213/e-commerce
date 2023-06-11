import { Form } from "react-bootstrap";
import styled from "styled-components";

const Paper = styled.div`
  background: ${(props) => props.theme.palette.light};
  padding: ${(props) => props.theme.spacing.xxl};
`;

const Heading = styled.div`
  color: ${(props) => props.theme.palette.black};
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};
  font-size: ${(props) => props.theme.typography.fontSize.fs6};
  line-height: 120%;
  letter-spacing: 0.005em;
  margin-bottom: ${(props) => props.theme.spacing.xl};
`;

const Typography = styled.div`
  color: ${(props) => props.theme.palette.grey};
  font-weight: ${(props) => props.theme.typography.fontWeight.regular};
  font-size: ${(props) => props.theme.typography.fontSize.fs3};
  line-height: 125%;
  text-align: center;
  letter-spacing: 0.005em;
  margin-bottom: ${(props) => props.theme.spacing.xl};
  width: 80%;
  margin: 0 auto ${(props) => props.theme.spacing.xl} auto;
`;

const LongInput = styled(Form.Control)`
  background: ${(props) => props.theme.palette.light};
  width: 100%;

  &::placeholder {
    color: ${(props) => props.theme.palette.grey};
    font-weight: ${(props) => props.theme.typography.fontWeight.regular};
    font-size: ${(props) => props.theme.typography.fontSize.fs3};
  }

  transform: translate(20px);


  & ~ svg {
    transform: translate(-50px);
  }
`;

const ContentContainer = styled.div`
  width: 50%;
  text-align: center;


  @media (max-width: 568px) {
    width: 90%;
  }
`;

const InputIconContainer = styled.div`
  background: ${(props) => props.theme.palette.primary};
  transform: translate(-20px);
  z-index: 1;
`;

export {
  Paper,
  Heading,
  Typography,
  LongInput,
  ContentContainer,
  InputIconContainer,
};
