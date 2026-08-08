import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import Serve from './components/Serve'
import Gallery from './components/Gallery'

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

    </div>
  )
}

export default App