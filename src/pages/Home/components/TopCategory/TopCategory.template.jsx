import React from "react";
import { Headings } from "#common/common.style";
import * as cats from "#mock/categories/categories";
import Line from "#svg/Line";
import { StyledTopCategory, TopCategoryHeading } from "./TopCategory.style";
import CategorySlider from "./components/CategorySlider/CategorySlider.template";

function TopCategory() {
  let categories = [
    cats.vegetablesCategory,
    cats.freshFruitCategory,
    cats.fishCategory,
    cats.meatCategory,
    cats.softDrinksCategory,
    cats.snacksCategory,
  ];
  return (
    <StyledTopCategory>
      <TopCategoryHeading>
        <Headings.Heading03 as={"h2"} $semibold="true">
          Top Category
        </Headings.Heading03>
        <Line />
      </TopCategoryHeading>
      <CategorySlider categories={categories} />
    </StyledTopCategory>
  );
}

export default TopCategory;
