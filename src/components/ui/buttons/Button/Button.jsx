import React, { useState } from "react";
import { colors } from "#common/common.style";
import { RoundButton } from "./Button.style";

function Button({ children, mainFunction }) {
  let [isClicked, setIsClicked] = useState(false);

  return (
    <RoundButton
      disabled={isClicked}
      $clicked={isClicked ? "true" : null}
      onClick={() => setIsClicked(true)}
      onTransitionEnd={(e) => {
        setIsClicked(false);
        if (isClicked) {
          mainFunction()
        }
      }}
      $normalcolor={colors.grey[1]}
    >
      {children}
    </RoundButton>
  );
}

export default Button;
