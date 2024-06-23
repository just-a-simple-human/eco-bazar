import React, {  } from "react";
import { Page } from "#common/common.style";
import Breadcrumbs from "#components/Breadcrumbs/Breadcrumbs.jsx";
import ShopDiscountBanner from "#features/ShopDiscountBanner/ShopDiscountBanner.jsx";
import ShopFilter from "#features/ShopFiltersBlock/ShopFiltersBlock.jsx";
import ShopProducts from "#features/ShopProducts/ShopProducts.jsx";
import ShopPaginationController from "#features/ShopPaginationController/ShopPaginationController.jsx";

function Shop() {

  return (
    <Page>
      <Breadcrumbs breadcrumbWay={[{ title: "Shop", href: "/shop" }]} />
      <ShopDiscountBanner />
      <ShopFilter />
      <ShopProducts />
      <ShopPaginationController />
    </Page>
  );
}

export default Shop;
