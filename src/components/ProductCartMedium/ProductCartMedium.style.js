import styled from "styled-components";
import { Body, colors } from "#common/common.style";
import { Link } from "react-router-dom";

export const ProductCartContainer = styled.article`
  width: 248px;
  height: 339px;
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
    top: 15px;
    right: 16px;
  }

  & > button:last-of-type {
    position: absolute;
    top: 61px;
    right: 16px;
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

  & {
    border-radius: 8px;
  }
  & > img {
    border-radius: 7px;
    width: 246px;
    height: 246px;
  }
`;

export const ProductInfo = styled.div`
  height: 91px;
  padding: 16px;
  padding-top: 12px;

  position: relative;

  & > button {
    position: absolute;
    top: 25.5px;
    right: 16px;
  }
`;

export const ProductRating = styled.div`
  width: 60px;
  height: 12px;
  margin-top: 6px;
`;