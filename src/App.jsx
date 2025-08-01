import bg from './assets/img/home-bg.webp'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${bg})` }}>
        <Navbar />
        <Home />
      </div>
    </>
  )
}

export default App