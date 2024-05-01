import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import './Header.scss';
import Button from "../Button/Button";



const Header = () => {
    const [showMenu, setShowMenu] = useState(true);







    const toggleMenu = () => setShowMenu(!showMenu);

    useEffect(() => {
        if (showMenu) {
            setShowMenu(false);
        }
    }, []);




    return (
        <header>
            <nav>
                <ul>
                    <div className={`item ${!showMenu ? '' : 'nav-open'}`}>
                            <li id="menu-toggle" className="menu-toggle" onClick={() => toggleMenu()}>
                                <span className="menu-toggle-bar menu-toggle-bar--top"></span>
                                <span className="menu-toggle-bar menu-toggle-bar--middle"></span>
                                <span className="menu-toggle-bar menu-toggle-bar--bottom"></span>
                            </li>
                    </div>

                    <div className={'item'}>
                        <li className={'logo'}>
                            <Link to="/">Saphiir.</Link>
                        </li>
                    </div>

                    <div className={`item ${!showMenu ? '' : 'showMenu'}`}>
                        <li className={'li-home'}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={'li-expertise'}>
                            <Link to="/">Popular</Link>
                        </li>
                        <li className={'li-history'}>
                            <Link to="/">All Posts</Link>
                        </li>
                        <li className={'li-history'}>
                            <Button content={'Get started'} filled={true} />
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    );
};

export default Header;