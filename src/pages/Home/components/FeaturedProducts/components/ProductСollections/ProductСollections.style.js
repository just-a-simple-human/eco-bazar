import styled from 'styled-components';
import BannerBackground from '#images/Banner1.png';

export const ProductCollectionsContainer = styled.section`
  width: 1320px;
  height: 426px;
  margin-top: 50px;

  display: flex;
  gap: 24px;
`;

export const Banner = styled.div`
  width: 312px;
  height: 432px;

  background-image: url(${BannerBackground});
  background-repeat: no-repeat;
`;

export const BannerInfo = styled.div`
  width: 248px;
  height: 119px;
  margin-top: 46.68px;
  margin-inline: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BannerHeading = styled.div`
  height: 58px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;