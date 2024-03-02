import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../../default'
import BagSvg from '../../../sprites/BagSvg'
import { MainContext } from '../../../context'
import { animationOnClick, shrinkAnim } from '../../../animations/DefaultAnimation'

export const StyledAddToCartButton = styled.button`
    
    width: 40px;
    height: 40px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${colors.grey[1]};

    animation: ${shrinkAnim} .25s forwards infinite ${props => props.$clicked ? 'running' : 'paused'};
    
    &, & * {

        transition: all .5s;

    }
    
    &:hover {

        background-color: ${colors.brandingColors.primary};

    }

    &:hover path {

        stroke: ${colors.brandingColors.white};

    }

`

function AddToCartButton({product}) {

    let {cart} = useContext(MainContext)
    let [$isclicked, setIs$clicked] = useState(false)

    return (
        <StyledAddToCartButton
        {...animationOnClick($isclicked, setIs$clicked, ()=>cart.addToCart(product))}
        >
            <BagSvg/>
        </StyledAddToCartButton>
    )
}

export default AddToCartButton