import React from 'react'
import "./style/SimpleFlex.css"
import NavBar from '../../Navigation/NavBar'
export default function SimpleFlex() {
  return (
    <div >
      <div>
        <NavBar/>
      </div>
        <div className='flex-wrapper'>
            <div className='flex-simple-container'>
              <div className='flex-cards card-1'>
                <h1>1</h1>
                <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quo veniam ipsa! Minus laudantium, eum blanditiis voluptate eveniet quasi dolore nisi praesentium amet perspiciatis commodi, modi inventore libero expedita recusandae!</h2>
              </div>
              <div className='flex-cards card-2'>
                <h1>2</h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae autem vero consequuntur ea modi tempora sapiente repellendus voluptatem reiciendis fugiat sunt amet temporibus veritatis, animi eius voluptates! Provident, nisi corporis?</h2>
              </div>
              <div className='flex-cards card-3'>
                <h1>3</h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consequuntur dolorem quam officia, accusantium fuga consectetur iure. Dolores commodi sequi aut voluptatibus est vel iusto veniam. Quae inventore fugiat eaque!</h2>
              </div>
            </div>
            <div className='flex-simple-container flex-simple-container-2'>
              <div className='flex-cards card-4'>
                <h1>4</h1>
                <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quo veniam ipsa! Minus laudantium, eum blanditiis voluptate eveniet quasi dolore nisi praesentium amet perspiciatis commodi, modi inventore libero expedita recusandae!</h2>
              </div>
              <div className='flex-cards card-5'>
                <h1>5</h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae autem vero consequuntur ea modi tempora sapiente repellendus voluptatem reiciendis fugiat sunt amet temporibus veritatis, animi eius voluptates! Provident, nisi corporis?</h2>
              </div>
              <div className='flex-cards card-6'>
                <h1>6</h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consequuntur dolorem quam officia, accusantium fuga consectetur iure. Dolores commodi sequi aut voluptatibus est vel iusto veniam. Quae inventore fugiat eaque!</h2>
              </div>
            </div>
        </div>
    </div>
  )
}