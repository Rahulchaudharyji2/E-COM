import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import ClientReview from '../components/ClientReview'
import AnnouncementBar from '../components/AnnouncementBar'
// import Reel from '../components/Reel'


const Home = () => {
  return (
    <div>
      <AnnouncementBar/>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      {/* <Reel/> */}
      <ClientReview/>
      <OurPolicy/>
      <NewsletterBox/>
      
    </div>
  )
}

export default Home
