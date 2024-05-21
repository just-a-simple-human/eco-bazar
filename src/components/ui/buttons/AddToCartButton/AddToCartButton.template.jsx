import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { colors } from "#common/common.style";
import BagSvg from "#svg/BagSvg";
import { MainContext } from "#context";
import { transitionOnClick } from "#common/common.animation";
import { RoundButton } from "../Button.style";

export const StyledAddToCartButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.grey[1]};

  transition: background-color 0.5s, transform 0.125s;
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

function AddToCartButton({ product }) {
  let { cart } = useContext(MainContext);
  let [isClicked, setIsClicked] = useState(false);

  return (
    <RoundButton
      {...transitionOnClick(isClicked, setIsClicked, () =>
        cart.addToCart(product),
      )}
      $normalcolor={colors.grey[1]}
    >
      <BagSvg />
    </RoundButton>
  );
}

export default AddToCartButton;
