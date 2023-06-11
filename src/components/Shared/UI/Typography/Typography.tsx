import React, { ReactNode } from "react";
import styled from "styled-components";
import {
  Spacing,
  FontSize,
  FontWeight,
  Palette,
} from "../../../../theme/theme";

type TypographyProps = {
  className?: string;
  children: ReactNode | string;
  color?: keyof Palette;
  fs?: keyof FontSize;
  fw?: keyof FontWeight;
  textAlign?: "left" | "center" | "right";
  textTransform?: "none" | "uppercase" | "lowercase" | "capitalize";
  lineHeight?: number;
  marginBottom?: keyof Spacing;
};

const TypographyWrapper = styled.span<TypographyProps>`
  display: block;
  color: ${({ color, theme }) => (color ? theme.palette[color] : "inherit")};
  font-size: ${({ fs, theme }) =>
    fs ? theme.typography.fontSize[fs] : "inherit"};
  font-weight: ${({ fw, theme }) =>
    fw ? theme.typography.fontWeight[fw] : "inherit"};
  text-align: ${({ textAlign }) => textAlign};
  text-transform: ${({ textTransform }) => textTransform};
  line-height: ${({ lineHeight }) => lineHeight};
  margin-bottom: ${({ marginBottom, theme }) =>
    marginBottom ? theme.spacing[marginBottom] : "inherit"};
`;

const Typography: React.FC<TypographyProps> = ({
  className,
  color,
  fs,
  fw,
  textAlign,
  textTransform = "none",
  lineHeight,
  marginBottom,
  children,
}) => {
  return (
    <TypographyWrapper
      className={className}
      color={color}
      fs={fs}
      fw={fw}
      textAlign={textAlign}
      textTransform={textTransform}
      lineHeight={lineHeight}
      marginBottom={marginBottom}
    >
      {children}
    </TypographyWrapper>
  );
};

export default Typography;
