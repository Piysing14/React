import { Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function Start(){
    return (

        <>
        <Link to="Home" className="btn btn-success mx-2">Home</Link>
        <Link to="About" className="btn btn-success mx-2">About</Link>
        <Link to="Contact" className="btn btn-success mx-2">Contact</Link>
        <Outlet></Outlet>


        </>
    );
}

export default Start;