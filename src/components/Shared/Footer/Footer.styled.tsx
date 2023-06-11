import { Link } from "react-router-dom";
import { styled } from "styled-components";

const ImageContainer = styled.div`
  width: 22.5rem;
  height: 22.5rem;
  background: ${(props) => props.theme.palette.secondary};
  margin-right: ${(props) => props.theme.spacing.xxl}
`;

const FooterLogoText = styled(Link)`
  color: ${(props) => props.theme.palette.primary};
  font-weight: ${(props) => props.theme.typography.fontWeight.medium};
  font-size: ${(props) => props.theme.typography.fontSize.fs7};
  line-height: 120%;
  letter-spacing: 0.005em;
  text-decoration: none;
`;

const SocialMediaBadge = styled.div`
  background: ${(props) => props.theme.palette.primary};
  color: ${(props) => props.theme.palette.default};
  height: 2.2rem;
  width: 2.2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
    ImageContainer,
    FooterLogoText,
    SocialMediaBadge,
}