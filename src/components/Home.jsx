import { Link, useParams } from "react-router";
import {info} from '../info/information.js'


const Home = () => {

    const {id} = useParams()
    const image = info.find(i => (i.id) === Number(id))
    console.log('id:', id);
    

    return (
        <div className="home">
          <h2>Mitt Portfolio</h2>
          {image ? image.url : 'info sknas'}
        </div>
      );
}
export default Home;