import React from 'react'
import Navbar from './pages/Navbar'
import DiscountHeader from './pages/DiscountHeader'
import HeroSection from './pages/HeroSection'
import RidesType from './pages/RidesType'
import NewMemberDiscount from './pages/NewMemberDiscount'
import FleetSection from './pages/FleetSection'
// import Destination from './pages/Destination'
import WhyChooseUs from './pages/WhyChooseUs'
import FAQ from './pages/FAQ'
import DownloadApp from './pages/DownloadApp'
import Footer from './pages/Footer'
import BookYourComfort from './pages/booking/BookYourComfort'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="h-[82px]" />
      <DiscountHeader/>
      <HeroSection/>
      <RidesType/>
      <NewMemberDiscount/>
      <FleetSection/>
      {/* <Destination/> */}
      <WhyChooseUs/>
      <BookYourComfort/>
      <FAQ/>
      <DownloadApp/>
      <Footer/>
    </div>
  )
}

export default App