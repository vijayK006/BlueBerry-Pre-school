import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import AboutUs from './Pages/About-us';


function App() {
  return (
<>
  <BrowserRouter>
<Routes>
<Route exact path='/' element={<Home />} />
<Route exact path='/about-us' element={<AboutUs />} />



</Routes>
    </BrowserRouter>
</>
  );
}

export default App;
