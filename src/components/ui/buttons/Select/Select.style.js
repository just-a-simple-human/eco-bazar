import styled from "styled-components";
import { openning } from "./Select.animation"
import { colors } from '#common/common.style';

export const SelectButton = styled.button`
  min-width: 100%;
  min-height: 100%;

  flex: 1;

  font-size: inherit;
  font-family: inherit;
  color: inherit;
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  background: transparent;
`;

export const SelectList = styled.ul`
  width: 138px;
  list-style-type: none;
  padding: 4px 5px;
  background: ${colors.brandingColors.white};
  font-size: 12px;
  transition: all 1s;
  position: absolute;
  top: calc(100% + (42px - 16px) / 2);
  z-index: 2;
  animation: ${openning} 0.5s;
  box-sizing: content-box;
`;

export const SelectItem = styled.li`
  width: 100%;
  padding-left: 10px;
  padding-block: 3.25px;
  text-align: left;
  font-family: "Poppins";
  font-size: 12px;
  cursor: pointer;
  color: ${colors.grey[6]};

  &:hover {
    background-color: ${colors.brandingColors.primary};
    color: ${colors.brandingColors.white};
  }
`;