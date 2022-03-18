import React from 'react'
import "./style/Home.css"
import NavBar from '../../Navigation/NavBar'
import '../../Footer/Footer'
import Footer from '../../Footer/Footer'
import BubblesAnimation from '../../BubblesAnimation/BubblesAnimation'
import HeroHomePage from '../../HeroHomePage/HeroHomePage'
import SkillsHome from '../../SkillsHome/SkillsHome'
import MyProjects from '../../MyProjects/MyProjects'

export default function Home() {


  return (
    <div >
      <div>
        <NavBar/>
        <BubblesAnimation/>
        <HeroHomePage/>
        <SkillsHome/>
        <MyProjects/>
        <Footer/>
      </div>
    </div>
  )
}
