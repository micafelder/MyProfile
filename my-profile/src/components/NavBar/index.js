import { useState } from 'react'
import styles from './index.css'

export default () => {
    
    const tabsNames = [
        'Mis intereses',
        'Currículum',
        'Proyectos',
        'Tecnologias' 
    ]
    
    const [selectedTab, setSelectedTab] = useState(0)
    
    return (
        <div className='navBar'>
            <div className='myName'>
                <span className='letter'>M</span>icaela <span className='letter'>F</span>elder
            </div>
            <div className='tabs'>
                {
                    tabsNames.map((tab, index) => {
                        return(
                            <p 
                              key={index}
                              className={selectedTab===index? 'selected' : 'elem'}
                              onClick={() => setSelectedTab(index)}> {tab} </p>
                        )
                    })
                }
            </div>
            <div className='space'></div>
        </div>
    )
}