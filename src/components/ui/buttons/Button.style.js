import styled, { css } from "styled-components";
import { colors } from "#common/common.style";

export const RoundButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.normalColor};
  border: 1px solid ${colors.grey[0]};
  transition: background-color 0.5s, opacity 0.25s, transform 0.125s;
  ${props => props.$clicked && css`
    transform: scale(.75);
  `}

  &:hover {
    background-color: ${colors.brandingColors.primary};
    border: transparent;
  }

  &:hover path {
    stroke: ${props => props.$normalcolor};
  }
`;

export const StyledAddToCartButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.grey[1]};

  transition: transform 0.125s;
  transform: scale(1);
  ${props => props.$clicked && css`
    transform: scale(.75);
  `}

  &:hover {
    background-color: ${colors.brandingColors.primary};
  }

  &:hover path {
    stroke: ${colors.brandingColors.white};
  }
`;