import Hero from './components/Hero'
import About from './components/About'
import WhatWeDo from './components/WhatWeDo'
import WhyJoin from './components/WhyJoin'
import ActivitiesPreview from './components/ActivitiesPreview'
import Community from './components/Community'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <WhatWeDo />
      <WhyJoin />
      <ActivitiesPreview />
      <Community />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App

