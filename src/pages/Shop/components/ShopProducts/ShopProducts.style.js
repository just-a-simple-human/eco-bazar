import styled from "styled-components";

export const ShopProductsContainer = styled.div`
  width: 1320px;
  min-height: fit-content;
  padding-top: 32px;

  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  & > * {
    flex-shrink: 0;
  }
`;