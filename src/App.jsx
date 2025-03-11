import Header from './components/Header/Header'
import HeroSection from "./Sections/HeroSection/Hero";
// import OfferedCourses from "./Sections/OfferedCourses/Courses";
import AboutUs from "./Sections/AboutUsSection/AboutUs"
import Empower from './Sections/EmpowerSection/Empower';
import Empower2 from './Sections/Empower2Section/Empower2';
import WhyUs from './Sections/WhyUsSection/WhyUs';
// import WhatWeConduct from "./components/WhatWeConduct";
// import CustomerReviews from "./components/CustomerReviews";
import ContactUs from "./Sections/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";



function App() {
  return (
    <div className={styles.appContainer}>
      {/* <Header /> */}
      {/* <main className={styles.mainContainer}> */}
        <HeroSection />
        <AboutUs />
        {/* <OfferedCourses /> */}
        <Empower />
        <Empower2 />
        <WhyUs />
        <ContactUs />
        {/* <WhatWeConduct />
        <WhyTalentScope />
        <CustomerReviews />
        <ContactUs /> */}
      {/* </main> */}
      <Footer />
    </div>
  )
}

export default App
