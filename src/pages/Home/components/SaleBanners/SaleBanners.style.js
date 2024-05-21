import styled from "styled-components";
import { colors } from "#common/common.style";
import { Link } from 'react-router-dom';

export const SaleBannersContainer = styled.section`
  width: 1320px;
  margin-top: 100px;

  display: flex;
  justify-content: space-between;
`;

export const Banner = styled.section`
  width: 424px;
  height: 536px;
  border-radius: 8px;
  padding-top: 35px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${(props) => props.$bg});

  & > :last-child {
    margin-top: 24px;
  }

  &:last-child {
    & > :nth-child(2) {
      margin-top: 8px;
      gap: 12px;
    }
  }

  &:nth-child(2) {
    & > :nth-child(2) {
      margin-top: 12.5px;
      gap: 8px;
    }

    & > :last-child {
      margin-top: 28.5px;
    }
  }

  &:first-child > p:nth-child(2) {
    margin-top: 8px;
  }
`;

export const BannerHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const ShopNowButton = styled(Link)`
  width: 162px;
  height: 45px;
  border-radius: 43px;

  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;

  background-color: ${colors.brandingColors.white};

  transition: all 0.5s;

  &:hover {
    background-color: ${colors.brandingColors.primary};

    & * {
      color: ${colors.brandingColors.white};
      stroke: ${colors.brandingColors.white};
    }
  }
`;

export const SaleContainer = styled.div`
  min-height: 30px;

  display: flex;
  align-items: center;
`;

export const AccentSaleContainer = styled.div`
  width: 100px;
  height: 39px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${colors.grey[9]};
`;