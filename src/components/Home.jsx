import { Link } from "react-router";

const Home = () => {

    return (
    <div className="home">
		<h2> Mitt Portfolio </h2>
		<Link to="/about"> Om mig </Link>
        </div>
    )
}
export default Home;