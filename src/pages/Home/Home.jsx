import React from "react";
import { Page } from "#common/common.style";
import WelcomeBlock from './components/WelcomeBlock/WelcomeBlock.template';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts.template';
import TopCategory from './components/TopCategory/TopCategory.template';
import SaleBanners from './components/SaleBanners/SaleBanners.template';
import NewestProducts from './components/NewestProducts/NewestProducts.template';
import ClientTestimonials from './components/ClientTestimonials/ClientTestimonials.template';
import InstLinks from './components/InstLinks/InstLinks.template';

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
