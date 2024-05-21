import React, { useContext } from "react";
import ProductCartLarge from "#components/ProductCartLarge";
import { ShopContext } from "#context";
import { ShopProductsContainer } from "./ShopProducts.style";



function ShopProducts({ productList }) {
  let { activeFilters, activePage } = useContext(ShopContext);

  return (
    <ShopProductsContainer>
      {productList
        ?.slice(
          (activePage - 1) * activeFilters.productsPerPage,
          activePage * activeFilters.productsPerPage,
        )
        .map((product, i) => {
          return (
            <ProductCartLarge key={`${product.id}${i}`} product={product} />
          );
        })}
    </ShopProductsContainer>
  );
}

export default ShopProducts;
