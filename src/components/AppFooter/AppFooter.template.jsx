import React from "react";
import { Body, StyledImg, colors } from "#common/common.style";
import {
  NewsletterSubscription,
  SubscriptionText,
  AppFooterContainer,
  AppFooterInfo,
  AboutBlock,
  Contacts,
  ContactLink,
  FooterNavBlock,
  NavLinksList,
  NavLinksItem,
  FooterLink,
  MobileAppDownloadBlock,
  DownloadButtonsContainer,
  DownloadButton,
  DownloadInfo,
  CopyrightBlock,
  SocialMediaContainer,
  SocialMediaLink,
  PaymentMethodsContainer
} from "./AppFooter.style"
import SubscriptionForm from "./components/SubscriptionForm/SubscriptionForm.template";
import LogoImg from "#images/FooterLogo.svg";
import GooglePlayIcon from "#images/GooglePlayIcon.svg";
import AppleIcon from "#images/AppleIcon.svg";
import ApplePay from "#images/PaymentMethods/ApplePay.svg";
import Discover from "#images/PaymentMethods/Discover.svg";
import Visa from "#images/PaymentMethods/Visa.svg";
import MasterCard from "#images/PaymentMethods/Mastercard.svg";
import SecureCatt from "#images/PaymentMethods/SecureCart.svg";
import FacebookIcon from "#svg/FacebookIcon";
import InstagramIcon from "#svg/InstagramIcon";
import TwitterIcon from "#svg/TwitterIcon";
import PinterestIcon from "#svg/PinterestIcon";



function AppFooter() {
  return (
    <>
      <NewsletterSubscription>
        <StyledImg src={LogoImg} />
        <SubscriptionText>
          <Body.XXL $medium="true">Subscribe our Newsletter</Body.XXL>
          <Body.Small $textcolor={colors.grey[4]}>
            Pellentesque eu nibh eget mauris congue mattis matti.
          </Body.Small>
        </SubscriptionText>
        <SubscriptionForm />
      </NewsletterSubscription>
      <AppFooterContainer>
        <AppFooterInfo>
          <AboutBlock>
            <Body.XL
              as={"h3"}
              $textcolor={colors.brandingColors.white}
              $medium="true"
            >
              About Shopery
            </Body.XL>
            <Body.Small $textcolor={colors.grey[5]}>
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </Body.Small>
            <Contacts>
              <ContactLink href="tel:+79884711165">
                <Body.Small
                  $textcolor={colors.brandingColors.white}
                  $medium="true"
                >
                  (988) 471-1165
                </Body.Small>
              </ContactLink>
              <Body.Medium $textcolor={colors.grey[5]}>or</Body.Medium>
              <ContactLink href="mailto:afanasovkonstantin2005@gmail.com">
                <Body.Small
                  $textcolor={colors.brandingColors.white}
                  $medium="true"
                >
                  Proxy@gmail.com
                </Body.Small>
              </ContactLink>
            </Contacts>
          </AboutBlock>
          <FooterNavBlock $width="119px">
            <Body.XL
              as={"h3"}
              $textcolor={colors.brandingColors.white}
              $medium="true"
            >
              My Account
            </Body.XL>
            <NavLinksList>
              <NavLinksItem>
                <FooterLink>My Account</FooterLink>
              </NavLinksItem>
              <NavLinksItem>
                <FooterLink>Order History</FooterLink>
              </NavLinksItem>
              <NavLinksItem>
                <FooterLink>Shopping Cart</FooterLink>
              </NavLinksItem>
              <NavLinksItem>
                <FooterLink>Wishlist</FooterLink>
              </NavLinksItem>
              <NavLinksItem>
                <FooterLink>Settings</FooterLink>
              </NavLinksItem>
            </NavLinksList>
          </FooterNavBlock>
          <FooterNavBlock $width="130px">
            <Body.XL
              as={"h3"}
              $textcolor={colors.brandingColors.white}
              $medium="true"
            >
              Helps
            </Body.XL>
            <NavLinksList>
              <NavLinksItem>
                <FooterLink>Contact</FooterLink>
              </NavLinksItem>
              <NavLinksItem>
                <FooterLink>FAQ</FooterLink>
              </NavLinksItem>
              <NavLinksItem>
                <FooterLink>Terms & Condition</FooterLink>
              </NavLinksItem>
              <NavLinksItem>
                <FooterLink>Privacy Policy</FooterLink>
              </NavLinksItem>
            </NavLinksList>
          </FooterNavBlock>
          <FooterNavBlock $width="113px">
            <Body.XL
              as={"h3"}
              $textcolor={colors.brandingColors.white}
              $medium="true"
            >
              Proxy
            </Body.XL>
            <NavLinksList>
              <NavLinksItem>
                <FooterLink>About</FooterLink>
              </NavLinksItem>
              <NavLinksItem>
                <FooterLink>Shop</FooterLink>
              </NavLinksItem>
              <NavLinksItem>
                <FooterLink>Product</FooterLink>
              </NavLinksItem>
              <NavLinksItem>
                <FooterLink>Products Details</FooterLink>
              </NavLinksItem>
              <NavLinksItem>
                <FooterLink>Track Order</FooterLink>
              </NavLinksItem>
            </NavLinksList>
          </FooterNavBlock>
          <MobileAppDownloadBlock>
            <Body.XL
              as={"h3"}
              $textcolor={colors.brandingColors.white}
              $medium="true"
            >
              Download our Mobile App
            </Body.XL>
            <DownloadButtonsContainer>
              <DownloadButton>
                <StyledImg src={AppleIcon} />
                <DownloadInfo>
                  <Body.Tiny $textcolor={colors.grey[3]}>
                    Download on the
                  </Body.Tiny>
                  <Body.Medium $textcolor={colors.brandingColors.white} $medium>
                    App Store
                  </Body.Medium>
                </DownloadInfo>
              </DownloadButton>
              <DownloadButton>
                <StyledImg src={GooglePlayIcon} />
                <DownloadInfo>
                  <Body.Tiny $textcolor={colors.grey[3]}>
                    Download on the
                  </Body.Tiny>
                  <Body.Medium $textcolor={colors.brandingColors.white} $medium>
                    Google play
                  </Body.Medium>
                </DownloadInfo>
              </DownloadButton>
            </DownloadButtonsContainer>
          </MobileAppDownloadBlock>
        </AppFooterInfo>
        <CopyrightBlock>
          <SocialMediaContainer>
            <SocialMediaLink to={``}>
              <FacebookIcon />
            </SocialMediaLink>
            <SocialMediaLink to={``}>
              <TwitterIcon />
            </SocialMediaLink>
            <SocialMediaLink to={``}>
              <PinterestIcon />
            </SocialMediaLink>
            <SocialMediaLink to={``}>
              <InstagramIcon />
            </SocialMediaLink>
          </SocialMediaContainer>
          <Body.Small $textcolor={colors.grey[5]}>
            Ecobazar eCommerce © 2021. All Rights Reserved
          </Body.Small>
          <PaymentMethodsContainer>
            <StyledImg src={ApplePay} />
            <StyledImg src={Visa} />
            <StyledImg src={Discover} />
            <StyledImg src={MasterCard} />
            <StyledImg src={SecureCatt} />
          </PaymentMethodsContainer>
        </CopyrightBlock>
      </AppFooterContainer>
    </>
  );
}

export default AppFooter;
