import React from 'react'
import orionone from './icons/OrionOne.png'
import './Banner.css'

function Banner() {
  return (
    <div className='d-flex banner justify-content-evenly p-3'>
        <div><img src={orionone}/></div>
        <div><img src={orionone}/></div>
        

    </div>
  )
}

export default Banner