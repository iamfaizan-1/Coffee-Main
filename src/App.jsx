import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import Serve from './components/Serve'
import Gallery from './components/Gallery'
import Blog from './components/Blog'
import Rating from './components/Rating'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>

<div>
  <Navbar/>
</div>


 <div>
  <Hero/>
</div>     

<div>
  <Hero2/>
</div>


<div>
  <Serve/>
</div>

<div>

  <Gallery/>
</div>

<div>
  <Rating/>
</div>

<div>
  <Blog/>
</div>

<Footer/>

    </div>
  )
}

export default App