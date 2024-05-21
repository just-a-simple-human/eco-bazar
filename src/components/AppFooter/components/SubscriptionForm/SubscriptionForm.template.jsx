import React from "react";
import { Body, colors } from "#common/common.style";
import { EMailInput, SubscriptionButton, SubscriptionFormContainer } from "./SubscriptionForm.style";

function SubscriptionForm() {
  return (
    <SubscriptionFormContainer>
      <EMailInput
        type="email"
        id="subscription-input"
        placeholder="Your email address"
      />
      <SubscriptionButton
        type="submit"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <Body.Medium
          $textcolor={colors.brandingColors.white}
          $lineheight="20px"
          $semibold="true"
        >
          Subscribe
        </Body.Medium>
      </SubscriptionButton>
    </SubscriptionFormContainer>
  );
}

export default SubscriptionForm;
