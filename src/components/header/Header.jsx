import React from 'react'
import './header.css'
import CTA from './CTA'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Shuvendu Samanta</h1>
        <h5 className='text-light'>Computer Science Expert</h5>
        <CTA />
      </div>
    </header>
  )
}

export default Header