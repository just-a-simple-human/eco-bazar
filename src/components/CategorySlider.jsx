import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Body, SliderButton, StyledImg, colors } from '../default'
import SliderArrowLeft from '../sprites/SliderArrowLeft'
import SliderArrowRight from '../sprites/SliderArrowRight'
import { $moveToLeft, $moveToRight } from '../animations/CategorySliderAnimation'
import { Link } from 'react-router-dom'

const SliderContainer = styled.section`
  
  min-width: 1490px;
  height: 210px;

  display: flex;
  gap: 40px;
  align-items: center;

`

const Slider = styled.div`
  
  width: 1320px;
  overflow: hidden;

  display: flex;
  gap: 24px;

`

const CategoryCart = styled(Link)`
  
  width: 200px;
  height: 210px;
  padding-top: 32px;
  padding-bottom: 24px;
  border-radius: 6px;
  flex-shrink: 0;

  position: relative;
  right:224px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  border: 1px solid #EDEDED;

  ${props => props.$move === 'toRight' && css`animation: ${$moveToLeft} 0.25s linear forwards;`}
  ${props => props.$move === 'toLeft' && css`animation: ${$moveToRight} 0.25s linear forwards;`}
  transition: all 0.5s;

  &:hover {

    border: 1px solid ${colors.brandingColors.hardPrimary};

    & p:first-of-type {

      color: ${colors.brandingColors.hardPrimary};

    }

  }

`

const CategoryCartInfo = styled.div`
  
  height: 54px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;

`

function CategorySlider({categories}) {

  let [indexOfFirst, setIndexOfFirst] = useState(0)
  let [slide$movement, setSlide$movement] = useState(null)
  let items = categories.map((e)=>
  <CategoryCart $move={slide$movement} onAnimationEnd={()=>setSlide$movement(null)}>
    <StyledImg src={e.icon}/>
    <CategoryCartInfo>
      <Body.Large $medium='true'>{e.name}</Body.Large>
      <Body.Small $textcolor={colors.grey[5]}>{e.productsCount} products</Body.Small>
    </CategoryCartInfo>
  </CategoryCart>)

  return (

    <SliderContainer>

      <SliderButton disabled={!!slide$movement} onClick={()=>{
        (indexOfFirst===0) ? setIndexOfFirst(categories.length-1) : setIndexOfFirst(indexOfFirst-1)
        setSlide$movement('toLeft')
        }}>
        <SliderArrowLeft/>
      </SliderButton>

      <Slider>
        {[
          {...items.at(indexOfFirst-1), key: Math.random()},
          ...items.slice(indexOfFirst, indexOfFirst+6).map(element=>{return {...element, key: Math.random()}}),
          ...items.slice(-(indexOfFirst+6), indexOfFirst+1).map(element=>{return {...element, key: Math.random()}})
        ]}
      </Slider>

      <SliderButton disabled={!!slide$movement} onClick={()=>{
        (indexOfFirst === (categories.length-1)) ? setIndexOfFirst(0) : setIndexOfFirst(indexOfFirst+1)
        setSlide$movement('toRight')
      }}>
        <SliderArrowRight/>
      </SliderButton>

    </SliderContainer>
  )
}

export default CategorySlider