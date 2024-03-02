import React from 'react'
import { Page } from '../default'
import WelcomeBlock from '../components/MainBlocks/WelcomeBlock'
import FeaturedProducts from '../components/MainBlocks/FeaturedProducts'
import TopCategory from '../components/MainBlocks/TopCategory'
import SaleBanners from '../components/MainBlocks/SaleBanners'
import NewestProducts from '../components/MainBlocks/NewestProducts'
import ClientTestimonials from '../components/MainBlocks/ClientTestimonials'
import InstLinks from '../components/MainBlocks/InstLinks'
function Homepage() {
  return (
    <Page height='4746px'>
        <WelcomeBlock />
        <FeaturedProducts/>
        <TopCategory/>
        <SaleBanners/>
        <NewestProducts/>
        <ClientTestimonials/>
        <InstLinks/>
    </Page>
  )
}

export default Homepage