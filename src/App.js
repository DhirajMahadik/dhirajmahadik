
import './App.css';
import Home from './Components/Home';
import Skilss from './Components/Skilss';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
// import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import LandingPagePlan from './Components/LandingPagePlan';
function App() {
  return (
     
      <BrowserRouter>
       {/* <Navbar/> */}
      <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/skills" element={<Skilss />}/>
          <Route exact path="/contact" element={<Contact />}/>
          <Route exact path="/landingPagePlane" element={<LandingPagePlan />}/>  
        </Routes>
        <Footer/>
      </BrowserRouter>
   
      
     
    
  );
}

export default App;
