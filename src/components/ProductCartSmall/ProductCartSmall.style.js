import styled from "styled-components";
import { Body, StyledImg, colors } from "#common/common.style";

export const ProductImg = styled(StyledImg)`
  width: 112px;
  height: 112px;
  padding: 5px;
  margin-bottom: 4px;
`;

export const ProductContainer = styled.div`
  width: 200px;
  height: 116px;
  padding-inline: 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SwipeContainer = styled.div`
  height: 46px;
  width: 200px;
  overflow: hidden;
`;

export const ProductInfo = styled.div`
  width: 80px;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 6px;
`;

export const ProductRating = styled.div`
  width: 80px;
  height: 16px;
`;

export const ProductButtons = styled.div`
  width: 144px;
  height: 40px;
  margin-top: 6px;

  display: flex;
  gap: 12px;
`;
export const ProductCartContainer = styled.article`
  width: 312px;
  height: 116px;
  border-radius: 6px;

  display: flex;

  border: 1px solid ${colors.grey[1]};

  & :is(${ProductInfo}, ${ProductButtons}) {
    transition: all .5s;
  }

  &:hover {
    border: 1px solid ${colors.brandingColors.hardPrimary};
    box-shadow: 0px 0px 12px 0px rgba(32, 181, 38, 0.32);

    & ${Body.Small} {
      color: ${colors.brandingColors.hardPrimary};
    }

    & :is(${ProductInfo}, ${ProductButtons}) {
      transform: translateY(-46px);
    }
  }
`;