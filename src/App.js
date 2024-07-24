import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/loginComponent';
import Register from './components/Auth/registerComponent';
import MovieUi from './components/Movie/movieUi';
import ProtectedRoute from './components/Auth/protectedRouteComponent';
import VerifyOtp from './components/Auth/otpVerificationComponent';

const App = () => {
  return (
    <Router>
      <div className="App">
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify-otp" element={<VerifyOtp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/movie" element={
        <ProtectedRoute>
          <MovieUi />
        </ProtectedRoute>
      } />
    </Routes>
      </div>
    </Router>
  );
};

export default App;

