import React,{useState} from 'react'
import './style/Footer.css'
import Modal from '../Modal/Modal'


export default function Footer() {
    const[hideShow,setHideShow]=useState(false)

    const handleHideShow = () =>{
        setHideShow(!hideShow)
    }



    return (
        <div className="footer">
            <div className='footer-container'>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/thomas-buscemi/" target='_blank'><i class="fa-brands fa-linkedin fab"></i></a>
                    <a href="https://github.com/TBuscemi/" target='_blank'><i class="fa-brands fa-github fab"></i></a>
                    <a onClick={handleHideShow}><i class="fa-light fa-envelope fab fa"></i></a>
                    {/* <a href="GoodGuyGraves#6527" target='_blank'><i class="fab fa-discord"></i></a> */}
                </div>
            </div>
            <Modal onClick={handleHideShow} hideShow={hideShow}>   
                <h1> helllo </h1>
            </Modal>
        </div>
    )
}
