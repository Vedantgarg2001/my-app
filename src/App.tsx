import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  const handleLogin = (email: string, password: string) => {
    alert(`Logged in with email: ${email} and password: ${password}`);
  };

  return (
    <Router>
      <div className="App">
        <Navbar
          logo="https://th.bing.com/th/id/OIP.7DWXljTMZ9WRrQA-nIJd_gHaHa?w=4000&h=4000&rs=1&pid=ImgDetMain"
          links={[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About Us' },
            { href: '/contact', label: 'Contact' },
            { href: '/login', label: 'Login' },
          ]}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
