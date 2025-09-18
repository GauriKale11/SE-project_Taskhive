import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Task from './pages/Task'
import Profile from './pages/Profile'
import Layout from './components/Layout'
import Signup from './pages/Signup'


function App() {
  
  const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/task", element: <Task /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
  { path: "/login", element: <Login /> },
  {path: "/signup" , element: <Signup/>}
]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
