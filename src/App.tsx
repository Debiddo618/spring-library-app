import './App.css'
import { Carousel } from './layouts/NavbarAndFooter/HomePage/components/Carousel'
import { ExploreTopBooks } from './layouts/NavbarAndFooter/HomePage/components/ExploreTopBooks'
import { Navbar } from './layouts/NavbarAndFooter/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <ExploreTopBooks/>
      <Carousel/>
    </>
  )
}

export default App
