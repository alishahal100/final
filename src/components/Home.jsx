
  import Navbar from "./Naav";
  import Banner from "./Banner";
  import About from "./About";
  import Services from "./Services";
  import Footer from "./Footer";
  import { Helmet } from "react-helmet-async";
import React from 'react'

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-18  lg:pt-0 ">
      <Helmet>
        <title>Shabzalio - Digital Marketing, Photography, Videography, Web Development, Printing Services</title>
        <meta name="description" content="Shabzalio offers digital marketing, photography, videography, web development, and printing services. Let's talk about your project today." />
      </Helmet>
    <Navbar/>
    <Banner/>
    <About/>
    <Services/>
    <Footer/>
   </main>
  )
}

export default Home

  