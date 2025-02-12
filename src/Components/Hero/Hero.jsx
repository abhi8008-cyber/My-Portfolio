import React from 'react'
import './Hero.css'
import profile_img from '../../assets/abh.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
<img src={profile_img} alt="" />
<h1><span>I'm Abhishek Sarkale </span>frontend developer based in pune </h1>
<p>i am a forntend developer from Pune ,Maharastra with </p>
<div className="hero-action">
<div className="hero-connect"><AnchorLink className='anchor-link' offset={ 50} href='#contact'> Connect Witth me</AnchorLink></div>
<div className="hero-resume" > <a href="https://drive.google.com/file/d/1cHdcoZpfU_t0ycO8fQw3_AgC7BUjYliM/view?usp=sharing" className='hero-anc'>My resume</a></div>
</div>
    </div>
  )
}

export default Hero

