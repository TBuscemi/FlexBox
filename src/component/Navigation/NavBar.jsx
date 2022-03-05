import React from 'react'
import './style/NavBar.css'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <div>
                <NavLink className='text-links' to="/">Home</NavLink>
            </div>
        </div>
  )
}
