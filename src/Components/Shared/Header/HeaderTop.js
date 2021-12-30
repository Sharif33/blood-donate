import React from 'react';
// import { NavLink } from 'react-router-dom';

const HeaderTop = () => {
    return (
        <div>
                    <nav className="navbar navbar-expand-lg bg-light ms-auto navbar-dark">
                        <div className="container">
                            <ul className="navbar-nav">
                              <li>
                                    <a className="text-decoration-none text-dark mx-1" href="tel:+880-01635-501311"><span><i className="fas fa-phone-alt text-warning"> </i> : </span> +880 1635-501311</a>
                                </li>
                                <li>
                                    <a className="text-decoration-none text-dark mx-1" href="mailto:md.shariful.islam2511@gmail.com"><span><i className="far fa-envelope text-warning"> : </i></span> md.shariful.islam2511@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
        </div>
    );
};

export default HeaderTop;