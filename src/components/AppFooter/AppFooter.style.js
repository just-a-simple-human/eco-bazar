import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "#common/common.style";
import { Body } from "#common/common.style";

export const NewsletterSubscription = styled.div`
  width: 100vw;
  height: 162px;
  padding-inline: calc((100vw - 1320px) / 2);

  display: flex;
  align-items: center;

  background: ${colors.grey[1]};

  & > :first-child {
    width: 222.81;
    height: 47px;
  }
`;

export const SubscriptionText = styled.div`
  width: 448px;
  height: fit-content;
  margin-left: 114.19px;

  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const AppFooterContainer = styled.footer`
  width: 100vw;
  height: 460px;
  padding-top: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;

  background: ${colors.grey[9]};
`;

export const AppFooterInfo = styled.div`
  width: 1320px;
  height: 212px;

  display: flex;

  & > * {
    margin-left: 78px;
  }

  & > :first-child {
    margin-left: 0;
  }

  & > :last-child {
    margin-left: 76px;
  }
`;

export const AboutBlock = styled.div`
  width: 336px;
  height: 158px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Contacts = styled.div`
  width: 281px;
  height: 33px;

  display: flex;
  gap: 16px;
  align-items: center;
`;

export const ContactLink = styled.a`
  width: fit-content;
  height: fit-content;
  padding-block: 6px;

  display: block;

  box-shadow: 0 1.5px 0 ${colors.brandingColors.primary};
`;

export const FooterNavBlock = styled.div`
  width: ${(props) => props.$width || "fit-content"};
  height: fit-content;
`;

export const NavLinksList = styled.ul`
  width: fit-content;
  height: fit-content;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const NavLinksItem = styled.li`
  width: fit-content;
  height: fit-content;
`;

export const FooterLink = styled(Body.Small).attrs({ as: Link })`
  width: fit-content;

  color: ${colors.grey[4]};

  &:hover {
    color: ${colors.brandingColors.white};
  }
`;

export const MobileAppDownloadBlock = styled.div`
  width: 312px;
  height: 108.49px;
`;

export const DownloadButtonsContainer = styled.div`
  width: 100%;
  height: 58.49px;
  margin-top: 20px;

  display: flex;
  justify-content: space-between;
`;

export const DownloadButton = styled(Link)`
  &:first-child {
    width: 154px;
  }
  &:last-child {
    width: 150px;
  }
  height: 58.49px;
  padding: 10px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  gap: 6px;

  background: ${colors.grey[8]};

  &:hover {
    background: ${colors.brandingColors.primary};
  }
`;

export const DownloadInfo = styled.div`
  width: 100px;
  height: 38.49px;

  & > :first-child {
    font-size: 11px;
    line-height: 130%;
  }
`;

export const CopyrightBlock = styled.div`
  width: 1320px;
  min-height: 88px;

  display: flex;
  align-items: center;

  box-shadow: 0 -1.5px 0 ${colors.grey[8]};

  & > :nth-child(2) {
    margin-left: 308px;
  }
`;

export const SocialMediaContainer = styled.div`
  width: 184px;
  height: 40px;

  display: flex;
  gap: 8px;
`;

export const SocialMediaLink = styled(Link)`
  width: 40px;
  height: 40px;
  border-radius: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${colors.grey[9]};
  
  &:hover {
    background: ${colors.brandingColors.primary};

    & path {
      fill: ${colors.brandingColors.white};
    }
  }
`;

export const PaymentMethodsContainer = styled.div`
  width: 277px;
  height: 32px;
  margin-left: 208px;
  display: flex;
  gap: 8px;
`;