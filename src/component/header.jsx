import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";


function Header() {
    return (
        <>
         {/* <!-- Topbar Start --> */}
    <div class="container-fluid bg-primary text-white d-none d-lg-flex">
        <div class="container py-3">
            <div class="d-flex align-items-center">
                <a href="index.html">
                    <h2 class="text-white fw-bold m-0">GrowMark</h2>
                </a>
                <div class="ms-auto d-flex align-items-center">
                    <small class="ms-4"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</small>
                    <small class="ms-4"><i class="fa fa-envelope me-3"></i>info@example.com</small>
                    <small class="ms-4"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</small>
                    <div class="ms-3 d-flex">
                        <a class="btn btn-sm-square btn-light text-primary rounded-circle ms-2" href=""><i
                                class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-sm-square btn-light text-primary rounded-circle ms-2" href=""><i
                                class="fab fa-twitter"></i></a>
                        <a class="btn btn-sm-square btn-light text-primary rounded-circle ms-2" href=""><i
                                class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Topbar End --> */}


    {/* <!-- Navbar Start --> */}
    <div class="container-fluid bg-white sticky-top">
        <div class="container">
            <nav class="navbar navbar-expand-lg bg-white navbar-light p-lg-0">
                <a href="index.html" class="navbar-brand d-lg-none">
                    <h1 class="fw-bold m-0">GrowMark</h1>
                </a>
                <button type="button" class="navbar-toggler me-0" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav">
                        <Link to="/" class="nav-item nav-link active">Home</Link>
                        <Link to="/about/" class="nav-item nav-link">About</Link>
                        <Link to="/service/" class="nav-item nav-link">Services</Link>
                        <Link to="/project/" class="nav-item nav-link">Projects</Link>
                        <div class="nav-item dropdown">
                            <Link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                            <div class="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                                <Link to="feature.html" class="dropdown-item">Features</Link>
                                <Link to="team.html" class="dropdown-item">Our Team</Link>
                                <Link to="testimonial.html" class="dropdown-item">Testimonial</Link>
                                <Link to="quote.html" class="dropdown-item">Quotation</Link>
                                <Link to="/try api/" class="dropdown-item">try api</Link>
                                <Link to="/API/" class="dropdown-item">API</Link>
                            </div>
                        </div>
                        <Link to="/contact/" class="nav-item nav-link">Contact</Link>
                    </div>
                    <div class="ms-auto d-none d-lg-block">
                        <Link to="" class="btn btn-primary rounded-pill py-2 px-3">Get Link Quote</Link>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    {/* <!-- Navbar End --> */}
        
        </>
    )
}

export default Header
