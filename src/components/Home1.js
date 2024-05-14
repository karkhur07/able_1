import React from 'react'
import Home from './Home.js';
import Footer from "./Footer.js";
import Testi from "./Testi.js";
import Slogan from "./Slogan.js"

import Company from "./Company.js";
import Stats from "./Stats.js";


import Heading from "./Heading.js";
import Heading1 from './Heading1.js'
import Faq from "./Faq.js";
import Community from './Community.js';
import Hire from './Hire.js';
import Cell from './Cell.js';

const Home_1 = () => {
  return (
    <div>
      <Heading1 head="ABLING YOU TO ENDLESS POSSIBILITIES" />
        <Home /> 
        <Stats />
        <Hire/>
        <Heading head="COMPANIES WITH ABLE"/>
        <Company />
        <Heading head="#InternshipZaruriHai"/>
        <Slogan/>
        <Heading head="JOIN THE COMMUNITY"/>
        <Community/>
        <Cell/>
        <Heading head="TESTIMONIALS" />
        <Testi />
        <Heading head="FAQ'S" />
        <Faq/>
        <Heading head="SUBSCRIBE" />
        <Footer />         
    </div>
  )
}

export default Home_1
