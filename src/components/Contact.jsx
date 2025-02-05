import { Link } from "react-router-dom";

function Contact(){
    return (
        <>
        <div>Contact page</div>
        <Link to="/" className="btn btn-success mx-2">Back to Root page</Link>
        </>
    );
}

export default Contact;