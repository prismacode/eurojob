import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Overview from './pages/dashboard/Overview';
import Documents from './pages/dashboard/Documents';
import Payments from './pages/dashboard/Payments';
import Settings from './pages/dashboard/Settings';
import About from './pages/About';
import Jobs from './pages/Jobs';
import AnimatedPage from './components/AnimatedPage';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><Landing /></AnimatedPage>} />
        <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
        <Route path="/jobs" element={<AnimatedPage><Jobs /></AnimatedPage>} />
        <Route path="/login" element={<AnimatedPage><Login /></AnimatedPage>} />
        <Route path="/register" element={<AnimatedPage><Register /></AnimatedPage>} />

        {/* Dashboard Nested Routes */}
        <Route path="/dashboard" element={<AnimatedPage><Dashboard /></AnimatedPage>}>
          <Route index element={<Overview />} />
          <Route path="documents" element={<Documents />} />
          <Route path="payments" element={<Payments />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

import { ReactLenis } from 'lenis/react';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </ReactLenis>
  );
}

export default App;

