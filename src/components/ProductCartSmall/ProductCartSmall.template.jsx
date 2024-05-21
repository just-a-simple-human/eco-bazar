import React from "react";
import { Body, colors } from "#common/common.style";
import AddToCartButton from "#ui/b/AddToCartButton";
import AddToWishlistButton from "#ui/b/AddToWishlistButton";
import QuickViewButton from "#ui/b/QuickViewButton";
import { Link } from "react-router-dom";
import { ProductButtons, ProductCartContainer, ProductContainer, ProductImg, ProductInfo, ProductRating, SwipeContainer } from "./ProductCartSmall.style";



function ProductCart({ product }) {
  return (
    <ProductCartContainer>
      <Link to={`product-${product.id}`}>
        <ProductImg src={product.img} />
      </Link>
      <ProductContainer>
        <Body.Small
          as={Link}
          to={`product-${product.id}`}
          $textcolor={colors.grey[7]}
        >
          {product.name}
        </Body.Small>
        <SwipeContainer>
          <ProductInfo>
            <Body.Medium $medium="true">${product.price}</Body.Medium>
            <ProductRating>{product.showRating("16")}</ProductRating>
          </ProductInfo>
          <ProductButtons>
            <AddToCartButton product={product} />
            <AddToWishlistButton />
            <QuickViewButton />
          </ProductButtons>
        </SwipeContainer>
      </ProductContainer>
    </ProductCartContainer>
  );
}

export default ProductCart;
