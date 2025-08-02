import gsap from 'gsap'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Favourites from './pages/Favourites'
import Home from './pages/Home'
import Location from './pages/Location'
import New from './pages/New'
import { ScrollTrigger, SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <New/>
      <About/>
      <Favourites/>
      <Location/>
      <Footer/>
    </>
  )
}

export default App