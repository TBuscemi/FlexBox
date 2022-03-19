import React from 'react'
import NavBar from '../../Navigation/NavBar'
import './style/SimpleGrid.css'

export default function SimpleGrid() {
  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <h1 className='explain-flex'> This is a simple example of how to use  Grid to layout your website</h1>
        <h1 className='explain-flex'> <a href="https://github.com/TBuscemi/FlexBox/blob/main/src/component/Pages/SimpleGrid/SimpleGrid.jsx" target='blank'>Click Me</a> to go to Html of the project </h1>
        <h1 className='explain-flex'> <a href="https://github.com/TBuscemi/FlexBox/blob/main/src/component/Pages/SimpleGrid/style/SimpleGrid.scss" target='blank'>Click Me</a> to go to Scss of the project <br/>When using this code as a example make sure you use the code in the Scss file not the Css file.</h1>
      <div className='grid-wrapper'>
        
        <div className='grid-cards card-1' >
          <h1>1</h1>
          <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore cupiditate, mollitia, rerum error eum numquam quis aliquam quasi quos harum assumenda laborum nulla debitis eveniet quisquam, modi ex dolores exercitationem?</h2>
        </div>
        <div className='grid-cards card-2'>
          <h1>2</h1>
          <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore cupiditate, mollitia, rerum error eum numquam quis aliquam quasi quos harum assumenda laborum nulla debitis eveniet quisquam, modi ex dolores exercitationem?</h2>
        </div>
        <div className='grid-cards card-3'>
          <h1>3</h1>
          <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore cupiditate, mollitia, rerum error eum numquam quis aliquam quasi quos harum assumenda laborum nulla debitis eveniet quisquam, modi ex dolores exercitationem?</h2>
        </div>
        <div className='grid-cards card-4' >
          <h1>4</h1>
          <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore cupiditate, mollitia, rerum error eum numquam quis aliquam quasi quos harum assumenda laborum nulla debitis eveniet quisquam, modi ex dolores exercitationem?</h2>
        </div>
        <div className='grid-cards card-5'>
          <h1>5</h1>
          <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore cupiditate, mollitia, rerum error eum numquam quis aliquam quasi quos harum assumenda laborum nulla debitis eveniet quisquam, modi ex dolores exercitationem?</h2>
        </div>
        <div className='grid-cards card-6'>
          <h1>6</h1>
          <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore cupiditate, mollitia, rerum error eum numquam quis aliquam quasi quos harum assumenda laborum nulla debitis eveniet quisquam, modi ex dolores exercitationem?</h2>
        </div>
        <div className='grid-cards card-1' >
          <h1>7</h1>
          <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore cupiditate, mollitia, rerum error eum numquam quis aliquam quasi quos harum assumenda laborum nulla debitis eveniet quisquam, modi ex dolores exercitationem?</h2>
        </div>
        <div className='grid-cards card-2'>
          <h1>8</h1>
          <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore cupiditate, mollitia, rerum error eum numquam quis aliquam quasi quos harum assumenda laborum nulla debitis eveniet quisquam, modi ex dolores exercitationem?</h2>
        </div>
        <div className='grid-cards card-3'>
          <h1>9</h1>
          <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore cupiditate, mollitia, rerum error eum numquam quis aliquam quasi quos harum assumenda laborum nulla debitis eveniet quisquam, modi ex dolores exercitationem?</h2>
        </div>
        <div className='grid-cards card-4' >
          <h1>10</h1>
          <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore cupiditate, mollitia, rerum error eum numquam quis aliquam quasi quos harum assumenda laborum nulla debitis eveniet quisquam, modi ex dolores exercitationem?</h2>
        </div>
        <div className='grid-cards card-5'>
          <h1>11</h1>
          <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore cupiditate, mollitia, rerum error eum numquam quis aliquam quasi quos harum assumenda laborum nulla debitis eveniet quisquam, modi ex dolores exercitationem?</h2>
        </div>
        <div className='grid-cards card-6'>
          <h1>12</h1>
          <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore cupiditate, mollitia, rerum error eum numquam quis aliquam quasi quos harum assumenda laborum nulla debitis eveniet quisquam, modi ex dolores exercitationem?</h2>
        </div>
      </div>
    </div>
  )
}
