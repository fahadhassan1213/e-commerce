import { Link } from "react-router-dom";
import styled from "styled-components";

interface NavLinkProps {
  isActive: boolean;
}

const NavLink = styled(Link)<NavLinkProps>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.palette.primary : theme.palette.grey};
  font-weight: ${({ theme, isActive }) =>
  isActive ? theme.typography.fontWeight.medium : theme.typography.fontWeight.regular}
`;

export { NavLink };
