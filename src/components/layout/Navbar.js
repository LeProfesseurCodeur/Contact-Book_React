import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark pt-4">
            <div className="container">
                <Link className="btn text-white" to="/">
                    <FontAwesomeIcon icon={faHome} />
                </Link>
                {/* <Link className="btn text-white" to="/users/add">
                    <FontAwesomeIcon icon={faUser} />
                </Link> */}
            </div>
        </nav>
    );
};

export default Navbar;