import styles from './index.css'
import { useState } from 'react'

export default () => {

    const preguntas = [
        {  
            q:'Sobre mí',
            a:[
                'Tengo 22 años, vivo en Montevideo Uruguay.',
                'Estudio Licenciatura en Sistemas en  la ORT, comence la carrera en el 2019 (cursando tercer año).',
                'Luego del liceo me fui un año a Israel a estudiar Liderazgo con amigos.',
                'Creativa, con muchas ganas de aprender y de trabajar en equipo.'
            ]
           
        },
        {
            q: 'Intereses',
            a: [
                'Estudio danza',
                'Viajar',
                'Diseño',
                'Coaching'
            ]
        },
        {
            q: 'Idiomas',
            a: [
                'Inglés: CPE (2020) y FCE (certificado)',
                'Portugués: dominio oral y escrito básico'
            ]
        },
        {
            q:'Experiencia Laboral',
            a:`Trabajé de Marzo a Octubre de 2021 en E&Y (Ernst and Young) como Asistente de Consultoría
            (RPA y Auditoría de Sistemas).`
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

    const showList = (list) => (
        <ul>
          {list.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
    );

    return (
        <div className='accordion'>
            {
                preguntas.map((pregunta, index) => {
                    return (
                        <div key={index}>
                            <div className='question' onClick={() => ShowResponse(index)}>
                                <div>{pregunta.q}</div>
                                <div>
                                    {selectedQuestion !== index ? '▼' : '▲'}
                                </div>
                            </div>
                            {selectedQuestion === index && !Array.isArray(pregunta.a) && <div className='response'>{pregunta.a}</div>}
                            {selectedQuestion === index && Array.isArray(pregunta.a) &&
                                <div className='response'>
                                    {showList(pregunta.a)}
                                </div>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}