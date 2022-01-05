import styles from './index.css'
import { useState } from 'react'

export default () => {

    const preguntas = [
        {
            q: 'Cuantos años tenes?',
            a: 'Tengo 22 años'
        },
        {
            q:'Tenes auto?',
            a:'No'
        },
        {
            q: 'Cuantos años tenes?',
            a: 'Tengo 22 años'
        },
        {
            q:'Tenes auto?',
            a:'No'
        }
    ]

    const [selectedQuestion, setSelectedQuestion] = useState(-1)


    const ShowResponse = (index) => {
        //Me fijo si mi indice es el que esta seleccionado,
        //Si mi indice no esta seleccionado, lo pongo como el nuevo indice, y muestro mi respuesta
        //Si mi indice esta seleecionado, ya  estoy mostrando mi respuesta, entonces paso a no mostrar ninguna respuesta
        if(index===selectedQuestion) setSelectedQuestion(-1)
        else setSelectedQuestion(index)
    }

    return(
        <div className='accordion'>
            {
                preguntas.map((pregunta,index) => {
                    return (
                        <div key={index}>
                            <div className='question'>
                                <div>{pregunta.q}</div>
                                <div onClick={()=> ShowResponse(index)}>{
                                selectedQuestion!==index? '▼': '▲' }</div>
                            </div>
                            { selectedQuestion===index && <div className='response'>{pregunta.a}</div> }
                        </div>
                    )
                })
            }
        </div>
    )
}