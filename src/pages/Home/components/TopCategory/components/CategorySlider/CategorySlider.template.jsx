import React, { useState } from "react";
import { SliderButton } from "#common/common.style";
import ArrowLeft from "#svg/ArrowLeft";
import ArrowRight from "#svg/ArrowRight";
import createSlider from "../../../../../../components/ui/sliders/Slider.script";
import { Slider, SliderContainer } from "./CategorySlider.style";
import CategoryCart from "./CategoryCart/CategoryCart.template";

function CategorySlider({ categories }) {
  let [indexOfFirst, setIndexOfFirst] = useState(0);
  let [slideMovement, setSlideMovement] = useState(null);

  return (
    <SliderContainer>
      <SliderButton
        disabled={!!slideMovement}
        onClick={() => {
          indexOfFirst === 0
            ? setIndexOfFirst(categories.length - 1)
            : setIndexOfFirst(indexOfFirst - 1);
          setSlideMovement("toLeft");
        }}
      >
        <ArrowLeft />
      </SliderButton>

      <Slider>
        {createSlider(categories.map((e) => (
          <CategoryCart
            slideMovement={slideMovement}
            setSlideMovement={setSlideMovement}
            category={e}
          />
        )), indexOfFirst, 6)}
      </Slider>

      <SliderButton
        disabled={!!slideMovement}
        onClick={() => {
          indexOfFirst === categories.length - 1
            ? setIndexOfFirst(0)
            : setIndexOfFirst(indexOfFirst + 1);
          setSlideMovement("toRight");
        }}
      >
        <ArrowRight />
      </SliderButton>
    </SliderContainer>
  );
}

export default CategorySlider;