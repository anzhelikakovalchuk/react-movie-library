import React from 'react'

import Hero from './hero/index'
import Footer from './footer'
import Content from './content'

function App() {
  return (
    <div className="App min-h-screen flex flex-col justify-between bg-gray-light">
      <Hero />
      <Content />
      <Footer />
    </div>
  )
}

export default App
