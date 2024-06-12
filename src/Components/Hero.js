import React from 'react'
import Home from './Home'
import Banner from './Banner'
import ThirdComponent from './ThirdComponent'
import Mission from './Mission'
import FourthComponent from './FourthComponent'
import WhyZen from './WhyZen'
import Api from './Api'
import WhatPeopleSays from './WhatPeopleSays'
import Insights from './Insights'
import Footer from './Footer'

function Hero() {
  return (
    <div>
        <Home/>
      <Banner/>
      <ThirdComponent/>
      <Mission/>
      <FourthComponent/>
      <WhyZen/>
      <Api/>
      <WhatPeopleSays/>
      <Insights/>
      <Footer/>
    </div>
  )
}

export default Hero