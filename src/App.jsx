import Navbar from './components/Navbar'
import About from './pages/About'
import Favourites from './pages/Favourites'
import Home from './pages/Home'
import New from './pages/New'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <New/>
      <About/>
      <Favourites/>
    </>
  )
}

export default App