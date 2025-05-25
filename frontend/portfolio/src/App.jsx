import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './home/Home'
import Root from './header/root'
import About from './about/About'
import Projects from './projects/projects'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {path: "/", element: <Home />},
        {path: "/projects", element: <Projects />},
        {path: "/about", element: <About />},
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
