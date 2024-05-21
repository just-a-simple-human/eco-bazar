import React from 'react'
import { Body, colors } from "#common/common.style";
import { ControllerButtonContainer } from './ControllerButton.style';

function ControllerButton({ buttonText, changer, activePage, children, disabled }) {
    return (
      <ControllerButtonContainer
        disabled={disabled}
        $isActive={activePage === +buttonText}
        style={{ pointerEvents: buttonText === "..." && "none" }}
        onClick={changer}
      >
        {children || <Body.Medium $textcolor={colors.grey[6]}>{buttonText}</Body.Medium>}
      </ControllerButtonContainer>
    );
  }

export default ControllerButton