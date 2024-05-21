import styled from "styled-components";
import { Typography, colors } from "#common/common.style";

export const SubscriptionFormContainer = styled.form`
  width: 535px;
  height: 52px;
  border-radius: 52px;

  display: flex;
  align-items: center;

  background: ${colors.brandingColors.white};
  border: 1px solid ${colors.grey[1]};

  &:has(:is(input:hover, input:focus)) {
    border: 1px solid ${colors.brandingColors.primary};
  }
`;

export const EMailInput = styled.input`
  width: 325px;
  height: 24px;
  margin-inline: 24px;

  ${Typography}
  color: ${colors.grey[5]};
  font-size: 16px;

  &::placeholder {
    ${Typography}
    color: ${colors.grey[5]};
    font-size: 16px;
  }
`;

export const SubscriptionButton = styled.button`
  width: 162px;
  height: 52px;
  border-radius: 52px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${colors.brandingColors.primary};

  &:hover {
    background: ${colors.brandingColors.hardPrimary};
  }
`;