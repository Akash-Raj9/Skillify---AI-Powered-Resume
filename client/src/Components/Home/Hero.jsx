import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Hero = () => {
  const { user } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Smooth scroll handler
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  // Get Started navigation
  const handleGetStarted = () => {
    if (!user) {
      navigate('/app?state=register');
    } else {
      navigate('/app');
    }
  };

  return (
    <>
      {/* Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
          * {
            font-family: 'Poppins', sans-serif;
          }
        `}
      </style>

      {/* Full Hero */}
      <section
        className={`bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] ${
          menuOpen ? 'overflow-hidden' : ''
        } min-h-screen`}
        id="home"
      >
        {/* Navbar */}
        <header className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-2 w-full text-sm z-50">
          <a href="/">
            <img
              src="/logo.png"
              alt="logo"
              
              className="h-30 w-auto rounded-full"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-gray-900 transition duration-500">
            <button onClick={() => handleScroll('home')} className="hover:text-indigo-600 transition">Home</button>
            <button onClick={() => handleScroll('features')} className="hover:text-indigo-600 transition">Features</button>
            <button onClick={() => handleScroll('testimonials')} className="hover:text-indigo-600 transition">Testimonials</button>
            <button onClick={() => handleScroll('cta')} className="hover:text-indigo-600 transition">Contact</button>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex gap-3">
            {!user ? (
              <>
                <Link
                  to="/app?state=login"
                  className="text-indigo-600 bg-indigo-100 hover:bg-indigo-200 px-6 py-2 rounded-full text-sm font-medium transition"
                >
                  Login
                </Link>
                <Link
                  to="/app?state=register"
                  className="bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-2 rounded-full text-sm font-medium transition"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <Link
                to="/app"
                className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm hover:bg-indigo-700 transition"
              >
                Dashboard
              </Link>
            )}
          </div>

          {/* Mobile Menu toggle */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-gray-700 active:scale-95 transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </header>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur text-white flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:hidden`}
        >
          <button onClick={() => handleScroll('home')} className="hover:text-indigo-300 transition">Home</button>
          <button onClick={() => handleScroll('features')} className="hover:text-indigo-300 transition">Features</button>
          <button onClick={() => handleScroll('testimonials')} className="hover:text-indigo-300 transition">Testimonials</button>
          <button onClick={() => handleScroll('cta')} className="hover:text-indigo-300 transition">Contact</button>

          {!user && (
            <>
              <Link
                to="/app?state=login"
                className="text-white bg-indigo-600 border border-white/20 px-6 py-2 rounded-full hover:bg-indigo-700 transition"
              >
                Login
              </Link>
              <Link
                to="/app?state=register"
                className="text-indigo-600 bg-white px-6 py-2 rounded-full hover:bg-gray-200 transition"
              >
                Sign up
              </Link>
            </>
          )}

          <button
            onClick={() => setMenuOpen(false)}
            className="mt-6 text-white bg-indigo-600 rounded-md p-3 hover:bg-indigo-700 active:scale-95 transition"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Main Hero */}
        <main className="flex flex-col md:flex-row items-center justify-between mt-08 pb-16 px-6 sm:px-10 md:px-24 max-w-7xl mx-auto w-full">
          {/* Left Content */}
          <div className="flex flex-col items-center md:items-start">
            {/* <button
              type="button"
              className="mt-10 mb-6 flex items-center space-x-2 border border-indigo-600 text-indigo-600 text-xs rounded-full px-4 pr-1.5 py-1.5 hover:bg-indigo-50 transition"
            >
              <span>Explore how we help grow brands.</span>
              <span className="flex items-center justify-center size-6 rounded-full bg-indigo-600 p-1">
                <svg
                  width="14"
                  height="11"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 6.5h14M9.5 1 15 6.5 9.5 12"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button> */}

            <h1 className="text-gray-900 font-semibold text-3xl sm:text-4xl md:text-5xl max-w-xl">
              Land interviews faster with intelligent {' '}
              <span className="text-indigo-800">resume generation</span>
            </h1>

            <p className="mt-4 text-gray-600 max-w-md text-sm sm:text-base leading-relaxed">
              Save time and effortlessly boost interview chances with intelligent resume creation designed for your success.
            </p>

            <div className="flex flex-col md:flex-row items-center mt-8 gap-3">
              <button
                className="bg-indigo-600 text-white px-6 pr-2.5 py-2.5 rounded-full text-sm font-medium flex items-center space-x-2 hover:bg-indigo-700 transition"
                onClick={() => handleScroll('testimonials')}
              >
                <span>Read Success Stories</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715"
                    stroke="#fff"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                onClick={handleGetStarted}
                className="text-indigo-600 bg-indigo-100 px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-200 transition"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Right Side Images */}
          <div
            aria-label="Photos of leaders"
            className="mt-12 grid grid-cols-2 gap-6 pb-6"
          >
            {[
              'https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=735&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=687&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=687&auto=format&fit=crop',
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Leader ${i}`}
                className="w-36 h-44 rounded-lg hover:scale-105 transition duration-300 object-cover shadow-lg"
              />
            ))}
          </div>
        </main>
      </section>
    </>
  );
};

export default Hero;
