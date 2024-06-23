import styled from "styled-components";
import { Typography, colors } from "#common/common.style";

export const ShopFilterContainer = styled.div`
  width: 100vw;
  height: 118px;
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const FiltersContainer = styled.div`
  width: 1320px;
  height: 41px;

  display: flex;
`;

export const SelectContainer = styled.div`
  min-width: 178px;
  min-height: 41px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  ${Typography}
  color: ${colors.grey[7]};

  border: 1px solid ${colors.grey[1]};

  & > :first-child {
    padding-inline: 16px;
    padding-block: 10px;
  }

  & > img {
    position: absolute;
    right: 16px;
  }

  &:not(:has(ul[hidden])) > img {
    transform: translateY(3.5px);
  }

  &:not(:first-child) {
    margin-left: 16px;
  }

  &:nth-child(4) {
    margin-left: 382px;
  }

  & > ul {
    width: 100%;

    border: inherit;
    border-radius: inherit;

    & li {
      border-bottom: 1px solid ${colors.grey[1]};
    }
  }
`;

export const ActiveFiltersContainer = styled.div`
  width: 100vw;
  height: 53px;
  padding-inline: calc((100vw - 1320px) / 2);

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow:
    0 1px 0 #e5e5e5,
    0 -1px 0 #e5e5e5;
`;