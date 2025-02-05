import { Link } from "react-router-dom";

function About(){
    return (
        <>
        <div>About page</div>
        <Link to="/" className="btn btn-success mx-2">Back to Root page</Link>
        </>
    );
}

export default About;