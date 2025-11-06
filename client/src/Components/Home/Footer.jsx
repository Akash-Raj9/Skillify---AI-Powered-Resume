import React from 'react';

const Footer = () => {
  return (
    <>
      {/* Font Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
          * {
            font-family: 'Poppins', sans-serif;
          }
        `}
      </style>

      {/* Footer Section */}
      <footer className="flex flex-col items-center justify-center w-full py-5 bg-gradient-to-b from-[#8b6ec1] to-[#6832be] text-white/80 mt-20 mb-0">
        {/* Logo */}
        {/* <svg
          width="157"
          height="40"
          viewBox="0 0 157 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.904 28.28q-1.54 0-2.744-.644a5.1 5.1 0 0 1-1.904-1.82q-.672-1.148-.672-2.604v-3.864q0-1.456.7-2.604a4.9 4.9 0 0 1 1.904-1.792q1.204-.672 2.716-.672 1.82 0 3.276.952a6.44 6.44 0 0 1 2.324 2.52q.868 1.567.868 3.556 0 1.96-.868 3.556a6.5 6.5 0 0 1-2.324 2.492q-1.456.924-3.276.924"
            fill="#F5F5F5"
          />
          <path
            d="m8.75 11.3 6.75 3.884 6.75-3.885M8.75 34.58v-7.755L2 22.939m27 0-6.75 3.885v7.754M2.405 15.408 15.5 22.954l13.095-7.546M15.5 38V22.939M29 28.915V16.962a2.98 2.98 0 0 0-1.5-2.585L17 8.4a3.01 3.01 0 0 0-3 0L3.5 14.377A3 3 0 0 0 2 16.962v11.953A2.98 2.98 0 0 0 3.5 31.5L14 37.477a3.01 3.01 0 0 0 3 0L27.5 31.5a3 3 0 0 0 1.5-2.585"
            stroke="#F5F5F5"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg> */}

        {/* Copyright Text */}
        <p className="mt-2 text-center">
          Copyright © 2025 {' '}
          <a
            href="https://github.com/Akash-Raj9"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-white"
          >
            Akash Raj
          </a>
          . All rights reserved.
        </p>

        <br />

        {/* <p>
          <a href="https://www.kickresume.com/privacy/" target="_blank" rel="noreferrer" className="underline hover:text-white mr-8">
            Privacy Policy
          </a>
          <a href="https://www.kickresume.com/terms/" target="_blank" rel="noreferrer" className="underline hover:text-white">
            Terms of Service
          </a>
        </p> */}
        <p>
          <a href="/privacy" className="underline hover:text-white mr-8" target="_blank"rel="noopener noreferrer">
            Privacy Policy
          </a>
          <a href="/terms" className="underline hover:text-white" target="_blank"rel="noopener noreferrer">
            Terms of Service
          </a>
        </p>

          <br />

        {/* Social Icons */}
        <div className="flex items-center gap-10 mt-1">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/akashyaduvanshi_9"
            target="_blank"
            rel="noreferrer"
            className="hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5"
                stroke="#fff"
                strokeOpacity=".6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37m1.5-4.87h.01"
                stroke="#fff"
                strokeOpacity=".6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/akash-raj-6b3388284/"
            target="_blank"
            rel="noreferrer"
            className="hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                stroke="#fff"
                strokeOpacity=".6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Twitter / X */}
          <a
            href="https://x.com/_Jarvis_21?t=PcVVZMQ0kZ8dbHSOzktMPQ&s=08"
            target="_blank"
            rel="noreferrer"
            className="hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2"
                stroke="#fff"
                strokeOpacity=".6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Akash-Raj9"
            target="_blank"
            rel="noreferrer"
            className="hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"
                stroke="#fff"
                strokeOpacity=".6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 18c-4.51 2-5-2-7-2"
                stroke="#fff"
                strokeOpacity=".6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
