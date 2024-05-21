import styled from "styled-components";
import { colors } from "#common/common.style";

export const ClientTestimonialsContainer = styled.section`
  width: 100vw;
  height: 630px;
  margin-top: 100px;
  padding-block: 100px;
  padding-inline: 300px;

  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;

  background: ${colors.grey[0]};
`;

export const ClientTestimonialsHeadingContainer = styled.div`
  width: 1320px;
  height: 68px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ClientTestimonialsHeading = styled.div`
  width: fit-content;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SliderButtonsContainer = styled.div`
  width: 102px;
  height: 45px;

  display: flex;
  justify-content: space-between;
`;

export const SliderTracker = styled.div`
  width: fit-content;
  height: 8px;

  display: flex;
  gap: 8px;
`;

export const SliderTrackerButton = styled.button`
  min-height: 8px;
  min-width: ${(props) => (props.$$active ? "16px" : "8px")};
  border-radius: 8px;

  background: ${(props) =>
    props.$active ? colors.brandingColors.primary : colors.greenGrey[2]};
`;