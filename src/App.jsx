import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Start from "./components/Start";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start/>} />
          <Route path="Home" element={<Home/>} />
          <Route path="About" element={<About/>} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  ); 
}

export default App;
