import React from "react";
import { colors } from "#common/common.style";
import SearchImg from "#images/Search.svg";
import { StyledSearchForm, StyledSearchFormButton, StyledSearchFormInput, StyledSearchImg } from "./SearchForm.style";

function SearchForm() {
  return (
    <StyledSearchForm
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <StyledSearchImg src={SearchImg}></StyledSearchImg>
      <StyledSearchFormInput
        type="search"
        id="search-input"
        placeholder="Search"
      />
      <StyledSearchFormButton
        type="submit"
        $semibold="true"
        $textcolor={colors.brandingColors.white}
      >
        Search
      </StyledSearchFormButton>
    </StyledSearchForm>
  );
}

export default SearchForm;
