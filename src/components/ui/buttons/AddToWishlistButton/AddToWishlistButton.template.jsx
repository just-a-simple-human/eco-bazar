import React, { useState } from "react";
import Heart from "#svg/Heart";
import { transitionOnClick } from "#common/common.animation";
import { RoundButton } from "../Button.style";
import { colors } from "#common/common.style";

function AddToWishlistButton() {
  let [isClicked, setIsClicked] = useState(false);

  return (
    <RoundButton
      {...transitionOnClick(isClicked, setIsClicked, () => {})}
      $normalcolor={colors.brandingColors.white}
    >
      <Heart />
    </RoundButton>
  );
}

export default AddToWishlistButton;