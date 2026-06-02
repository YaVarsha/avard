import { Helmet } from "react-helmet-async"

import HeroSlider from "../components/HeroSlider"
// import Mission from "../components/Mission"
// import Programs from "../components/Programs"
import AboutSection from "../components/AboutSection"
// import ImpactStats from "../components/ImpactStats"
import SuccessStorySection from "../components/SuccessStorySection";
import CurtainRaiser from "../components/CurtainRaiser";
import Testimonials from "../components/Testimonials"
import DonationSection from "../components/DonationSection"
import Newsletter from "../components/Newsletter"
import CommunityPrograms from "../components/CommunityPrograms"
import RuralDevelopmentWeek from "../components/RuralDevelopmentWeek"
import AwardsRecognition from "../components/AwardsRecognition"
import PartnersSection from "../components/PartnersSection"
import PeopleHighlights from "../components/PeopleHighlights"

function Home() {
  return (

    <>

      {/* SEO Meta Tags */}
      <Helmet>
        <title>AVARD | Association of Voluntary Agencies for Rural Development</title>

        <meta
          name="description"
          content="AVARD is a national level voluntary organisation working for rural development, sustainable agriculture, and social empowerment across India."
        />

        <meta
          name="keywords"
          content="AVARD NGO, Rural Development India, Agriculture NGO, Women Empowerment, NGO India"
        />

      </Helmet>


      {/* Page Sections */}
      
      <HeroSlider/>

      {/* <Mission /> */}

      {/* <Programs /> */}

      <AboutSection/>

      <PeopleHighlights />

      <CommunityPrograms />

      <RuralDevelopmentWeek />

      {/* <ImpactStats /> */}

      <SuccessStorySection />

      <CurtainRaiser />

      <AwardsRecognition />

      <PartnersSection />

      <Testimonials />

      <DonationSection />

      <Newsletter />

    </>

  )

}

export default Home
