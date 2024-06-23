import React, { useState } from "react";
import { Headings, SliderButton } from "#common/common.style";
import {
  DianneRussell,
  EleanorPena,
  RobertFox,
} from "#mock/testimonials/testimonials";
import ArrowLeft from "#svg/ArrowLeft";
import ArrowRight from "#svg/ArrowRight";
import Line from "#svg/Line";
import { ClientTestimonialsContainer, ClientTestimonialsHeading, ClientTestimonialsHeadingContainer, SliderButtonsContainer, SliderTracker, SliderTrackerButton } from "./ClientTestimonials.style";
import TestimonialsSlider from "./components/TestimonialsSlider/TestimonialsSlider.jsx";



function ClientTestimonials() {
  let [indexOfFirst, setIndexOfFirst] = useState(0);
  let [sliderMovement, setSliderMovement] = useState(null);
  let testimonials = [RobertFox, DianneRussell, EleanorPena];

  return (
    <ClientTestimonialsContainer>
      <ClientTestimonialsHeadingContainer>
        <ClientTestimonialsHeading>
          <Headings.Heading03 as={"h2"} $semibold="true">
            Client Testimonials
          </Headings.Heading03>
          <Line />
        </ClientTestimonialsHeading>
        <SliderButtonsContainer>
          <SliderButton
            disabled={!!sliderMovement}
            onClick={() => {
              indexOfFirst === 0
                ? setIndexOfFirst(testimonials.length - 1)
                : setIndexOfFirst(indexOfFirst - 1);
              setSliderMovement("toLeft");
            }}
          >
            <ArrowLeft />
          </SliderButton>
          <SliderButton
            disabled={!!sliderMovement}
            onClick={() => {
              indexOfFirst === testimonials.length - 1
                ? setIndexOfFirst(0)
                : setIndexOfFirst(indexOfFirst + 1);
              setSliderMovement("toRight");
            }}
          >
            <ArrowRight />
          </SliderButton>
        </SliderButtonsContainer>
      </ClientTestimonialsHeadingContainer>

      <TestimonialsSlider
        testimonials={testimonials}
        indexOfFirst={indexOfFirst}
        sliderMovement={sliderMovement}
        setSliderMovement={setSliderMovement}
      />

      <SliderTracker>
        <SliderTrackerButton
          $active={indexOfFirst === 2 ? "true" : null}
          onClick={() => {
            if (indexOfFirst === 1) {
              setSliderMovement("toLeft");
            }
            if (indexOfFirst === 0) {
              setSliderMovement("toRight");
            }
            setIndexOfFirst(2);
          }}
        />
        <SliderTrackerButton
          $active={indexOfFirst === 0 ? "true" : null}
          onClick={() => {
            if (indexOfFirst === 2) {
              setSliderMovement("toRight");
            }
            if (indexOfFirst === 1) {
              setSliderMovement("toLeft");
            }
            setIndexOfFirst(0);
          }}
        />
        <SliderTrackerButton
          $active={indexOfFirst === 1 ? "true" : null}
          onClick={() => {
            if (indexOfFirst === 0) {
              setSliderMovement("toRight");
            }
            if (indexOfFirst === 2) {
              setSliderMovement("toLeft");
            }
            setIndexOfFirst(1);
          }}
        />
      </SliderTracker>
    </ClientTestimonialsContainer>
  );
}

export default ClientTestimonials;
