import React, { useState } from 'react'
import styled from 'styled-components'
import { Body, Headings, colors } from '../../default'
import SaleTimer from '../SaleTimer'
import { Link } from 'react-router-dom'
import ShopNowArrow from '../../sprites/ShopNowArrow'

const SaleBannersContainer = styled.section`
    
    width: 1320px;
    margin-top: 100px;

    display: flex;
    justify-content: space-between;

`

const Banner = styled.section`
    
    width: 424px;
    height: 536px;
    border-radius: 8px;
    padding-top: 35px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-image: url(${props => props.$bg});

    & > :last-child{
        
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

`

const BannerHeading = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

`

const ShopNowButton = styled(Link)`
    
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

`

const SaleContainer = styled.div`
    
    min-height: 30px;

    display: flex;
    align-items: center;

`

const BlackContainer = styled.div`
    
    width: 100px;
    height: 39px;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${colors.grey[9]};

`

function SaleBanners() {

    let [days, setDays] = useState()
    let [hours, setHours] = useState()
    let [mins, setMins] = useState()
    let [secs, setSecs] = useState()

    let timerFinishDate = 'November, 29, 2024'

    function getTime() {

        const time = Date.parse(timerFinishDate) - Date.now()
    
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24))
        setMins(Math.floor((time / 1000 / 60) % 60))
        setSecs(Math.floor((time / 1000) % 60))
        
    }


    return (

        <SaleBannersContainer>

            <Banner $bg={require('../../images/SaleOfMonthBanner.png')}>

                <BannerHeading>
                    <Body.Small $textcolor={colors.brandingColors.white} $texttransform='uppercase' $medium='true'>Best Deals</Body.Small>
                    <Headings.Heading03 $textcolor={colors.brandingColors.white} $semibold='true'>Sale of the Month</Headings.Heading03>
                </BannerHeading>

                {(()=>{
                    if ((days <= 0) && (hours <= 0) && (mins <= 0) && (secs <= 0)) {
                        return <Body.Medium $textcolor={colors.brandingColors.white}>The countdown is finished!</Body.Medium>
                    }
                    else {
                        return <SaleTimer timedata={{days,
                            setDays,
                            hours,
                            setHours,
                            mins,
                            setMins,
                            secs,
                            setSecs,
                            timerFinishDate,
                            getTime}}
                        />
                    }
                })()}

                <ShopNowButton>
                    <Body.Small $textcolor={colors.brandingColors.primary} $semibold='true'>Shop Now</Body.Small>
                    <ShopNowArrow width='15' height='12.05' color={colors.brandingColors.primary}/>
                </ShopNowButton>

            </Banner>

            <Banner $bg={require('../../images/LowFatMeatBanner.png')}>
                
                <BannerHeading>
                    <Body.Small $textcolor={colors.brandingColors.white} $texttransform='uppercase' $medium='true'>85% Fat Free</Body.Small>
                    <Headings.Heading03 $textcolor={colors.brandingColors.white} $semibold='true'>Low-Fat Meat</Headings.Heading03>
                </BannerHeading>

                <SaleContainer>
                    <Body.Large $textcolor={colors.brandingColors.white}>Started at</Body.Large>
                    <Body.Large $textcolor={colors.brandingColors.warning} $semibold='true'>$79.99</Body.Large>
                </SaleContainer>

                <ShopNowButton>
                    <Body.Small $textcolor={colors.brandingColors.primary} $semibold='true'>Shop Now</Body.Small>
                    <ShopNowArrow width='15' height='12.05' color={colors.brandingColors.primary}/>
                </ShopNowButton>

            </Banner>

            <Banner $bg={require('../../images/FreshFruitBanner.png')}>
                
                <BannerHeading>
                    <Body.Small $texttransform='uppercase' $medium='true'>Summer Sale</Body.Small>
                    <Headings.Heading03 $semibold='true'>100% Fresh Fruit</Headings.Heading03>
                </BannerHeading>

                <SaleContainer>
                    <Body.Large>Up to</Body.Large>
                    <BlackContainer><Body.Large $textcolor='#fcc900' $medium='true'>64% OFF</Body.Large></BlackContainer>
                </SaleContainer>

                <ShopNowButton>
                    <Body.Small $textcolor={colors.brandingColors.primary} $semibold='true'>Shop Now</Body.Small>
                    <ShopNowArrow width='15' height='12.05' color={colors.brandingColors.primary}/>
                </ShopNowButton>
        
            </Banner>
            
        </SaleBannersContainer>

    )

}

export default SaleBanners