import { Card } from "react-bootstrap";
import styled from "styled-components";

const CardImage = styled(Card.Img)`
  height: 22rem;
  object-fit: cover;
`;

const CardBody = styled(Card.Body)`
  border-radius: 0px 0px 5px 5px;
  background: ${({ theme }) => theme.palette.secondary};
`;

const GoButton = styled.button`
  background: ${({ theme }) => theme.palette.primary};
`;

export { CardImage, CardBody, GoButton };
