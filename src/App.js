import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Stalls from './pages/Stalls';
import Admin from './pages/Admin';
import Main from './pages/Main';
import Gallery from './pages/Gallery';
import Sponsers from './pages/Sponsers';
import OurTeam from './pages/OurTeam';
import EventDetails from './pages/EventDetails';
import AllEvents from './components/eventDetails/allEvents';
import { useState } from 'react';
import ScrollToTop from './components/general/ScrollToTop';
import SponsersAdmin from './components/admin/sponsers/sponsersAdmin';
import ManageEventsByAdmin from './components/admin/ManageEventsByAdmin';


function App() {
  const [flag, setFlag] = useState(false);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Main flag={flag} />}>
          <Route path="/" element={<Home flag={flag} setFlag={setFlag} />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sponsers" element={<Sponsers />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/stalls" element={<Stalls />} />
          <Route path="/ourTeam" element={<OurTeam />} />
          <Route path="/allEvents" element={<AllEvents />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
        <Route path='events' element={<ManageEventsByAdmin/>} />
          <Route path='sponsers' element={<SponsersAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
