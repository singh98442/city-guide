import React from 'react';
import logo from "./logo-hariyon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img className='imgProperties' src={logo} alt="" srcset="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item mx-3">
                                <Link className="nav-link active text-white text-uppercase fw-bold fst-italic" aria-current="page" to="/">Home<i className=" ms-2 fa-solid fa-house"></i></Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link text-white text-uppercase fw-bold fst-italic" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link text-white text-uppercase fw-bold fst-italic" to="/gallery">Gallery</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link text-white text-uppercase fw-bold fst-italic" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link text-white text-uppercase fw-bold fst-italic" to="/feedback">Feedback</Link>
                            </li>


                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
