import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './home/Home'
import Root from './header/Root'
import Contact from './contact/Contact'
import ProjectsLists from './projectLists/ProjectsLists'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {path: "/", element: <Home />},
        {path: "/projects", element: <ProjectsLists />},
        {path: "/contact", element: <Contact />},
      ]
    }
  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
