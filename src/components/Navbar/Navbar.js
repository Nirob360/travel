import React, { useEffect, useState } from 'react';
import { FaBars, FaHotjar, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Navbar.scss';

export default function Navbar() {
    const [Click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!Click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Travel <FaHotjar className="fa-typo3" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick} role="button" tabIndex="0">
                        {Click ? <FaTimes className="fa-bars" /> : <FaBars className="fa-times" />}
                    </div>
                    <ul className={Click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                                Service
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/product" className="nav-links" onClick={closeMobileMenu}>
                                Product
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/singup"
                                className="nav-links-mobile"
                                onClick={closeMobileMenu}
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btn--outline">SING UP </Button>}
                </div>
            </nav>
        </>
    );
}
