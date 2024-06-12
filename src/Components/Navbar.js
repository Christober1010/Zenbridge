import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div className='navigation-bar'>
            <nav class="navbar navbar-expand-lg px-5 ">
                <div class="container-fluid">
                    <a class="navbar-brand fw-bold fs-2 text-light" href="#">Zenbridge</a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to={'/'}><a class="nav-link active text-light" aria-current="page" href="#">Home <i className='fa fa-chevron-down'></i></a></Link>
                            
                            <a class="nav-link text-light" href="#">Products <i className='fa fa-chevron-down'></i></a>
                            <a class="nav-link text-light" href="#">Solutions <i className='fa fa-chevron-down'></i></a>
                            <a class="nav-link text-light" href="#">Pricing </a>
                            <a class="nav-link text-light" href="#">Resources<i className='fa fa-chevron-down'></i> </a>
                            <a class="nav-link text-light" href="#">Resources<i className='fa fa-chevron-down'></i></a>
                            <Link to={'/list'}>
                                <a class="nav-link text-warning" href="#">List</a>
                            </Link>
                            <Link to={'/userDetails'}>
                            <a class="nav-link text-warning" href="#">Userdetails</a>
                            </Link> 
                            <Link to={'/counter'}><a class="nav-link text-warning" href="#">Counter</a></Link>
                            
                            <div>
                                <button className='btn btn-primary m-2'>Contact Sales <i className='fa fa-angle-right'></i></button>
                                <button className='btn btn-primary m-2'>Log in <i className='fa fa-user '></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar