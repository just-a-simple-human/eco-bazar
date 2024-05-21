import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "#common/common.style";
import { openning } from "./Select.animation"

const SelectButton = styled.button`
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

const SelectItem = styled.li`
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

function Select({ changer, selectList, ...props }) {
  let [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <SelectButton
        onClick={() => {
          setIsOpened(!isOpened);
        }}
        $textcolor={colors.grey[6]}
      >
        {props.buttontext}
      </SelectButton>
      <SelectList hidden={!isOpened} $textcolor={colors.grey[6]}>
        {selectList?.map((element, index) => (
          <SelectItem
            onClick={() => {
              changer(element);

              setIsOpened(!isOpened);
            }}
            width={props.width}
            key={index}
            $textcolor={colors.grey[6]}
          >
            {element.view || element}
          </SelectItem>
        ))}
      </SelectList>
    </>
  );
}

export default Select;