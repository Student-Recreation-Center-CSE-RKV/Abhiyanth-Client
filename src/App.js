import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Stalls from './pages/Stalls';
import Admin from './pages/Admin';
import Main from './pages/Main';
import Gallery from './pages/Gallery';
import Sponsers from './pages/Sponsers';
import OurTeam from './pages/OurTeam';
import EventDetails from './pages/EventDetails';
import AllEvents from './components/eventDetails/allEvents';
import ScrollToTop from './components/general/ScrollToTop';
import ContactUs from './pages/ContactUs';
import DeptWiseEvents from './components/technicalEvents/DeptWiseEvents.js'
import TechnicalEvents from "./pages/TechnicalEvents.js"
import RegisterVolunteer from "./pages/RegisterVolunteer.js"
import TechEventDetails from './components/technicalEvents/techEventDetails.js';

function App() {
  
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path="/" element={<Home  />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sponsers" element={<Sponsers />} />
          <Route path="/ourTeam" element={<OurTeam />} />
          <Route path="/events" element={<AllEvents />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/technicalEvents" element={<TechnicalEvents/>} />
          <Route path="/contactUs" element={<ContactUs/>} />
          <Route path="/stalls" element={< Stalls/>} />
          <Route path="/dept-wise-events" element={<DeptWiseEvents/>} />
          <Route path="/technicalEvent/:department/:id" element={<TechEventDetails/>} />
          <Route path="/register-volunteer" element={<RegisterVolunteer/>}/>
        </Route>
        <Route path="/admin" element={<Admin />}/>
    
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
