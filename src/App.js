import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './api/firebaseConfig';


import Admin from './pages/Admin';

import ScrollToTop from './components/general/ScrollToTop';
import SignIn from './components/login/SignIn';
import { useEffect, useState } from 'react';

const provider = new GoogleAuthProvider();
function App() {

 
  const [user, setUser] = useState(null)


  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user)
    })
  })
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Admin />} />
        <Route path='/auth/login' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
