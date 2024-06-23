import React, { useState } from "react";
import { colors } from "#common/common.style";
import { SelectButton, SelectItem, SelectList } from "./Select.style";



function Select({ changer, selectList, buttontext, parser, width }) {
  let [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <SelectButton
        onClick={() => {
          setIsOpened(!isOpened);
        }}
        $textcolor={colors.grey[6]}
      >
        {buttontext}
      </SelectButton>
      <SelectList hidden={!isOpened} $textcolor={colors.grey[6]}>
        {selectList?.map((element, index) => (
          <SelectItem
            onClick={() => {
              changer(element);

              setIsOpened(!isOpened);
            }}
            width={width}
            key={index}
            $textcolor={colors.grey[6]}
          >
            {parser ? parser(element) : element}
          </SelectItem>
        ))}
      </SelectList>
    </>
  );
}

export default Select;