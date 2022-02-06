import React from 'react'
import styles from './index.css'
import Link from '../Link/index'

const Article = (props) =>{

    return(
        <Link href={props.href} className='article'>

            <img className='img' src={require(`../../articles/images/${props.img}.png`)} />
           
            <div className='content'>
                <h2 className='titulo'>{props.title}</h2>
                <div>{props.desc}</div>
            </div>

        </Link>
    )
}

export default Article;