import styled from "styled-components";
import { Body, colors } from "#common/common.style";
import { Link } from "react-router-dom";

export const ProductCartContainer = styled.article`
  width: 312px;
  height: 407px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  position: relative;

  border: 1px solid ${colors.grey[1]};

  &:hover {
    border: 1px solid ${colors.brandingColors.hardPrimary};
    box-shadow: 0px 0px 12px 0px rgba(32, 181, 38, 0.32);
    & > button {
      opacity: 1;
    }
    & ${Body.Small} {
      color: ${colors.brandingColors.hardPrimary};
    }
  }

  & > button:first-of-type {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  & > button:last-of-type {
    position: absolute;
    top: 66px;
    right: 20px;
  }

  & > button {
    opacity: 0;
  }
`;

export const ProductImg = styled(Link)`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  &, & > img {
    border-radius: 8px;
  }
  & > img {
    width: 302px;
    height: 302px;
  }
`;

export const ProductInfo = styled.div`
  width: 100%;
  height: 95px;
  padding: 16px;

  position: relative;

  & > button {
    position: absolute;
    top: 27.5px;
    right: 20px;
  }
`;

export const ProductRating = styled.div`
  width: 60px;
  height: 12px;
  margin-top: 6px;

  display: flex;
`;