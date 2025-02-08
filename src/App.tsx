import './App.css'
import { Carousel } from './layouts/NavbarAndFooter/HomePage/components/Carousel'
import { ExploreTopBooks } from './layouts/NavbarAndFooter/HomePage/components/ExploreTopBooks'
import { Heros } from './layouts/NavbarAndFooter/HomePage/components/Heros'
import { Navbar } from './layouts/NavbarAndFooter/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <ExploreTopBooks/>
      <Carousel/>
      <Heros/>
    </>
  )
}

export default App
