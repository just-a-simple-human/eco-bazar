import React from "react";
import { Body, colors, StyledImg } from "#common/common.style";
import { Link } from "react-router-dom";
import AddToCartButton from "#ui/b/AddToCartButton";
import QuickViewButton from "#ui/b/QuickViewButton";
import AddToWishlistButton from "#ui/b/AddToWishlistButton";
import { ProductCartContainer, ProductImg, ProductInfo, ProductRating } from "./ProductCartMedium.style";



function ProductCart({ product }) {
  return (
    <ProductCartContainer>
      <AddToWishlistButton />
      <QuickViewButton />
      <ProductImg to={`product-${product.id}`}>
        <StyledImg src={product.img} />
      </ProductImg>
      <ProductInfo>
        <Body.Small
          as={Link}
          to={`product-${product.id}`}
          $textcolor={colors.grey[7]}
        >
          {product.name}
        </Body.Small>
        <Body.Medium $medium="true">${product.price}</Body.Medium>
        <ProductRating>{product.showRating()}</ProductRating>
        <AddToCartButton product={product} />
      </ProductInfo>
    </ProductCartContainer>
  );
}

export default ProductCart;
