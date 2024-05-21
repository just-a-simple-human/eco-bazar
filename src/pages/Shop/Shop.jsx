import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Page } from "#common/common.style";
import Breadcrumbs from "#components/Breadcrumbs";
import { ShopContext } from "#context";
import ProductApi from "#mock/products/products";
import { Body } from "#common/common.style";
import ShopDiscountBanner from './components/ShopDiscountBanner/ShopDiscountBanner.template';
import ShopFilter from './components/ShopFiltersBlock/ShopFiltersBlock.template';
import ShopProducts from './components/ShopProducts/ShopProducts.template';
import ShopPaginationController from "./components/ShopPaginationController/ShopPaginationController.template";

function Shop() {
  const breadcrumb = [{ title: "Shop", href: "/shop" }];
  let [activeFilters, setActiveFilters] = useState({
    category: null,
    price: null,
    rating: null,
    productsPerPage: 8,
    sort: "Latest",
  });

  const productApi = useMemo(()=>new ProductApi(), [])

  let [products, setProducts] = useState([]);

  let [productsFound, setProductsFound] = useState([]);
  useEffect(()=>{
    setProductsFound(
      productApi.getProductsCount(activeFilters)
    )
  }, [activeFilters, productApi])

  let [activePage, setActivePage] = useState(1);
  let [maxActivePage, setMaxActivePage] = useState(1);
  
  const fetchProducts = useCallback(function (count, activeFilters, products) {
    // Fetch some products from server
    const fetchedProducts = productApi.getProducts(products.length, count, activeFilters);

    // Add fetched products into product list
    setProducts((prev) => {
      return prev.concat(fetchedProducts)
    });
  }, [productApi])

  useEffect(() => {
    if ((products.length < maxActivePage * activeFilters.productsPerPage) && (products.length < productsFound)) {
      fetchProducts(activeFilters.productsPerPage, activeFilters, products)
    }
  }, [fetchProducts, activeFilters, maxActivePage, products, productsFound]);

  return (
    <ShopContext.Provider
      value={{
        products,
        setProducts,
        activeFilters,
        setActiveFilters,
        productsFound,
        setProductsFound,
        fetchProducts,
        activePage,
        setActivePage,
        maxActivePage,
        setMaxActivePage
      }}
    >
      <Page>
        <Breadcrumbs breadcrumbWay={breadcrumb} />
        <ShopDiscountBanner />
        <ShopFilter />
        {
          productsFound ?
          <>
            <ShopProducts productList={products} productsFound={productsFound}/>
            <ShopPaginationController />
          </> :
          <Body.Large $medium='true' style={{
            marginBlock: "320px"
          }}>
            Sorry, there was nothing found!
          </Body.Large>
        }
      </Page>
    </ShopContext.Provider>
  );
}

export default Shop;
