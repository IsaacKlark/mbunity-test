import './App.css';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Contacts from './components/Pages/Contacts';
import MobileNavigation from './components/MobileNavigation';
import { GlobalStyles } from './GlobalStyles';
import { useState } from 'react';

function App() {
  const [displayMobileNav, setDisplayMobileNav] = useState(false);

  return (
    <div className="App">
      <GlobalStyles />
      <HashRouter>
        <Navigation setDisplayMobileNav={setDisplayMobileNav} />
        <MobileNavigation display={displayMobileNav} setDisplayMobileNav={setDisplayMobileNav} />
        <Routes>
          <Route path='/' element={<Navigate to="/contacts" />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
