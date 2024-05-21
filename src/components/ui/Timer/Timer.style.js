import { fall } from "#common/common.animation";
import styled from "styled-components";
import { colors } from "#common/common.style";

export const TimerContainer = styled.article`
  width: 290px;
  height: 52px;
  margin-top: 8px;

  display: flex;
  gap: 8px;

  & :nth-child(even) {
    color: rgba(255, 255, 255, 0.6);
  }

  & > * {
    animation: ${fall("X", -43.5)} 0.5s;
  }
`;

export const TimerCell = styled.div`
  width: 56px;
  height: 52px;

  display: flex;
  flex-direction: column;
  gap: 4px;

  & :first-child {
    color: ${colors.brandingColors.white};
    text-align: center;
  }

  & p:last-child {
    line-height: 100%;
    color: rgba(255, 255, 255, 0.8);
    letter-spacing: calc(0.03 * 12px);
    text-align: center;
    text-transform: uppercase;
  }
`;