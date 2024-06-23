import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { colors } from "#common/common.style";
import { move } from "#components/ui/sliders/Slider.animation";

export const CategoryCartContainer = styled(Link)`
  width: 200px;
  height: 210px;
  padding-top: 32px;
  padding-bottom: 24px;
  border-radius: 6px;
  flex-shrink: 0;

  position: relative;
  right: 224px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  border: 1px solid #ededed;

  transition: all 0.5s;

  ${(props) =>
    props.$move === "toRight" &&
    css`
      animation: ${move(224)} 0.25s linear forwards;
  `}
  ${(props) =>
    props.$move === "toLeft" &&
    css`
      animation: ${move(-224)} 0.25s linear forwards;
  `}

  &:hover {
    border: 1px solid ${colors.brandingColors.hardPrimary};

    & p:first-of-type {
      color: ${colors.brandingColors.hardPrimary};
    }
  }
`;

export const CategoryCartInfo = styled.div`
  height: 54px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;