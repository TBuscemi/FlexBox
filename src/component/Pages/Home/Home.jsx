import React from 'react'
import "./style/Home.css"
import NavBar from '../../Navigation/NavBar'
export default function Home() {
  return (
    <div >
      <div>
        <NavBar/>
      </div>
        <div className='flex-wrapper'>
            <div className='flex-simple-container'>
              <h1>flex</h1>
            </div>
        </div>
    </div>
  )
}
