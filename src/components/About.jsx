import { Link, useParams } from "react-router"
import {info} from '../info/information.js'


const About = () => {

        const {id} = useParams()
        const currentInfo = info.find(i => (i.id) === Number(id))
        console.log('id:', id);
        console.log('currentInfo:', currentInfo);

    return (
        <div className='about-me'>
            <h3>Vem är jag</h3>
            <p>{currentInfo ? currentInfo.about : "Information saknas"}</p>
            <Link to="/Projekt"></Link>
        </div>
    )
}
export default About
 

