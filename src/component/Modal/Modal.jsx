import React, {useEffect} from 'react';
import './style/Modal.css'

const Modal=(props)=> {
    

    useEffect(()=>{

    },[])

    document.addEventListener('keydown', (e)=>{
        if(e.key === 'Escape' && props.hideShow == true){
            props.onClick();
        }
    })

    return ( 
        <>
            {props.hideShow ? 
            <div className = "modal-wrapper"  onClick={()=>props.onClick()}>
                <div className="modal-body" onClick={e=>{e.stopPropagation()}}>
                    {props.children}
                    <br/>
                    <button className="modal-close" onClick={props.onClick}>Close Without Saving</button>
                </div>
            </div>
            
            : null}
        </>
     );
}

export default Modal;