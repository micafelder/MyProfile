import styles from './index.css'

const personality = [
    {
        title: 'Mica Felder',
        values: [
            // 'Creativa',
            // 'Trabajo en equipo',
            // 'Tesonera',
            // 'Responsable',
            // 'Organizada'
        ]
    }
]

const showList = (list) => (
    <ul>
      {list.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
);

const Curriculum = () => {
    return(
        <>
        <img src={require("../../images/curriculum.jpeg")} className='img'/>
        <div className='rightColumn'>
            <div>
                {
                    personality.map((value,index)=>{
                        return (
                            <div className='personality'>
                                <div className='title'>{value.title}</div>
                                <div>{showList(value.values)}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
)}

export default Curriculum;
