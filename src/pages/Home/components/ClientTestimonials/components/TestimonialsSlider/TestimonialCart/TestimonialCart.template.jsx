import React from 'react'
import { Client, ClientInfo, ClientInfoContainer, TestimonialCartContainer, TestimonialComment } from './TestimonialCart.style';
import QuotationMark from '#svg/QuotationMark';
import { Body, StyledImg, colors } from '#common/common.style';

function TestimonialCart({move, setSliderMovement, testimonial}) {
  return (
    <TestimonialCartContainer
        $move={move}
        onAnimationEnd={() => setSliderMovement(null)}
    >
      <QuotationMark />
      <TestimonialComment>
        <Body.Small $textcolor={colors.grey[7]}>
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
            sodales. Donec sed neque eget
        </Body.Small>
      </TestimonialComment>
      <Client>
        <ClientInfoContainer>
            <StyledImg src={testimonial.clientImg} />
            <ClientInfo>
            <Body.Medium $medium="true">{testimonial.clientName}</Body.Medium>
            <Body.Small $textcolor={colors.grey[4]}>Customer</Body.Small>
            </ClientInfo>
        </ClientInfoContainer>
      </Client>
    </TestimonialCartContainer>
  )
}

export default TestimonialCart