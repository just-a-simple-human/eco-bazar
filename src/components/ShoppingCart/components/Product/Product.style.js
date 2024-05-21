import styled, { css } from "styled-components";
import { StyledImg, colors } from "#common/common.style";
import { deleted } from "./Product.animation";

export const ProductContainer = styled.article`
  height: 100px;

  display: flex;
  gap: 8px;
  align-items: center;

  ${(props) =>
    props.$clicked &&
    css`
      animation: ${deleted} 1s forwards;
    `}
`;

export const ProductImg = styled(StyledImg)`
  width: 120px;
  height: 100px;

  object-fit: contain;
`;

export const ProductInfo = styled.div`
  height: 44px;

  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const DeleteProductButton = styled.button`
  &:hover {
    & path:first-child {
      stroke: ${colors.grey[5]};
    }
    & path:not(:first-child) {
      stroke: ${colors.grey[9]};
    }
  }

  background: transparent;
`;