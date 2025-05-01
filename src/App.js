// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Software from './components/Software';
import Consulting from './components/Consulting';
import DataScience from './components/DataScience';
import Staffing from './components/Staffing';
import HomeLandingCarousel from './components/HomeLandingCarousel';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  const [selectedTab, setSelectedTab] = useState('Software');

  return (
    <div>
      <Header />
      <HomeLandingCarousel />
      <About />
      <Services initialTab={selectedTab} />
      <Contact />
      <PrivacyPolicy /> 
      <Footer onSelectTab={setSelectedTab} />
    </div>
  );
}

export default App;