import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Header.css";

const Header = () => {
    // const { user, logOut } = useAuth();

    return (
        <div>
            <div className="header">
                <div className="header-inner">
                    <nav className="navbar navbar-expand-lg navbar-dark ms-auto">
                        <div className="container">
                            <NavLink className="navbar-brand fw-bold fs-3 text-warning" to="/home">Blood</NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                              <ul className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            <NavLink style={({ isActive }) => ({ color: isActive ? 'orange' : '#764ABC' })} className="nav-link active mx-1  " aria-current="page" to="/home">Home</NavLink>
                                        </li>
                                        {/* <li className="nav-item">
                                            <NavLink style={({ isActive }) => ({ color: isActive ? 'orange' : '#764ABC' })} className="nav-link active mx-1  " to="/mobiles">SHOP</NavLink>
                                        </li> */}
                                        <li className="nav-item">
                                            <NavLink style={({ isActive }) => ({ color: isActive ? 'orange' : '#764ABC' })} className="nav-link active mx-1  " href="#contact" to="/contact">Contact Us</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink style={({ isActive }) => ({ color: isActive ? 'orange' : '#764ABC' })} className="nav-link active mx-1  " to="/about">About Us</NavLink>
                                        </li>
                                        {/* <li className="nav-item">
                                            <NavLink style={({ isActive }) => ({ color: isActive ? 'orange' : '#764ABC' })} className="nav-link active mx-1  " to="/dashboard">DASHBOARD</NavLink>
                                        </li> */}

                                        {/* <li className="nav-item">
                                            <p onClick={logOut} className='nav-link active mx-1 text-danger'>LOGOUT</p>
                                        </li> */}

                                    </ul>
                                
                                {/* <div className="text-center">
                                    <img className="img-fluid w-25 rounded-circle px-1" src={user?.photoURL} alt="" />
                                    <p className="text-info">{user?.displayName}</p>
                                </div> */}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;