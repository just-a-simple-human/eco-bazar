import React from 'react'
import styled, { css } from 'styled-components'
import QuotationMark from '../sprites/QuotationMark'
import { Body, StyledImg, colors } from '../default'
import { $moveToLeft, $moveToRight } from '../animations/TestimotionalsSliderAnimation'

const TestimonialsSliderContainer = styled.section`
    
    width: 1320px;
    height: 254px;
    overflow: hidden;

`

const Slider = styled.div`
    
    display: flex;
    gap: 24px;

`

const TestimonialCart =styled.div`
    
    min-width: 424px;
    height: 254px;
    padding: 24px;

    position: relative;
    right: 448px;

    display: flex;
    flex-direction: column;

    background: ${colors.brandingColors.white};

    ${props => props.$move === 'toRight' && css`animation: ${$moveToLeft} 0.25s linear forwards;`}
    ${props => props.$move === 'toLeft' && css`animation: ${$moveToRight} 0.25s linear forwards;`}

`

const TestimonialComment = styled.div`
    
    width: 376px;
    max-height: 84px;
    margin-top: 16px;

    flex-shrink: 0;
    display: flex;
    align-items: center;

`

const Client = styled.div`
    
    height: 56px;
    margin-top: 24px;

    display: flex;
    justify-content: space-between;
    align-items: center;

`

const ClientInfoContainer = styled.div`
    
    width: fit-content;

    display: flex;
    gap: 12px;
    align-items: center;
    flex-wrap: wrap;

`

const ClientInfo = styled.div`
    
    height: 45px;

    display: flex;
    flex-direction: column;

`

function TestimonialsSlider({testimonials, indexOfFirst, $move, setSlide$movement}) {
    testimonials = testimonials.map((e)=>
        <TestimonialCart $move={$move} onAnimationEnd={()=>setSlide$movement(null)}>
            <QuotationMark/>
            <TestimonialComment>
                <Body.Small $textcolor={colors.grey[7]}>
                    Pellentesque eu nibh eget mauris congue mattis 
                    mattis nec tellus. Phasellus imperdiet elit eu magna 
                    dictum, bibendum cursus velit sodales. Donec sed 
                    neque eget
                </Body.Small>
            </TestimonialComment>
            <Client>
                <ClientInfoContainer>
                    <StyledImg src={e.clientImg}/>
                    <ClientInfo>
                        <Body.Medium $medium='true'>{e.clientName}</Body.Medium>
                        <Body.Small $textcolor={colors.grey[4]}>Customer</Body.Small>
                    </ClientInfo>
                </ClientInfoContainer>
            </Client>

        </TestimonialCart>
    )
    return (
        <TestimonialsSliderContainer>
            <Slider>
                {[{...testimonials.at(indexOfFirst-1), key: Math.random()},
                ...testimonials.slice(indexOfFirst, indexOfFirst+3).map((e)=>{return {...e, key: Math.random()}}),
                ...testimonials.slice(-(indexOfFirst+3), indexOfFirst+1).map((e)=>{return {...e, key: Math.random()}})
                ]}
            </Slider>
        </TestimonialsSliderContainer>
    )
}

export default TestimonialsSlider