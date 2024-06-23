import ProductCartLarge from "#components/ProductCartLarge/ProductCartLarge.jsx";
import { useEffect } from "react";
import { ShopProductsContainer } from "./ShopProducts.style";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, updateProductsFound } from "#store/shopSlice.js";

function ShopProducts() {

  const productList = useSelector(state => state.shop.products)
  const productsFound = useSelector(state => state.shop.productsFound)
  const filters = useSelector(state => state.shop.filters)
  const activePage = useSelector(state => state.shop.activePage)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateProductsFound(filters))
  }, [dispatch, filters])
  
  useEffect(() => {
    if ((productList.length < filters.productsPerPage * activePage) && (productList.length < productsFound)) {
      dispatch(fetchProducts(filters.productsPerPage * activePage))
    }
  }, [dispatch, filters.productsPerPage, activePage, productList.length, productsFound])

  return (
    <ShopProductsContainer height={filters.productsPerPage / 4 * 407 + (filters.productsPerPage / 4 - 1) * 24 + "px"}>
      {productList
        ?.slice(
          (activePage - 1) * filters.productsPerPage,
          activePage * filters.productsPerPage,
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
