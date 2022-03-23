import React,{useEffect,useState,useRef} from 'react'
import './style/ReactTest.css'
const ReactTest = () => {

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
      {/* <div className='test-2'>
      
      
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
      
      
        <div
      tabIndex={1}
      onFocus={(e) => {
        if (e.currentTarget === e.target) {
          console.log('focused self');
        } else {
          console.log('focused child', e.target);
        }
        if (!e.currentTarget.contains(e.relatedTarget)) {
          // Not triggered when swapping focus between children
          console.log('focus entered self');
        }
      }}
      onBlur={(e) => {
        if (e.currentTarget === e.target) {
          console.log('unfocused self');
        } else {
          console.log('unfocused child', e.target);
        }
        if (!e.currentTarget.contains(e.relatedTarget)) {
          // Not triggered when swapping focus between children
          console.log('focus left self');
        }
      }}
    >
      <input id="1" />
      <input id="2" />
    </div>
      
      </div> */}


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


    </div>
  )
}

export default ReactTest