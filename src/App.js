import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
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
import NewsDetails from './components/news/newsDetails.js';
import Profile from './components/user/Profile.js';
import SignIn from './pages/SignIn.js';
import { auth } from "./api/firebaseConfig.js"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { isInDb } from './api/users.js';
import Cashfree from './components/CashFreeFold/cashFree.js';
import RegisteredEvents from "./components/userprofile/RegisteredEvents.js"
import TechnicalEventsPage from './components/technicalEvents/MainTechnicalEvents.js';
import Schedule from './pages/Schedule.js';
import PaymentSuccess from './components/payment/PaymentSuccess.js';
import PaymentFailure from './components/payment/PaymentFailure.js';
import PageNotFound from './pages/ErrorPage.js';
import ScheduleUpload from './components/schedule/ScheduleUpload.js';


const provider = new GoogleAuthProvider();


function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sponsers" element={<Sponsers />} />
          <Route path="/ourTeam" element={<OurTeam />} />
          <Route path="/events" element={<AllEvents />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/contactUs" element={<ContactUs/>} />
          <Route path="/stalls" element={< Stalls />} />
          <Route path="/stalls/:id" element={<StallShowcase />} />
          <Route path="/technicalEvents" element={<TechnicalEvents />} />
          <Route path="/mainTechnicalEvents" element={<TechnicalEventsPage />} />
          <Route path="/technicalEvents/:department" element={<DeptWiseEvents />} />
          <Route path="/technicalEvents/:department/:id" element={<TechEventDetails />} />
          <Route path="/register-volunteer" element={<RegisterVolunteer />} />
          <Route path="/projectShowCase" element={<ProjectsPage />} />
          <Route path='/news' element={<News/>}/>
          <Route path="/news/:id" element={<NewsDetails/>}/>
          <Route path='/payment' element={<Cashfree/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/Registered" element={<RegisteredEvents/>}/>

          <Route path="/schedule" element={<Schedule/>}/>
          <Route path="/payment/success" element={<PaymentSuccess/>}/>
          <Route path="/payment/failure" element={<PaymentFailure/>}/>   
          <Route path="/scheduleUpload" element={<ScheduleUpload/>}/>    
        </Route>
        <Route path='auth/login' element={<SignInWrapper />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
    
  );
}



function SignInWrapper() {
  const navigate = useNavigate();
  
  const  [isloading , setIsLoading] = useState(false);
  console.log(isloading);

  const handleUserLogin = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userData = {
        name: user.displayName,
        email: user.email,
      };

      const check = await isInDb(user.uid, userData);
      toast.success("Successfully logged in");
      localStorage.setItem("Users", check ? "true" : "false");
      localStorage.setItem("id", user.uid);

      navigate("/");
    } catch (error) {
      console.log("error", error.code, "error msg: ", error.message);
    }
    finally{
      setIsLoading(false);
    }
  };

  return <SignIn handleUserLogin={handleUserLogin} loading={isloading} />;
}

export default App;
