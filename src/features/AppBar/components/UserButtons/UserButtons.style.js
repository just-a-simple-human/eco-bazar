import styled from "styled-components";
import { Typography, colors } from "#common/common.style";
import { adding } from "./UserButtons.animation";

export const UserButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
  width: 191px;
  height: 34px;
  margin-left: 220px;
`;

export const WishListButton = styled.button`
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  background: transparent;

  & path {
  }

  &:hover path {
    stroke: ${colors.brandingColors.hardPrimary};
  }
`;

export const CartButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  width: 127px;
`;

export const CartButton = styled.button`
  position: relative;
  background: transparent;
  width: fit-content;
  height: fit-content;
  cursor: pointer;

  & path {
  }
  &:hover path {
    stroke: ${colors.brandingColors.hardPrimary};
  }
  &:hover div {
    transform: translateY(2px);
  }
`;

export const ItemCounter = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 16px;

  position: absolute;
  left: 18px;
  top: -2px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${colors.brandingColors.hardPrimary};
  outline: 1px solid ${colors.brandingColors.white};

  color: ${colors.brandingColors.white};
  font-family: "Poppins Medium";
  font-size: 10px;
  line-height: 10px;

  animation: ${adding} 0.5s forwards;
`;

export const TotalCostContainer = styled.div`
  width: 81px;
  height: 34px;

  display: flex;
  flex-direction: column;
  gap: 7px;

  background: transparent;
`;

export const TotalCostText = styled.p`
  ${Typography}
  font-size: 11px;
  color: ${colors.grey[7]};
  text-align: left;
  width: 100%;
  height: 13px;
`;

export const TotalCountValue = styled.p`
  font-family: "Poppins Medium";
  font-size: 14px;
  color: ${colors.grey[9]};
  line-height: 100%;
  height: 14px;
`;
