import styled from "styled-components";
import { StyledImg, Typography, colors } from "#common/common.style";

export const StyledSearchForm = styled.form`
  background: transparent;
  border: 1px solid ${colors.grey[1]};
  border-radius: 6px;
  width: 498px;
  height: 45px;
  display: flex;
  align-items: center;
  margin-left: 228px;
  transition: all 0s;

  &:has(input:focus, input:hover) {
    border: 1px solid ${colors.brandingColors.primary};
    transition: all 0.5s;
  }
`;

export const StyledSearchFormInput = styled.input`
  flex: 1;
  height: 21px;
  ${Typography}

  font-size: 15px;

  &::-webkit-search-cancel-button {
    display: none;
  }
  &::placeholder {
    font-size: 15px;
    color: ${colors.grey[5]};
    padding: 0;
    line-height: 21px;
  }
`;

export const StyledSearchFormButton = styled.button`
  width: 98px;
  height: 45px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${Typography}

  background: ${colors.brandingColors.primary};
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    background: ${colors.brandingColors.hardPrimary};
  }
`;

export const StyledSearchImg = styled(StyledImg)`
  margin-left: 16px;
  margin-right: 8px;
  width: 20px;
  height: 20px;
`;
