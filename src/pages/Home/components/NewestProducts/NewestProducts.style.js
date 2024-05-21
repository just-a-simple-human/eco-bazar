import { Link } from "react-router-dom";
import styled from "styled-components";

export const NewestProductsContainer = styled.section`
  width: 1320px;
  height: 457px;
  margin-top: 100px;
`;

export const NewestProductsHeadingContainer = styled.div`
  height: 68px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewestProductsHeading = styled.div`
  width: fit-content;

  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: start;
`;

export const ViewAllButton = styled(Link)`
  width: 90px;
  height: 24px;

  display: flex;
  gap: 12px;
  align-items: center;
`;

export const ProductsContainer = styled.div`
  height: 339px;
  margin-top: 50px;

  display: flex;
  gap: 20px;
`;