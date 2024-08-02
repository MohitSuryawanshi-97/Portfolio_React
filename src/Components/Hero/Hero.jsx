import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div  id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1> <span> I'm Mohit Suryawanshi,</span> frontend developer based in IND</h1>
      <p>I am frontend developer from Nanded, Maharashtra with 6 month of experience</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact' > Connect With Me</AnchorLink></div>
        
        <div className="hero-resume">
            My Resume
        </div>
      </div>
    </div>
  )
}

export default Hero
