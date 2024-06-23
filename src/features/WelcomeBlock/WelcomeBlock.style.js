import styled from "styled-components";
import {
  Body,
  StyledImg,
  Typography,
  colors,
} from "#common/common.style";
import { appearance, fall } from "#common/common.animation";
import { Link } from "react-router-dom";

export const WelcomeBlockCotainer = styled.section`
  width: 1520px;
  height: 804px;
  margin-top: 24px;
  margin-bottom: 64px;

  border-radius: 8px;
  background-color: ${colors.grey[0]};
  position: relative;

  & * {
    animation: ${appearance} 0.5s;
  }

  & ${Body.Small}:first-child {
    animation: ${fall("Y", -60.3)} 0.5s;
  }
`;

export const WelcomeBlockHeading = styled.div`
  width: 596px;
  height: 194px;

  display: flex;
  flex-flow: column nowrap;
  gap: 8px;
`;

export const WelcomeBlockContent = styled.div`
  width: 596px;
  height: 376px;
  margin-left: 100px;
  margin-top: 182px;
`;

export const WelcomeBlockOffer = styled.div`
  width: 363px;
  height: 71px;
  margin-top: 28px;

  display: flex;
  flex-flow: column nowrap;
  gap: 12px;
`;

export const StyledWelcomeBlockImg = styled(StyledImg)`
  position: absolute;
  right: 52.41px;
  top: 118px;
`;

export const ShopNowButton = styled(Link)`
  width: 191px;
  min-height: 51px;
  margin-top: 32px;
  border-radius: 53px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  ${Typography}
  font-family: "Poppins SemiBold";
  font-size: 16px;

  color: ${colors.brandingColors.white};
  background-color: ${colors.brandingColors.primary};
  transition: all 0.5s;

  & path {
    stroke: ${colors.brandingColors.white};
  }

  &:hover {
    background-color: ${colors.brandingColors.hardPrimary};
  }
`;