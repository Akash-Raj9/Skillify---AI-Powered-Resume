import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { logout } from '../app/features/authslice'

const Navbar = () => {
    const {user}=useSelector(state=>state.auth)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const logoutUser=()=>{
        navigate('/')
        dispatch(logout())
        
    }
  return (
    <div className='shadow bg-white'>
    <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-0.5 text-slate-800 transition-all'>
     <Link >
      <img src='/logo.png' alt='logo' className='h-20 w-auto' />
     </Link>
     {/* <div className='flex items-center gap-4 text-sm'>
        <p className='max-sm:hidden'>Hi, {user?.name}</p>
        <button onClick={logoutUser} className='bg-white hover:bg-slate-50 border border-gray-300 px-7 py-1.5 rounded-full active:scale-95 transition-all'>Logout</button>
     </div> */}
     <div className="flex items-center gap-8 text-sm bg-white border border-gray-600 rounded-full px-5 py-2 shadow-sm hover:shadow-md transition-shadow duration-300 select-none">
  <p className="max-sm:hidden font-medium text-gray-800">Hi, {user?.name}</p>
  <button
    onClick={logoutUser}
    className="bg-indigo-600 text-white px-6 py-1.5 rounded-full hover:bg-indigo-700 active:scale-95 transition-transform duration-150 shadow-sm"
  >
    Logout
  </button>
</div>

    </nav>
      
    </div>
  )
}

export default Navbar
