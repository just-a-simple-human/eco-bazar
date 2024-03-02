import React from 'react'
import styled from 'styled-components'
import LogoImg from '../../images/FooterLogo.svg'
import { Body, StyledImg, colors } from '../../default'
import SubscriptionForm from '../UI/inputs/SubscriptionForm'
import { Link } from 'react-router-dom'
import GooglePlayIcon from '../../images/GooglePlayIcon.svg'
import AppleIcon from '../../images/AppleIcon.svg'
import FacebookIcon from '../../sprites/FacebookIcon'
import InstagramIcon from '../../sprites/InstagramIcon'
import TwitterIcon from '../../sprites/TwitterIcon'
import PinterestIcon from '../../sprites/PinterestIcon'
import ApplePay from '../../images/PaymentMethods/ApplePay.svg'
import Discover from '../../images/PaymentMethods/Discover.svg'
import Visa from '../../images/PaymentMethods/Visa.svg'
import MasterCard from '../../images/PaymentMethods/Mastercard.svg'
import SecureCatt from '../../images/PaymentMethods/SecureCart.svg'

const NewsletterSubscription = styled.section`

  width: 100vw;
  height: 162px;
  padding-inline: calc((100vw - 1320px)/2);

  display: flex;
  align-items: center;

  background: ${colors.grey[1]};

  & > :first-child {

    width: 222.81;
    height: 47px;

  }

`

const SubscriptionText = styled.div`
  
  width: 448px;
  height: fit-content;
  margin-left: 114.19px;

  display: flex;
  flex-direction: column;
  gap: 4px;

`


const AppFooterContainer = styled.footer`
  
  height: 460px;
  padding-top: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 68px;

  background: ${colors.grey[9]};

`

const AppFooterInfo = styled.div`
  
  width: 1320px;
  height: 224px;

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

`

const AboutBlock = styled.section`
  
  width: 336px;
  height: 158px;

  display: flex;
  flex-direction: column;
  gap: 16px;

`

const Contacts = styled.div`
  
  width: 281px;
  height: 33px;

  display: flex;
  gap: 16px;
  align-items: center;

`

const ContactLink = styled.a`
  
  width: fit-content;
  height: fit-content;
  padding-block: 6px;
  
  display: block;
  
  box-shadow: 0 1.5px 0 ${colors.brandingColors.primary};
  
`

const AccountBlock = styled.section`
    
  width: 119px;
  height: fit-content;
  
`

const AccountLinks = styled.div`
  
  width: 92px;
  height: fit-content;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  gap: 12px;

`

const FooterLink = styled(Body.Small).attrs({as:Link})`

  color: ${colors.grey[4]};

  &:hover {

    color: ${colors.brandingColors.white};

  }

`

const HelpBlock = styled.section`
  
  width: 130px;
  height: fit-content;

`

const HelpLinks = styled.div`
  
  width: 130px;
  height: fit-content;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  gap: 12px;

`

const ProxyBlock = styled.section`
  
  width: 113px;
  height: fit-content;

`

const ProxyLinks = styled.div`
  
  height: fit-content;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  gap: 12px;

`

const MobileAppDownloadBlock = styled.section`
  
  width: 312px;
  height: 108.49px;

`

const DownloadButtonsContainer = styled.div`
  
  width: 100%;
  height: 58.49px;
  margin-top: 20px;

  display: flex;
  justify-content: space-between;

`

const DownloadButton = styled(Link)`
  
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

  transition: all .5s;
  &:hover {

    background: ${colors.brandingColors.primary};

  }

`

const DownloadInfo = styled.div`

  width: 100px;
  height: 38.49px;

  & > :first-child {

    font-size: 11px;
    line-height: 130%;

  }

`

const CopyrightBlock = styled.div`
  
  width: 1320px;
  min-height: 88px;

  display: flex;
  align-items: center;

  box-shadow: 0 -1.5px 0 ${colors.grey[8]};

  & > :nth-child(2) {

    margin-left: 308px;

  }

`

const SocialMediaContainer = styled.div`
  
  width: 184px;
  height: 40px;
  
  display: flex;
  gap: 8px;

`

const SocialMediaLink = styled(Link)`

  width: 40px;
  height: 40px;
  border-radius: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${colors.grey[9]};

  transition: all .5s;
  & path {
    transition: all .5s;
  }
  &:hover {

    background: ${colors.brandingColors.primary};

    & path {
      fill: ${colors.brandingColors.white};
    }

  }

`

const PaymentMethodsContainer = styled.div`
  width: 277px;
  height: 32px;
  margin-left: 208px;
  display: flex;
  gap: 8px;
`

function AppFooter() {
  return (
    <>
        <NewsletterSubscription>
            <StyledImg src={LogoImg}/>
            <SubscriptionText>
              <Body.XXL $medium='true'>Subscribe our Newsletter</Body.XXL>
              <Body.Small $textcolor={colors.grey[4]}>Pellentesque eu nibh eget mauris congue mattis matti.</Body.Small>
            </SubscriptionText>
            <SubscriptionForm/>
        </NewsletterSubscription>
        <AppFooterContainer>
          <AppFooterInfo>
            <AboutBlock>
              <Body.XL as={'h3'} $textcolor={colors.brandingColors.white} $medium='true'>About Shopery</Body.XL>
              <Body.Small $textcolor={colors.grey[5]}>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</Body.Small>
              <Contacts>
                <ContactLink href='tel:+79884711165'>
                  <Body.Small $textcolor={colors.brandingColors.white} $medium='true'>(988) 471-1165</Body.Small>
                </ContactLink>
                <Body.Medium $textcolor={colors.grey[5]}>or</Body.Medium>
                <ContactLink href='mailto:afanasovkonstantin2005@gmail.com'>
                <Body.Small $textcolor={colors.brandingColors.white} $medium='true'>Proxy@gmail.com</Body.Small>
                </ContactLink>
              </Contacts>
            </AboutBlock>
            <AccountBlock>
              <Body.XL as={'h3'} $textcolor={colors.brandingColors.white} $medium='true'>My Account</Body.XL>
              <AccountLinks>
                <FooterLink>My Account</FooterLink>
                <FooterLink>Order History</FooterLink>
                <FooterLink>Shopping Cart</FooterLink>
                <FooterLink>Wishlist</FooterLink>
                <FooterLink>Settings</FooterLink>
              </AccountLinks>
            </AccountBlock>
            <HelpBlock>
              <Body.XL as={'h3'} $textcolor={colors.brandingColors.white} $medium='true'>Helps</Body.XL>
              <HelpLinks>
                <FooterLink>Contact</FooterLink>
                <FooterLink>FAQ</FooterLink>
                <FooterLink>Terms & Condition</FooterLink>
                <FooterLink>Privacy Policy</FooterLink>
              </HelpLinks>
            </HelpBlock>
            <ProxyBlock>
              <Body.XL as={'h3'} $textcolor={colors.brandingColors.white} $medium='true'>Proxy</Body.XL>
              <ProxyLinks>
                <FooterLink>About</FooterLink>
                <FooterLink>Shop</FooterLink>
                <FooterLink>Product</FooterLink>
                <FooterLink>Product Details</FooterLink>
                <FooterLink>Track Order</FooterLink>
              </ProxyLinks>
            </ProxyBlock>
            <MobileAppDownloadBlock>
              <Body.XL as={'h3'} $textcolor={colors.brandingColors.white} $medium='true'>Download our Mobile App</Body.XL>
              <DownloadButtonsContainer>
                <DownloadButton>
                  <StyledImg src={AppleIcon}/>
                  <DownloadInfo>
                    <Body.Tiny $textcolor={colors.grey[3]}>Download on the</Body.Tiny>
                    <Body.Medium $textcolor={colors.brandingColors.white} $medium>App Store</Body.Medium>
                  </DownloadInfo>
                </DownloadButton>
                <DownloadButton>
                  <StyledImg src={GooglePlayIcon}/>
                  <DownloadInfo>
                    <Body.Tiny $textcolor={colors.grey[3]}>Download on the</Body.Tiny>
                    <Body.Medium $textcolor={colors.brandingColors.white} $medium>Google play</Body.Medium>
                  </DownloadInfo>
                </DownloadButton>
              </DownloadButtonsContainer>
            </MobileAppDownloadBlock>
          </AppFooterInfo>
          <CopyrightBlock>
            <SocialMediaContainer>
              <SocialMediaLink to={``}>
                <FacebookIcon/>
              </SocialMediaLink>
              <SocialMediaLink to={``}>
                <TwitterIcon/>
              </SocialMediaLink>
              <SocialMediaLink to={``}>
                <PinterestIcon/>
              </SocialMediaLink>
              <SocialMediaLink to={``}>
                <InstagramIcon/>
              </SocialMediaLink>
            </SocialMediaContainer>
            <Body.Small $textcolor={colors.grey[5]}>Ecobazar eCommerce © 2021. All Rights Reserved</Body.Small>
            <PaymentMethodsContainer>
              <StyledImg src={ApplePay}/>
              <StyledImg src={Visa}/>
              <StyledImg src={Discover}/>
              <StyledImg src={MasterCard}/>
              <StyledImg src={SecureCatt}/>
            </PaymentMethodsContainer>
          </CopyrightBlock>
        </AppFooterContainer>
    </>
  )
}

export default AppFooter