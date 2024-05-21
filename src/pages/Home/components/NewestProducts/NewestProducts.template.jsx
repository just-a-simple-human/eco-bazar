import React from "react";
import { Body, Headings, colors } from "#common/common.style";
import Line from "#svg/Line";
import ShopNowArrow from "#svg/ShopNowArrow";
import ProductCart from "#components/ProductCartMedium";
import ProductApi from "#mock/products/products";
import { NewestProductsContainer, NewestProductsHeading, NewestProductsHeadingContainer, ProductsContainer, ViewAllButton } from "./NewestProducts.style";



function NewestProducts() {
  const productApi = new ProductApi()
  const newestProductsList = productApi.getProducts(5, 5);
  return (
    <NewestProductsContainer>
      <NewestProductsHeadingContainer>
        <NewestProductsHeading>
          <Headings.Heading03 as={"h2"} $semibold="true">
            Newest Products
          </Headings.Heading03>
          <Line />
        </NewestProductsHeading>
        <ViewAllButton>
          <Body.Medium
            $textcolor={colors.brandingColors.primary}
            $medium="true"
          >
            View All
          </Body.Medium>
          <ShopNowArrow
            width="15"
            height="12.05"
            color={colors.brandingColors.primary}
          />
        </ViewAllButton>
      </NewestProductsHeadingContainer>

      <ProductsContainer>
        {newestProductsList.map((element, index) => (
          <ProductCart key={index} product={element} />
        ))}
      </ProductsContainer>
    </NewestProductsContainer>
  );
}

export default NewestProducts;
