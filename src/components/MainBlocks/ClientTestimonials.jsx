import React, { useState } from 'react'
import styled from 'styled-components'
import { Headings, SliderButton, colors } from '../../default'
import Line from '../../sprites/Line'
import TestimonialsSlider from '../TestimonialsSlider'
import { DianneRussell, EleanorPena, RobertFox } from '../../pseudoFetch'
import SliderArrowLeft from '../../sprites/SliderArrowLeft'
import SliderArrowRight from '../../sprites/SliderArrowRight'

const ClientTestimonialsContainer = styled.section`
    
  width: 100vw;
  height: 630px;
  margin-top: 100px;
  padding-block: 100px;
  padding-inline: 300px;
  
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;

  background: ${colors.grey[0]};

`

const ClientTestimonialsHeadingContainer = styled.div`
  
  width: 1320px;
  height: 68px;

  display: flex;
  justify-content: space-between;
  align-items: center;

`

const ClientTestimonialsHeading = styled.div`
  
  width: fit-content;

  display: flex;
  flex-direction: column;
  gap: 16px;

`

const SliderButtonsContainer = styled.div`
  
  width: 102px;
  height: 45px;

  display: flex;
  justify-content: space-between;

`

const SliderTracker = styled.div`
  
  width: fit-content;
  height: 8px;

  display: flex;
  gap: 8px;

`

const SliderTrackerButton = styled.button`
  
  min-height: 8px;
  min-width: ${props => props.$$active ? '16px' : '8px'};
  border-radius: 8px;

  background: ${props => props.$active ? colors.brandingColors.primary : colors.greenGrey[2]};

`

function ClientTestimonials() {

  let [indexOfFirst, setIndexOfFirst] = useState(0)
  let [slide$movement, setSlide$movement] = useState(null)
  let testimonials = [
    RobertFox,
    DianneRussell,
    EleanorPena,
  ]

  return (
    <ClientTestimonialsContainer>
      <ClientTestimonialsHeadingContainer>
        <ClientTestimonialsHeading>
          <Headings.Heading03 as={'h2'} $semibold='true'>Client Testimonials</Headings.Heading03>
          <Line/>
        </ClientTestimonialsHeading>
        <SliderButtonsContainer>
          <SliderButton 
          disabled={!!slide$movement} 
          onClick={()=>{
            (indexOfFirst===0) ? setIndexOfFirst(testimonials.length-1) : setIndexOfFirst(indexOfFirst-1)
            setSlide$movement('toLeft')
          }}>
            <SliderArrowLeft/>
          </SliderButton>
          <SliderButton 
            disabled={!!slide$movement} 
            onClick={()=>{
              (indexOfFirst === (testimonials.length-1)) ? setIndexOfFirst(0) : setIndexOfFirst(indexOfFirst+1)
              setSlide$movement('toRight')
            }}>
            <SliderArrowRight/>
          </SliderButton>
        </SliderButtonsContainer>
      </ClientTestimonialsHeadingContainer>

      <TestimonialsSlider 
      testimonials={testimonials}
      indexOfFirst={indexOfFirst}
      $move={slide$movement}
      setSlide$movement={setSlide$movement}
      />

      <SliderTracker>
        <SliderTrackerButton $active={(indexOfFirst === 2) ? 'true' : null} onClick={()=>{
          if (indexOfFirst === 1) {
            setSlide$movement('toRight')
          }
          if (indexOfFirst === 0) {
            setSlide$movement('toLeft')
          }
          setIndexOfFirst(2)
        }}/>
        <SliderTrackerButton $active={(indexOfFirst === 0) ? 'true' : null} onClick={()=>{
          if (indexOfFirst === 2) {
            setSlide$movement('toRight')
          }
          if (indexOfFirst === 1) {
            setSlide$movement('toLeft')
          }
          setIndexOfFirst(0)
        }}/>
        <SliderTrackerButton $active={(indexOfFirst === 1) ? 'true' : null} onClick={()=>{
          if (indexOfFirst === 0) {
            setSlide$movement('toRight')
          }
          if (indexOfFirst === 2) {
            setSlide$movement('toLeft')
          }
          setIndexOfFirst(1)
        }}/>
      </SliderTracker>

    </ClientTestimonialsContainer>
  )
}

export default ClientTestimonials
