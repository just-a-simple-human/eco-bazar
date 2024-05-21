import React, { useState } from "react";
import { colors } from "#common/common.style";
import Eye from "#svg/Eye";
import { transitionOnClick } from "#common/common.animation";
import { RoundButton } from "../Button.style";

function QuickViewButton() {
  let [isClicked, setIsClicked] = useState(false);

  return (
    <RoundButton
      {...transitionOnClick(isClicked, setIsClicked, () => {
        
      })}
      $normalcolor={colors.brandingColors.white}
    >
      <Eye />
    </RoundButton>
  );
}

export default QuickViewButton;
