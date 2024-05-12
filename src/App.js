import "./App.css";
import Modal from "./components/Modal.js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Testi from "./components/Testi";
import Home from "./components/Home.js";
import Company from "./components/Company.js";
import Stats from "./components/Stats.js";

import Heading from "./components/Heading.js";
import Heading1 from './components/Heading1.js'
// import Sign from "./components/Sign.js";
import Sign from "./components/Sign.js";
import Faq from "./components/Faq.js";

function App() {
  return (
    <>
      <div className="bg-[#f6f6f7]">
        <Navbar />
        <Heading1 head="ABLING YOU TO ENDLESS POSSIBILITIES" />
        <Home /><Stats />
        <Heading head="TESTIMONIALS" />
        <Testi />
        <Heading head="COMPANIES WITH US" />
        <Company />
        <Heading head="FAQ'S" />
        <Faq/>
        <Heading head="SUBSCRIBE" />
        <Footer />         
         <Sign />
         <Modal/>
  
        
        
      </div>
    </>
  );
}

export default App;
