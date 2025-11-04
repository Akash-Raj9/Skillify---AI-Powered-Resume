import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { useSelector } from 'react-redux';
import Loader from '../Components/Loader';
import Login from './Login';
import Home from './home';
import Footer from '../Components/Home/Footer';

const Layout = () => {
  const { user, loading } = useSelector(state => state.auth);

  if (loading) {
    return <Loader />;
  }

  // Logged out view: show home background blurred + login form overlay
  if (!user) {
    return (
      <div className="relative min-h-screen">
        <div className="filter blur-sm pointer-events-none">
          <Home />
        </div>
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Login />
        </div>
      </div>
    );
  }

  // Logged in view as before
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
