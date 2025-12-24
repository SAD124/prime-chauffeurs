import FleetSection from './pages/fleet/FleetSection'
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
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactPage from './pages/navbar/ContactPage'

const App = () => {
  return (
    <BrowserRouter>
  <Navbar />

  <div className="mt-[82px]">
    <Routes>
      <Route path="/" element={
        <>
          <DiscountHeader />
          <HeroSection/>
          <RidesType/>
          <NewMemberDiscount/>
          <FleetSection/>
          <WhyChooseUs/>
          <BookYourComfort/>
          <FAQ/>
          <DownloadApp/>
        </>
      }/>

      <Route path="/fleet" element={<FleetSection />} />
      <Route path="/choose" element={<WhyChooseUs />} />
      <Route path="/download" element={<DownloadApp/>} />
      <Route path="/book" element={<BookYourComfort/>} />
      <Route path="/contact" element={<ContactPage/>} />
    </Routes>
  </div>

  <Footer />
</BrowserRouter>

  )
}

export default App