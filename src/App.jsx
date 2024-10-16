import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import DashboardLayout from './layouts/DashboardLayout'
import Overview from './pages/dashboard/Overview'
import Settings from './pages/dashboard/Settings'
import GithubLayout from './layouts/GithubLayout'
import Overvieww from './components/Github/Overvieww'
import Projects from './components/Github/Projects'
import Repositories from './components/Github/Repositories'
import Packages from './components/Github/Packages'

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
          index: true, // this makes OVERVIEW the default page...
          // path:"overview", 
          element: <Overview />
        },
        {
          path: "settings",
          element: <Settings />
        }
      ]
    },
    {
      path: "github",
      element: <GithubLayout />,
      children: [
        {
          path: "overvieww",
          element: <Overvieww />
        },
        {
          path: "projects",
          element: <Projects />
        },
        {
          path: "repositories",
          element: <Repositories />
        },
        {
          path: "packages",
          element: <Packages />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
