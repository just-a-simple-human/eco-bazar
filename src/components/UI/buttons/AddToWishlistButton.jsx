import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../../default'
import Heart from '../../../sprites/Heart'
import { animationOnClick, appearance, shrinkAnim } from '../../../animations/DefaultAnimation'

export const StyledAddToWishlistButton = styled.button`
    
    width: 40px;
    height: 40px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${colors.brandingColors.white};
    border: 1px solid ${colors.grey[0]};
    transition: background-color .5s;
    animation: ${appearance} .5s forwards 1 running,
    ${shrinkAnim} .25s forwards infinite ${props => props.$clicked ? 'running' : 'paused'}; 

    &:hover {

        transition: background-color .5s;
        background-color: ${colors.brandingColors.primary};
        border: none;

    }

    & path {

        transition: all .5s;
        
    }

    &:hover path {

        stroke: ${colors.brandingColors.white};

    }

`

function AddToWishlistButton() {

    let [$isclicked, setIs$clicked] = useState(false)

    return (
        <StyledAddToWishlistButton {...animationOnClick($isclicked, setIs$clicked, ()=>{})}>
            <Heart/>
        </StyledAddToWishlistButton>
    )
}

export default AddToWishlistButton