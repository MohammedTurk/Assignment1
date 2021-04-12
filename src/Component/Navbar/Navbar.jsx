import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <React.Fragment>
            <nav>
                <h2 className="logo"><Link to='/' id="logo-head">to do list</Link></h2>
                <ul className="menu">
                    <li>
                        <Link to="/"> home</Link>
                    </li>
                    <li>
                        <Link to="/list"> new to do</Link>
                    </li>
                    <li>
                        <Link to="/all-list"> all to do</Link>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    )
}
