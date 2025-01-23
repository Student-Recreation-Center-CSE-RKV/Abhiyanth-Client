import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Stalls from './pages/Stalls';
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
import StallShowcase from './components/stalls/StallShowCase.js';
import ProjectsPage from './components/technicalProjects/ProjectShowcase.jsx';
import News from './pages/News.js';
import NewsBox from './components/news/NewsBox.js';
import DetailedNews from './components/news/DetailedNews.js';

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
          <Route path="/contactUs" element={<ContactUs/>} />
          <Route path="/stalls" element={< Stalls/>} />
          <Route path="/stalls/:id" element={<StallShowcase/>} />
          <Route path="/technicalEvents" element={<TechnicalEvents/>} />
          <Route path="/technicalEvents/:department" element={<DeptWiseEvents/>} />
          <Route path="/technicalEvents/:department/:id" element={<TechEventDetails/>} />
          <Route path="/register-volunteer" element={<RegisterVolunteer/>}/>
          <Route path="/projectShowCase" element={<ProjectsPage/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path="/news/:id" element={<DetailedNews/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
