import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Admin from './pages/Admin';

import ScrollToTop from './components/general/ScrollToTop';

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Admin />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
