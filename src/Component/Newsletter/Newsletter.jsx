import React from 'react'
import './newsletter.css'
export const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exlusive Offer On Your Email</h1>
        <p>Subscribe to our Newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email Id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
