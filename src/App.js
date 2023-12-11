import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import AboutUs from './Pages/About-us';
import OurCurriculum from './Pages/Our-Curriculum';
import ContactUs from './Pages/Contact-us';


function App() {
  return (
<>
  <BrowserRouter>
<Routes>
<Route exact path='/' element={<Home />} />
<Route exact path='/about-us' element={<AboutUs />} />
<Route exact path='/our-curriculum' element={<OurCurriculum />} />
<Route exact path='/contact-us' element={<ContactUs />} />




</Routes>
    </BrowserRouter>
</>
  );
}

export default App;
