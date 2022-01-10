import React from 'react'
import styles from './index.css'

const Article = (props) =>{

    return(
        <div className='article'>

            <img className='img' src={require(`../../articles/images/${props.img}.png`)} />
           
            <div className='content'>
                <h2 className='titulo'>{props.title}</h2>
                <div>{props.desc}</div>
            </div>

        </div>
    )
}

export default Article;