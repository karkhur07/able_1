import React from 'react'
import Modal from "./Modal.js";
import Home from './Home.js';
import Footer from "./Footer.js";
import Testi from "./Testi.js";

import Company from "./Company.js";
import Stats from "./Stats.js";


import Heading from "./Heading.js";
import Heading1 from './Heading1.js'
// import Sign from "./Sign.js";
import Faq from "./Faq.js";

const Home_1 = () => {
  return (
    <div>
      <Heading1 head="ABLING YOU TO ENDLESS POSSIBILITIES" />
        <Home /> 
        <Stats />
        <Heading head="TESTIMONIALS" />
        <Testi />
        <Heading head="COMPANIES WITH US" />
        <Company />
        <Heading head="FAQ'S" />
        <Faq/>
        <Heading head="SUBSCRIBE" />
        <Footer />         
         <Modal/>
    </div>
  )
}

export default Home_1
