import React from 'react'
import { NavLink } from 'react-router-dom'
import './style/Hamburger.css'

function Hamburger() {
  return (
    <div className='ham-wrapper'>
      <nav class="menu">
        <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open"/>
        <label class="menu-open-button" for="menu-open">
          <span class="hamburger hamburger-1"></span>
          <span class="hamburger hamburger-2"></span>
          <span class="hamburger hamburger-3"></span>
        </label>
            <NavLink className=' menu-item' to="/">Home</NavLink>
            <NavLink className=' menu-item' to="/simpleflex">Flex</NavLink>
            <NavLink className=' menu-item' to="/simplegrid">Grid</NavLink>
      </nav>
      <svg className='svg-div' xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="shadowed-goo">
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
              <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
              <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
              <feOffset in="shadow" dx="1" dy="1" result="shadow" />
              <feBlend in2="shadow" in="goo" result="goo" />
              <feBlend in2="goo" in="SourceGraphic" result="mix" />
            </filter>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
              <feBlend in2="goo" in="SourceGraphic" result="mix" />
            </filter>
          </defs>
      </svg>
    </div>

  )
}

export default Hamburger