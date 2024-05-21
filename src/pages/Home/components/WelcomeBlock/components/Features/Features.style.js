import styled from "styled-components";
import { colors } from "#common/common.style";

export const FeaturesContainer = styled.div`
  width: 1400px;
  height: 128px;
  padding: 40px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  right: 60px;
  bottom: -64px;

  background-color: ${colors.brandingColors.white};
  box-shadow: 0px 8px 40px 0px rgba(0, 38, 3, 0.08);

  animation: none 0s;

  & * {
    animation: none 0s;
  }
`;

export const Feature = styled.div`
  width: 306px;
  height: 48px;

  display: flex;
  align-items: center;
  gap: 16px;
`;

export const FeatureInfo = styled.div`
  width: 250px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;