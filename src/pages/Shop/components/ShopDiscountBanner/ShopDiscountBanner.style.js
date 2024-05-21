import styled from "styled-components";
import BackgroungImg from "#images/DiscountBannarImg.png";
import { fall, appearance } from '#common/common.animation';
import { colors } from "#common/common.style";

export const DiscountBanner = styled.article`
  width: 1320px;
  height: 358px;
  margin-top: 32px;
  padding-left: 60px;

  position: relative;

  display: flex;
  align-items: center;

  background-image: url(${BackgroungImg});

  animation: ${appearance} 0.5s;
`;

export const Discount = styled.section`
  width: 424px;
  height: 223px;

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const DiscountInfo = styled.div`
  height: 146px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  & > :last-child * > :first-child {
    color: ${colors.brandingColors.primary};
  }
`;

export const DiscountHeading = styled.div`
  height: 74px;

  display: flex;
  flex-direction: column;
  gap: 12px;

  & > :first-child {
    animation: ${fall("Y", -26.85)} 0.5s;
  }
`;

export const ShopNowButton = styled.button`
  width: 162px;
  height: 45px;
  border-radius: 45px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  background: ${colors.brandingColors.primary};

  &:hover {
    background: ${colors.brandingColors.hardPrimary};
  }
  & path {
    stroke: ${colors.brandingColors.white};
  }
`;

export const DiscountCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100px;

  position: absolute;
  left: 472px;
  top: 57px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${colors.brandingColors.warning};
`;