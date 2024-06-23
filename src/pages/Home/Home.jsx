import React from "react";
import { Page } from "#common/common.style";
import WelcomeBlock from "#features/WelcomeBlock/WelcomeBlock.jsx";
import FeaturedProducts from "#features/FeaturedProducts/FeaturedProducts.jsx";
import TopCategory from "#features/TopCategory/TopCategory.jsx";
import SaleBanners from "#features/SaleBanners/SaleBanners.jsx";
import NewestProducts from "#features/NewestProducts/NewestProducts.jsx";
import ClientTestimonials from "#features/ClientTestimonials/ClientTestimonials.jsx";
import InstLinks from "#features/InstLinks/InstLinks.jsx";

function Homepage() {
  return (
    <Page height="4746px">
      <WelcomeBlock />
      <FeaturedProducts />
      <TopCategory />
      <SaleBanners />
      <NewestProducts />
      <ClientTestimonials />
      <InstLinks />
    </Page>
  );
}

export default Homepage;
