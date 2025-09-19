import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Task from './pages/Task'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'


function App() {
  
  const router = createBrowserRouter([
    {path: "/", element : <div><Navbar/><Dashboard/></div>},
    {path: "/login", element : <div><Navbar/><Login/></div>},
    {path: "/task", element : <div><Navbar/><Task/></div>},
    {path: "/profile", element : <div><Navbar/><Profile/></div>},
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
