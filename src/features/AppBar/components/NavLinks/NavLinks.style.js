import styled from "styled-components";
import { colors } from "#common/common.style";
import { NavLink } from "react-router-dom";

export const StyledNavLinks = styled.nav`
  display: flex;
  gap: 32px;

  background: transparent;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 14px;
  font-family: "Poppins Medium";
  text-decoration: none;
  color: ${(props) =>
    props.$islinkactive ? colors.brandingColors.white : colors.grey[4]};
`;