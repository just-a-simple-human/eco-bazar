import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Typography, colors } from '../../../default'

const StyledBackToHomeButton = styled(Link).attrs({to: '/'})`

    display: flex;
    align-items: center;
    justify-content: center;
    
    min-width: 163px;
    height: 45px;
    border-radius: 43px;
    margin-top: 24px;

    ${Typography}
    color: ${colors.brandingColors.white};
    font-family: 'Poppins SemiBold';
    font-size: 14px;

    background-color: ${colors.brandingColors.primary};
    transition: all .5s;

    &:hover {

        background-color: ${colors.brandingColors.hardPrimary};

    }

`

function BackToHomeButton() {
  return (
    <StyledBackToHomeButton>Back To Home</StyledBackToHomeButton>
  )
}

export default BackToHomeButton