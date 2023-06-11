import React from "react";
import styled from "styled-components";
import {
  FontSize,
  FontWeight,
  Palette,
  Spacing,
  Width,
} from "../../../../theme/theme";

interface ButtonProps {
  className?: string;
  variant?: keyof Palette;
  size?: keyof Width;
  fs?: keyof FontSize;
  fw?: keyof FontWeight;
  padded?: keyof Spacing;
  filled?: boolean;
  onClick?: () => void;
  children: string;
}

const ButtonWrapper = styled.button<ButtonProps>`
  padding: ${({ theme, padded }) =>
    padded ? theme.spacing[padded] : theme.spacing.sm};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.sm};
  background-color: ${({ filled, variant, theme }) =>
    filled
      ? variant
        ? theme.palette[variant]
        : theme.palette.primary
      : theme.palette.default};
  color: ${({ filled, theme }) =>
    filled ? theme.palette.default : theme.palette.primary};
  font-size: ${({ fs, theme }) =>
    fs ? theme.typography.fontSize[fs] : "inherit"};
  font-weight: ${({ fw, theme }) =>
    fw ? theme.typography.fontWeight[fw] : theme.typography.fontWeight.regular};
  width: ${({ size, theme }) =>
    size ? theme.sizes.width[size] : "fit-content"};
  border: ${({ filled, theme }) =>
    filled ? "none" : `1px solid ${theme.palette.primary}`};
  cursor: pointer;
`;

const DefaultButton: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  fs,
  fw,
  padded,
  filled = false,
  onClick,
  children,
}) => {
  return (
    <ButtonWrapper
      className={className}
      variant={variant}
      size={size}
      padded={padded}
      filled={filled}
      onClick={onClick}
      fs={fs}
      fw={fw}
    >
      {children}
    </ButtonWrapper>
  );
};

export default DefaultButton;
