import { useState } from 'react'
import styles from './index.css'
import Link from '../Link'

export default () => {
    
    const sections = [
        {
            id:0,
            name:'Currículum',
            href:'curriculum'
        },
        {
            id:1,
            name: 'Artículos',
            href: 'articles'
        },
        {
            id:2,
            name: 'Proyectos',
            href: 'projects'
        },
        {
            id:3,
            name: 'Tecnologías',
            href: 'technologies'
        }
    ]
        
    return (
        <div className='navBar'>
            <Link href='/' className='myName'>
                <span className='letter'>M</span>icaela <span className='letter'>F</span>elder
            </Link>
            <div className='tabs'>
                {
                    sections.map((section, index) => {
                        return(
                            <Link 
                              href={section.href}
                              key={index}
                              children={section.name}
                              className={styles.selected}
                            />
                        )
                    })
                }
            </div>
            <div className='space'></div>
        </div>
    )
}