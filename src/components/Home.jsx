import { Link } from "react-router-dom";

function Home(){
    return (
        <>
        <div>Home page</div>
        <Link to="/" className="btn btn-success mx-2">Back to Root page</Link>

        </>
    );
}

export default Home;