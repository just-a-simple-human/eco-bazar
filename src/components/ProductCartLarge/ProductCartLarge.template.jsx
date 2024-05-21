import React from "react";
import { Body, StyledImg, colors } from "#common/common.style";
import { Link } from "react-router-dom";
import AddToCartButton from "#ui/b/AddToCartButton";
import AddToWishlistButton from "#ui/b/AddToWishlistButton";
import QuickViewButton from "#ui/b/QuickViewButton";
import { ProductCartContainer, ProductImg, ProductInfo, ProductRating } from "./ProductCartLarge.style";

function ProductCartLarge({ product }) {
  return (
    <ProductCartContainer>
      <AddToWishlistButton />
      <QuickViewButton />
      <ProductImg to={`/products/product-${product.id}`}>
        {product.img ? (
          <StyledImg src={product.img} />
        ) : (
          <Body.Medium $medium="true">{product.name} Picture</Body.Medium>
        )}
      </ProductImg>
      <ProductInfo>
        <Body.Small
          as={Link}
          to={`/products/product-${product.id}`}
          $textcolor={colors.grey[7]}
        >
          {product.name}
        </Body.Small>
        <Body.Medium $medium="true">
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(product.price)}
        </Body.Medium>
        <ProductRating>{product.showRating(12)}</ProductRating>
        <AddToCartButton product={product} />
      </ProductInfo>
    </ProductCartContainer>
  );
}

export default ProductCartLarge;
