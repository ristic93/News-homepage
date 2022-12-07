import Hero from './components/Hero'
import Info from './components/Info'
import Navbar from './components/Navbar'
import './index.css'

function App() {

  return (
    <div className='container mx-auto'>
      <Navbar/>
      <Hero/>
      <Info/>
    </div>
  )
}

export default App
