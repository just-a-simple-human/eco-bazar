import React from "react";
import createSlider from "#components/ui/sliders/Slider.script";
import { Slider, TestimonialsSliderContainer } from "./TestimonialsSlider.style";
import TestimonialCart from "./TestimonialCart/TestimonialCart";

function TestimonialsSlider({
    testimonials,
    indexOfFirst,
    sliderMovement,
    setSliderMovement,
  }) {
  return (
    <TestimonialsSliderContainer>
      <Slider>
        {createSlider(
          testimonials.map((e) => (
            <TestimonialCart 
              move={sliderMovement} 
              setSliderMovement={setSliderMovement} 
              testimonial={e}
            />
          )), indexOfFirst, 3
        )}
      </Slider>
    </TestimonialsSliderContainer>
  );
}

export default TestimonialsSlider;
