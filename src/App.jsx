import FleetSection from './pages/fleet/FleetSection'
// import Destination from './pages/Destination'
import WhyChooseUs from './pages/whychoose/WhyChooseUs'
import DownloadApp from './pages/downloadapp/DownloadApp'
import Footer from './pages/footer/Footer'
import BookYourComfort from './pages/booking/BookYourComfort'
import Navbar from './pages/navbar/Navbar'
import DiscountHeader from './pages/navbar/DiscountHeader'
import HeroSection from './pages/hero/HeroSection'
import RidesType from './pages/rides/RidesType'
import NewMemberDiscount from './pages/discount/NewMemberDiscount'
import FAQ from './pages/faq/FAQ'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[70px] md:pt-[82px]" />
      <DiscountHeader />
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