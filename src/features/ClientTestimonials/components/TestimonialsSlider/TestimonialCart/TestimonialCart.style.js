import { colors } from "#common/common.style";
import styled, { css } from "styled-components";
import { move } from "#components/ui/sliders/Slider.animation";

export const TestimonialCartContainer = styled.div`
  min-width: 424px;
  height: 254px;
  padding: 24px;

  position: relative;
  right: 448px;

  display: flex;
  flex-direction: column;

  ${(props) =>
    props.$move === "toRight" &&
    css`
      animation: ${move(448)} 0.25s linear forwards;
  `}
  ${(props) =>
    props.$move === "toLeft" &&
    css`
      animation: ${move(-448)} 0.25s linear forwards;
  `}

  background: ${colors.brandingColors.white};
`;

export const TestimonialComment = styled.div`
  width: 376px;
  max-height: 84px;
  margin-top: 16px;

  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

export const Client = styled.div`
  height: 56px;
  margin-top: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ClientInfoContainer = styled.div`
  width: fit-content;

  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
`;

export const ClientInfo = styled.div`
  height: 45px;

  display: flex;
  flex-direction: column;
`;