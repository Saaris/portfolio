import { Link, useParams } from "react-router";
import {info} from '../info/information.js'
import saraBild from '../info/saraBild.jpg'

const Home = () => {

    // let {id} = useParams()
    // const image = info.find(i => (i.id) === id)
    // console.log('id:', id);
    
    // const shortInfo =  info.find(i => (i.id) === id)


    return (
        <div className="home">
          <h2>Mitt Portfolio</h2>
          <img className='picture' alt='profilbild' src={saraBild}></img>
   
          {/* <p>{shortInfo}</p> */}
          {/* {image ? image : 'info saknas'} */}
        </div>
      );
}
export default Home;