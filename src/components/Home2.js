import React from 'react'
import Stories from "./Stories.js";
import Heading from "./Heading.js";
import  Step  from "./Step.js";
import Stats from './Stats.js';
import Whyus from './whyus.js';
import Footer from './Footer.js';
import Faq from './Faq.js';
// import Able from './Able.js';
import Feedback from './Feedback.js';

const Home2 = () => {
  return (
    <div>
        <Step/>
        <Whyus/>
        <Stats/>
        <Feedback/>
        <Heading head="OUR USERS TELLING THEIR STORIES"/>
      <Stories/>
      <Heading head="FAQ'S" />
        <Faq/>
        <Heading head="SUBSCRIBE" />
        <Footer /> 
    </div>
  )
}

export default Home2
