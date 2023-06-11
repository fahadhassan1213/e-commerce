import React, { FC, ReactNode } from "react";

import "react-multi-carousel/lib/styles.css";
import { StyledCarousel } from "./MultiCarousel.styled";

export interface StyledCarouselProps {
  fullWidth?: boolean;
  children?: ReactNode[];
}

const MultiCarousel: FC<StyledCarouselProps> = ({ fullWidth, children }) => {
  return (
    <StyledCarousel
      fullWidth={fullWidth}
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={fullWidth}
      className={fullWidth ? "mx-0" : ""}
      containerClass="container"
      draggable
      focusOnSelect={false}
      infinite
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: fullWidth ? 3 : 1,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: fullWidth ? 2 : 1,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots
      slidesToSlide={1}
      swipeable
    >
      {children}
    </StyledCarousel>
  );
};

export default MultiCarousel;
