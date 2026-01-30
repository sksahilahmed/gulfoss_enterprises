import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginRegisterPage from './pages/LoginRegisterPage';
import OrderPage from './pages/OrderPage';
import MyOrdersPage from './pages/MyOrdersPage';
import SubscriptionsPage from './pages/SubscriptionsPage';
import ProfilePage from './pages/ProfilePage';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminOrdersList from './pages/admin/AdminOrdersList';
import AdminCustomersList from './pages/admin/AdminCustomersList';
import AdminVillagesList from './pages/admin/AdminVillagesList';
import AdminSubscriptionsList from './pages/admin/AdminSubscriptionsList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (userData) => {
    setCurrentUser(userData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="app">
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} currentUser={currentUser} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage isLoggedIn={isLoggedIn} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginRegisterPage onLogin={handleLogin} />} />
            <Route path="/order" element={<OrderPage currentUser={currentUser} />} />
            <Route path="/orders" element={<MyOrdersPage currentUser={currentUser} />} />
            <Route path="/subscriptions" element={<SubscriptionsPage currentUser={currentUser} />} />
            <Route path="/profile" element={<ProfilePage currentUser={currentUser} />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/orders" element={<AdminOrdersList />} />
            <Route path="/admin/customers" element={<AdminCustomersList />} />
            <Route path="/admin/villages" element={<AdminVillagesList />} />
            <Route path="/admin/subscriptions" element={<AdminSubscriptionsList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
