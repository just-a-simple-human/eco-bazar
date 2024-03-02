import React, { useState } from 'react'
import styled from 'styled-components'
import SelectArrow from '../../../images/SelectArrow.svg'
import { Typography, colors } from '../../../default'
import { openning } from '../../../animations/SelectAnimation'

const StyledSelect = styled.div`
    width: ${props => props.width || "35px"};
    height: 16px;
    border: none;
    outline: none;
    background: transparent;
    background-image: url(${SelectArrow});
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: 6.25px;
    position: relative;
    justify-content: center;
    align-items: start;
    transition: all 0.25s;

    &:not(:has(ul[hidden])) {
        background-position-y: 9.25px;
    }

`
const StyledSelectButton = styled.button`

    ${Typography}
    display: flex;
    font-size: 12px;
    height: 100%;
    width: 100%;
    background: transparent;

`

const StyledSelectList = styled.ul`
    height: ${props => props.height};
    width: 138px;
    list-style-type: none;
    padding: 4px 5px;
    margin: 0;
    background: ${colors.brandingColors.white};
    font-size: 12px;
    transition: all 1s;
    position: absolute;
    top: calc(100% + (42px - 16px) / 2);
    z-index: 2;
    opacity: ${props => props.selectlistopacity};
    animation: ${openning} .5s;
    box-sizing: content-box;
`

const StyledSelectItem = styled.li`

    padding-left: 10px;
    padding-top: 12px;
    padding-right: 28px;
    padding-bottom: 10px;
    margin: 0;
    background: inherit;
    text-align: left;
    font-family: 'Poppins';
    font-size: 12px;
    cursor: pointer;
    padding-block: 3.25px;
    width: 100px;
    color: ${colors.grey[6]};
    box-sizing: content-box;

    &:hover {

        background-color: ${colors.brandingColors.primary};
        color: ${colors.brandingColors.white};

    }

`

function Select({changer, ...props}) {
    
    let [isOpened, setIsOpened] = useState(false)

    return (

        <StyledSelect width={props.width}>

            <StyledSelectButton onClick={() => {
                setIsOpened(!isOpened)
                }} $textcolor={colors.grey[6]}>{props.buttontext}</StyledSelectButton>
            <StyledSelectList hidden={!isOpened} $textcolor={colors.grey[6]}>
            {props.selectlist.map((element, index) => 
                <StyledSelectItem onClick={() => {

                    changer(element)

                    setIsOpened(!isOpened)
                    
                }} width={props.width} key={index} $textcolor={colors.grey[6]}>{element}</StyledSelectItem>  
            )}
            </StyledSelectList>

        </StyledSelect>

    )
}

export default Select