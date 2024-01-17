import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      
      <div className="my-5">
      <div className="Container">
        <div className="row">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/hakkimizda' element={<About/>} />
            <Route path='/iletisim' element={<Contact/>} />
  
         
          </Routes>
        </div>
        <Footer />
      </div>
      </div>
    </>
  );
}

export default App;
