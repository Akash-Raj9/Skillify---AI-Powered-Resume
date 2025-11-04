import React, { useState } from 'react';
import api from '../configs/api';
import { useDispatch } from 'react-redux';
import { login } from '../app/features/authslice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const query = new URLSearchParams(window.location.search);
  const urlState = query.get("state");
  const [state, setState] = useState(urlState || "login");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post(`/api/users/${state}`, formData);
      dispatch(login(data));
      localStorage.setItem('token', data.token);
      toast.success(data.message);
      // Optionally redirect on successful login/signup if needed
      navigate('/app');
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Close function clears the query parameter 'state' so form unmounts
  const closeForm = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className="flex items-center rounded-4xl justify-center px-2 py-10 bg-blue-200 min-h-[70vh] relative">
      {/* Close button */}
      <button
        onClick={closeForm}
        className="absolute top-2 right-4 text-red-400 hover:text-red-700 text-3xl font-bold"
        aria-label="Close login/signup form"
      >
        ×
      </button>

      <form
        onSubmit={handleSubmit}
        className="sm:w-[350px] w-full text-center bg-white rounded-2xl px-8 py-10 shadow-lg border border-gray-300/60"
      >
        <h1 className="text-gray-900 text-3xl mt-10 font-medium">
          {state === "login" ? "Login" : "Sign up"}
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          Please {state === "login" ? "sign in" : "sign up"} to continue
        </p>

        {state !== "login" && (
          <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
              viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-icon lucide-user-round">
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
            <input type="text" name="name" placeholder="Name"
              className="border-none outline-none ring-0"
              value={formData.name} onChange={handleChange} required />
          </div>
        )}

        <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
            viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail">
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg>
          <input type="email" name="email" placeholder="Email id"
            className="border-none outline-none ring-0"
            value={formData.email} onChange={handleChange} required />
        </div>

        <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
            viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-icon lucide-lock">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <input type="password" name="password" placeholder="Password"
            className="border-none outline-none ring-0"
            value={formData.password} onChange={handleChange} required />
        </div>

        <div className="mt-4 text-left text-indigo-500">
          <button className="text-sm" type="reset">Forget password?</button>
        </div>

        <button type="submit" className="mt-2 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity">
          {state === "login" ? "Login" : "Sign up"}
        </button>

        <p onClick={() => setState(prev => prev === "login" ? "register" : "login")}
          className="text-gray-500 text-sm mt-3 mb-11 cursor-pointer">
          {state === "login" ? "Don't have an account?" : "Already have an account?"}
          <span className="text-indigo-500 hover:underline ml-1">click here</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
