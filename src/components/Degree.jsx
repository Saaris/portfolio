import { Link, useParams } from 'react-router'


const Degree = () => {

    const {id} = useParams()
    // const currentDegree = info.find(i => (i.id) === Number(id))
    // console.log('id:', id);
    // console.log('currentDegree:', currentDegree);

    return(

    <div className='degree'>
        <h3>Utbildning</h3>
        {/* <p>{currentDegree ? currentDegree.education : "Information saknas"}</p> */}
        <p>Jag utbildade mig till <b>socialsekreterare</b> och tog min examen februari 2012. Jag har arbetat med socialt arbete i cirka 12 år. Hösten 2024 valde jag att studera <b>frontend-developer</b> då jag vill byta karriärsinriktning. Jag tar min examen som frontend-developer sommaren 2026</p>
    </div>
)
}
export default Degree;