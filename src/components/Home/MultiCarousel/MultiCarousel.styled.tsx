import Carousel from "react-multi-carousel";
import { styled } from "styled-components";
import { StyledCarouselProps } from "./MultiCarousel";

const StyledCarousel = styled(Carousel)<StyledCarouselProps>`
  max-width: ${({ fullWidth }) => (fullWidth ? "100vw" : "1320px")};

  & > .react-multi-carousel-track {
    margin: 0 0 5rem 0;
  }
`;

export { StyledCarousel };
