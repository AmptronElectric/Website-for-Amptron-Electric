import React from "react";
import Banner from "../components/Banner/Banner";
import HomeSolutions from "../components/HomeSolutions/HomeSolutions";
import Services from "../components/Services/Services";
import AppointmentBanner from "../components/AppointmentBanner/AppointmentBanner";
import Contact from "../components/Contact/Contact";

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <HomeSolutions />
      <Services />
      <AppointmentBanner />
      <Contact />
    </div>
  );
};

export default Home;
