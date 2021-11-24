import React from 'react'
import FeaturedProducts from '../components/home/FeaturedProducts'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import NewArrival from '../components/home/NewArrival'
import HomeTop from '../components/home/HomeTop'

const HomePage = () => {
  return (
    <>
      <HomeTop/>
      <FeaturedProducts />
      <NewArrival/>
      <Collection />
      <Categories />
    </>
  )
}

export default HomePage
