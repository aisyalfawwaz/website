import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Beranda from './pages/Beranda';
import Prestasi from './pages/Prestasi';
import KegiatanSekolah from './pages/KegiatanSekolah';
import RegistrationForm from './components/RegistrationForm';
import { ThemeProvider } from './context/ThemeContext'; // Import the ThemeProvider

const App = () => {
  return (
    <Router>
      <ThemeProvider> {/* Wrap the App with ThemeProvider */}
        <div>
          {/* Navbar component */}
          <Navbar />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/prestasi" element={<Prestasi />} />
            <Route path="/kegiatan" element={<KegiatanSekolah />} />
            <Route path="/registration" element={<RegistrationForm />} />

            {/* Add other routes as needed */}
          </Routes>

          {/* Footer component */}
          {/* <Footer /> */}
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
