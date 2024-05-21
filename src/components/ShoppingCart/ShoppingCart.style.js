import styled from "styled-components";
import { Typography, colors } from "#common/common.style";
import { closing, openning } from "./ShoppingCart.animation";
import { Link } from "react-router-dom";

export const StyledShoppingCart = styled.dialog`
  &[open] {
    min-height: 100vh;
    overflow-x: hidden;

    position: fixed;
    left: auto;
    top: 0;
    z-index: 1;

    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

    animation-name: ${(props) => (props.$isclosing ? closing : openning)};
    animation-duration: 0.5s;
    animation-fill-mode: forwards;

    &::backdrop {
      background: rgba(0, 0, 0, 0.7);
    }
  }
`;

export const ShoppingCartContainer = styled.div`
  min-width: 456px;
  min-height: inherit;
  padding: 40px;

  display: flex;
  flex-direction: column;

  background-color: ${colors.brandingColors.white};
`;

export const ShoppingCartHeadingContainer = styled.div`
  width: 100%;
  height: 45px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = styled.button`
  width: 45px;
  height: 45px;

  background-color: transparent;
  cursor: pointer;

  & * {
    transition: all 0.5s;
  }

  &:hover {
    & circle {
      fill: ${colors.brandingColors.primary};
    }

    & path {
      stroke: ${colors.brandingColors.white};
    }
  }
`;

export const ShoppingCartProducts = styled.div`
  width: 100%;
  margin-top: 12px;

  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 12px;

  background-color: transparent;
`;

export const ShoppingCartSubtotal = styled.div`
  width: 100%;
  height: 72px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ShoppingCartButton = styled(Link)`
  width: 376px;
  height: 51px;
  border-radius: 43px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${Typography}
  font-size: 16px;

  transition: all 0.5s;

  &:not(:nth-of-type(1)) {
    margin-top: 12px;
  }

  background-color: ${colors.brandingColors.primary};
  color: ${colors.brandingColors.white};

  &:hover {
    background-color: ${colors.brandingColors.hardPrimary};
  }

  &:last-child {
    background-color: rgba(86, 172, 89, 0.1);
    color: ${colors.brandingColors.primary};

    &:hover {
      background-color: rgba(44, 116, 47, 0.2);
      color: ${colors.brandingColors.hardPrimary};
    }
  }
`;