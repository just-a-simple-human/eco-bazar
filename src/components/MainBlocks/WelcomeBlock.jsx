import React from 'react'
import styled from 'styled-components'
import { Body, DifferentText, Headings, StyledImg, Typography, colors } from '../../default'
import WelcomeBlockImg from '../../images/WelcomeBlockImg.png'
import { appearance, fall } from '../../animations/DefaultAnimation'
import Features from '../Features'
import DeliveryTruckIcon from '../../images/DeliveryTruckIcon.svg'
import HeadphonesIcon from '../../images/HeadphonesIcon.svg'
import ShoppingBagIcon from '../../images/ShoppingBagIcon.svg'
import PackageIcon from '../../images/PackageIcon.svg'
import { Link } from 'react-router-dom'
import ShopNowArrow from '../../sprites/ShopNowArrow'


const WelcomeBlockCotainer = styled.section`

    width: 1520px;
    height: 804px;
    margin-top: 24px;
    margin-bottom: 64px;
    
    border-radius: 8px;
    background-color: ${colors.grey[0]};
    position: relative;

    & * {

        animation: ${appearance} .5s;

    }

    & ${Body.Small}:first-child {
        
        animation: ${fall} .5s

    }
`

const WelcomeBlockHeading = styled.div`

    width: 596px;
    height: 194px;

    display: flex;
    flex-flow: column nowrap;
    gap: 8px;

`

const WelcomeBlockContent = styled.div`

    width: 596px;
    height: 376px;
    margin-left: 100px;
    margin-top: 182px;

`

const WelcomeBlockOffer = styled.div`
    
    width: 363px;
    height: 71px;
    margin-top: 28px;

    display: flex;
    flex-flow: column nowrap;
    gap: 12px;

`

const StyledWelcomeBlockImg = styled(StyledImg)`

    position: absolute;
    right: 52.41px;
    top: 118px;

`

const ShopNowButton = styled(Link)`
    
    width: 191px;
    min-height: 51px;
    margin-top: 32px;
    border-radius: 53px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    ${Typography}
    font-family: 'Poppins $$semibold='true'';
    font-size: 16px;

    color: ${colors.brandingColors.white};
    background-color: ${colors.brandingColors.primary};

    & path {
      stroke: ${colors.brandingColors.white};
    }

    transition: all .5s;

    &:hover {
        background-color: ${colors.brandingColors.hardPrimary};
    }

`

const currentFeatures = [
    {
        icon: DeliveryTruckIcon,
        title: 'Free Shipping',
        description: 'Free shipping on all your order'
    },
    {
        icon: HeadphonesIcon,
        title: 'Customer Support 24/7',
        description: 'Instant access to Support'
    },
    {
        icon: ShoppingBagIcon,
        title: '100% Secure Payment',
        description: 'We ensure your money is save'
    },
    {
        icon: PackageIcon,
        title: 'Money-Back Guarantee',
        description: '30 Days Money-Back Guarantee'
    }
]

function WelcomeBlock() {

  return (
    <WelcomeBlockCotainer>
        <WelcomeBlockContent>
            <WelcomeBlockHeading>
                <Body.Small $lspacing='0.28px' $textcolor={colors.brandingColors.primary} $texttransform='uppercase' $medium='true' $lineheight='100%'>Welcome to shopery</Body.Small>
                <Headings.Display as={'h1'} $textcolor={colors.grey[9]} $$semibold='true'>Fresh & Healthy Organic Food</Headings.Display>
            </WelcomeBlockHeading>
            <WelcomeBlockOffer>
                <Headings.Heading05 height='38px'>Sale up to <DifferentText $textcolor={colors.brandingColors.warning} $texttransform='uppercase' $$semibold='true'>30% OFF</DifferentText></Headings.Heading05>
                <Body.Small $textcolor={colors.grey[5]} $whitespace='nowrap'>Free shipping on all your order. We deliver, you enjoy</Body.Small>
            </WelcomeBlockOffer>
            <ShopNowButton to={`/shop`}>Shop now<ShopNowArrow/></ShopNowButton>
        </WelcomeBlockContent>
        <StyledWelcomeBlockImg src={WelcomeBlockImg}/>
        <Features featuresList={currentFeatures}/>
    </WelcomeBlockCotainer>
  )
}

export default WelcomeBlock