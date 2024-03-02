import React, { useContext } from 'react'
import styled from 'styled-components'
import { StyledImg, Typography, colors } from '../default'
import bigDevider from '../images/BigDevider.svg'
import Heart from '../sprites/WishListHeart'
import CartImg from '../sprites/CartImg'
import { MainContext } from '../context'
import { adding } from '../animations/UserButtonsAnimation'

const UserButtonsContainer = styled.section`
    display: flex;
    gap: 16px;
    width: 191px;
    height: 34px;
    margin-left: 220px;
`

const WishListButton = styled.button`
    width: fit-content;
    height: fit-content;
    cursor: pointer;
    background: transparent;

    & path {
        transition: all .5s;
    }

    &:hover path {
        stroke: ${colors.brandingColors.hardPrimary};
    }
`

const CartButtonContainer = styled.div`
    display: flex;
    gap: 12px;
    width: 127px;
`

const CartButton = styled.button`

    position: relative;
    background: transparent;
    width: fit-content;
    height: fit-content;
    cursor: pointer;

    & path {
        transition: all .5s;
    }
    &:hover path {
        stroke: ${colors.brandingColors.hardPrimary};
    }
    &:hover div {
        transform: translateY(2px);
    }
`

const ItemCounter = styled.div`

    width: 18px;
    height: 18px;
    border-radius: 16px;

    position: absolute;
    left: 18px;
    top: -2px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${colors.brandingColors.hardPrimary};
    outline: 1px solid ${colors.brandingColors.white};

    color: ${colors.brandingColors.white};
    font-family: 'Poppins Medium';
    font-size: 10px;
    line-height: 10px;

    transition: all .5s;
    animation: ${adding} .5s forwards;

`

const TotalCostContainer = styled.div`

    width: 81px;
    height: 34px;

    display: flex;
    flex-direction: column;
    gap: 7px;

    background: transparent;
`

const TotalCostText = styled.p`
    ${Typography}
    font-size: 11px;
    color: ${colors.grey[7]};
    text-align: left;
    width: 100%;
    height: 13px;
`

const TotalCountValue = styled.p`
    font-family: 'Poppins Medium';
    font-size: 14px;
    color: ${colors.grey[9]};
    line-height: 100%;
    height: 14px;
`

function UserButtons() {

    const {openShoppingCart, cart} = useContext(MainContext)

    return (

        <UserButtonsContainer>
            
            <WishListButton>
                <Heart/>
            </WishListButton>

            <StyledImg src={bigDevider}></StyledImg>

            <CartButtonContainer>

                <CartButton onClick={openShoppingCart}>

                    <CartImg/>

                    <ItemCounter>{cart.getTotalCount()}</ItemCounter>

                </CartButton>
                <TotalCostContainer>
                    <TotalCostText>Shopping cart:</TotalCostText>
                    <TotalCountValue>${cart.getTotalCost()}</TotalCountValue>
                </TotalCostContainer>
            </CartButtonContainer>
            
        </UserButtonsContainer>

  )

}

export default UserButtons