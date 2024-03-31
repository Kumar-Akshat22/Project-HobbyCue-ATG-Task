import React from 'react'
import HeroSection from '../components/HeroSection';
import NavBar from '../components/NavBar';
import CardSection from '../components/CardSection';
import AddPage from '../components/AddPage';
import Testimonial from '../components/Testimonial';
import GetStarted from '../components/GetStarted';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
        <NavBar />
        <HeroSection />
        <CardSection />
        <AddPage />
        <Testimonial />
        <GetStarted />
        <Footer />
    </div>
  )
}

export default Home