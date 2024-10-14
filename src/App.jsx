import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import DashboardLayout from './layouts/DashboardLayout'
import Overview from './pages/dashboard/Overview'
import Settings from './pages/dashboard/Settings'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [ // children also takes an array of routes...
        { // you link the children using an outlet tag
          path:"overview",
          element: <Overview />
        },
        {
          path:"settings",
          element: <Settings />
        }
      ]
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
