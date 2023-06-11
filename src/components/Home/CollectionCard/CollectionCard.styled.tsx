import { Card } from "react-bootstrap";
import styled from "styled-components";

const CardImage = styled(Card.Img)`
  height: 22rem;
  object-fit: cover;
`;

const GoButton = styled.button`
  background: ${({ theme }) => theme.palette.primary};
`;

export { CardImage, GoButton };
