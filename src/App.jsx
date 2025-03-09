import Header from './components/Header/Header'
import HeroSection from "./Sections/HeroSection/Hero";
import OfferedCourses from "./Sections/OfferedCourses/Courses";
import AboutUs from "./Sections/AboutUsSection/AboutUs"
import Empower from './Sections/EmpowerSection/Empower';
import Empower2 from './Sections/Empower2Section/Empower2';
import WhyUs from './Sections/WhyUsSection/WhyUs';
// import WhatWeConduct from "./components/WhatWeConduct";
// import CustomerReviews from "./components/CustomerReviews";
import ContactUs from "./Sections/ContactUs/ContactUs";
// import Footer from "./components/Footer";
import styles from "./App.module.css";



function App() {
  return (
    <div>
      {/* <Header /> */}
      {/* <main className={styles.mainContainer}> */}
        <HeroSection />
        <AboutUs />
        <Empower />
        <Empower2 />
        <WhyUs />
        <ContactUs />
        <OfferedCourses />
        {/* <WhatWeConduct />
        <WhyTalentScope />
        <CustomerReviews />
        <ContactUs /> */}
      {/* </main> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App
