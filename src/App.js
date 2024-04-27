import React from 'react'
import Navbar from './components/navbar'
import Card from './components/Card'
import Footer from './components/footer'
import Hero from './components/Hero'
import GetDash from './components/GetDash'
import Contact from './components/Contact'
export default function App() {
  const title = "Welcome to our Website";
const description = "Discover the latest trends in fintech and revolutionize your finances.";
const mobileImage = "./mainLogo.png"; // Example placeholder image URL

  return (
    <div>
        <Navbar/>
        <Hero/>
        <Card/>
        <GetDash/>
        <Contact/>
        <Footer/>
    </div>
  )
}
