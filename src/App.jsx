import './App.css'
import Home from './sections/Home'
import Header from './sections/Header'
import Projets from './sections/ProjectsLists'
import Footer from './sections/Footer'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Projets/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}


export default App
