import React from "react";
import { Headings } from "#common/common.style";
import Line from "#svg/Line";
import ProductCart from "#components/ProductCartMedium/ProductCartMedium.jsx";
import ProductApi from "#mock/products/products";
import { FeaturedProductsContainer, FeaturedProductsHeadingContainer, FeaturedProductsMainContainer } from "./FeaturedProducts.style";
import ProductСollections from "./components/ProductСollections/ProductСollections"


function FeaturedProducts() {
  return (
    <FeaturedProductsMainContainer>
      <FeaturedProductsHeadingContainer>
        <Headings.Heading03 as={"h2"} $semibold="true">
          Featured Products
        </Headings.Heading03>
        <Line />
      </FeaturedProductsHeadingContainer>

      <FeaturedProductsContainer>
        {new ProductApi().getProducts(0, 5).map((element, index) => (
          <ProductCart key={index} product={element} />
        ))}
      </FeaturedProductsContainer>
      <ProductСollections />
    </FeaturedProductsMainContainer>
  );
}

export default FeaturedProducts;
