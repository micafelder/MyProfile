import { useState } from 'react'
import styles from './index.css'

export default () => {
    
    const tabsNames = [
        'Mis intereses',
        'Currículum',
        'Artículos',
        'Proyectos y tecnologias' 
    ]
    
    const [selectedTab, setSelectedTab] = useState(0)
    
    return (
        <div className='navBar'>
            <div className='myName'>
                Micaela Felder
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
            <div>
                Aca va el logo
            </div>
        </div>
    )
}