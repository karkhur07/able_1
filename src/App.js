import "./App.css";
import Navbar from "./components/Navbar";
import Home1 from "./components/Home1.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign from "./components/Sign.js";
import About from "./components/About.js";
import Interns from "./components/Interns.js";
import Contact from "./components/Contact.js";


function App() {
  return (
    <>
      <div className="bg-[#f6f6f7]">
  
         <BrowserRouter>
         <Navbar />
        {/* <Heading1 head="ABLING YOU TO ENDLESS POSSIBILITIES" />
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
         <Modal/> */}
      <Routes>
      <Route path="/" element={<Home1 />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Sign/>}/>
        <Route path="/interns" element={<Interns/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
        
      </div>
    </>
  );
}

export default App;
