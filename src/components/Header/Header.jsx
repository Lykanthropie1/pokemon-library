import React from 'react'
import {NavLink} from "react-router-dom";

import classes from './Header.module.scss'
import logo from './assets/pokemon_logo.png';

const Header = () => {
    return (
            <div className={classes.component}>
                <div className={classes.content}>
                    <NavLink to="/home">
                        <div className={classes.logo}>
                            <img src={logo} alt="Logo" />
                        </div>
                    </NavLink>
                    <NavLink to="/about" className={classes.aboutLink}>
                        <div className={classes.about}>
                            <h2>О проекте</h2>
                        </div>
                    </NavLink>
                </div>
            </div>
    )
}
export default Header;