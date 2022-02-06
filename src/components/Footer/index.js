import { useState } from "react";
import lnk from '../../images/linkedin.png'
import gh from '../../images/github.png'
import styles from './index.css'

export default () => {
    
   
    return(
        <div className='footer'>
            <div>
                <div className='contacto'>Contacto</div>
                <div>Celular: 098856111</div>
                <div>Email: felder.micaela2009@gmail.com</div>
            </div>
            <div className='links'>
                <a href="https://www.linkedin.com/in/micaela-felder/" target="_blank">
                    <img className='img1' src={lnk}></img>
                </a>
                <a href="https://github.com/micafelder" target="_blank">
                    <img className='img2' src={gh}></img>
                </a>
            </div>
        </div>
    )
}