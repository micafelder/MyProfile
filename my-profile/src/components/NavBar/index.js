import { useState } from 'react'
import styles from './index.css'
import Link from '../Link'

export default () => {
    
    const sections = [
        {
            name:'Currículum',
            href:'curriculum'
        },
        {
            name: 'Mis intereses',
            href: 'articles'
        },
        {
            name: 'Proyectos',
            href: 'projects'
        },
        {
            name: 'Tecnologias',
            href: 'technologies'
        }
    ]
    
    const [selectedTab, setSelectedTab] = useState(0)
    
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
                              className={selectedTab===index? 'selected' : 'elem'}
                              children={section.name}
                            />
                        )
                    })
                }
            </div>
            <div className='space'></div>
        </div>
    )
}