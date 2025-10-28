import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Task from './pages/Task'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import Signup from './pages/Signup'

function App() {

  const [tasks, SetTasks] = useState([]);

  const handleAddTask = (newTask) => {
    SetTasks((prev) => [...prev, newTask]);
};
  
  const router = createBrowserRouter([
    {path: "/", element: <Login />}, 
    {path: "/home", element : <div><Navbar/><Dashboard tasks={tasks} /></div>},
    {path: "/login", element : <div><Login/></div>},
    {path: "/signup", element: <Signup/>},
    {path: "/task", element : <div><Navbar/><Task onSubmit={handleAddTask} /></div>},
    {path: "/profile", element : <div><Navbar/><Profile/></div>},
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;