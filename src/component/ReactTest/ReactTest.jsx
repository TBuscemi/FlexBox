import React,{useEffect,useState,useRef} from 'react'
import Particles from "react-tsparticles";
import './style/ReactTest.css'
const ReactTest = () => {


    const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };

  const mountedRef=useRef()

  //this is switching between the class names see line 39,40
  const[buttClassName, setButtClassName]=useState()

  // this is setting the style in line see line 30
  const[buttColors, setButtColors]=useState()

  const[classyButt, setClassyButt]=useState()


  //setClassyButt with a dependency sof if any issues occour it has something to default too 
  // if used the same use state as a set and dependency an infine loop would occour 
  useEffect(()=>{
    mountedRef.current=true
    if(mountedRef.current===true) setClassyButt(buttColors)
    return ()=> mountedRef.current===false
  },[buttColors])




  return (
    <div className='test-wrapper'>
      <div className='test-2'>
      
      
      <input type="color" onChange={e=>setButtColors(e.target.value)}/>  
        
        
        <button style={{backgroundColor: classyButt}} 
                onClick={e=>setButtClassName('butt-yellow')}>
          <h1>butt1</h1>
        </button>
        
        
        <button  className={buttClassName}   
        onMouseLeave={e=>setButtClassName('butt-red')}
        onMouseOver={e=>setButtClassName('butt-yellow')}>  
          <h1>butt2</h1>
        </button>



      </div>


      <div className='form-grid'>
        <div className='form-grid-line'>\
        <div>
          <p>Total amount   12.50</p>
        </div>
        <div>
          <label htmlFor="">checkbox stuff</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
        </div>
          <div>
          <label htmlFor="">input stuff stuff</label>
          <input type="text" id="fname" name="fname"/>
          </div>
        </div>
      </div>
      
      
      <div className='form-flex'>
        <div className='form-flex-line'>\
          <div>  
            <p>Total amount   12.50</p>
          </div>
          <div>
            <label htmlFor="">checkbox stuff</label>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
          </div>
          <div>
            <label htmlFor="">input stuff stuff</label>
            <input type="text" id="fname" name="fname"/>
          </div>
        </div>
      </div>

      
      
      
      <div className='card-test-cont'>
        <div className='card-test '>
        <svg className='avatar' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 192c27.25 0 51.75-11.5 69.25-29.75c15 54 64 93.75 122.8 93.75c70.75 0 127.1-57.25 127.1-128s-57.25-128-127.1-128c-50.38 0-93.63 29.38-114.5 71.75C124.1 47.75 96 32 64 32c0 33.37 17.12 62.75 43.13 80C81.13 129.3 64 158.6 64 192zM208 96h95.1C321.7 96 336 110.3 336 128h-160C176 110.3 190.3 96 208 96zM337.8 306.9L256 416L174.2 306.9C93.36 321.6 32 392.2 32 477.3c0 19.14 15.52 34.67 34.66 34.67H445.3c19.14 0 34.66-15.52 34.66-34.67C480 392.2 418.6 321.6 337.8 306.9z"/></svg>

          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
          <div class="snow"></div>
        </div>
      </div>




    </div>
  )
}

export default ReactTest