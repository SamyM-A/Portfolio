import './App.css'
import Home from './sections/Home'
import Header from './sections/Header'
import Projets from './sections/ProjectsLists'
import Footer from './sections/Footer'
import Contact from './sections/Contact'
import Technologie from './sections/TechnologieLists'

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Technologie/>
        <Projets/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}


export default App
