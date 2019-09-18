import React from 'react'
import { Link } from 'gatsby'

import headerstyles from './header.module.scss'

const Header = () => {
    return (
        <header className={headerstyles.header}>
            <h1>
                <Link to="/" className={headerstyles.title}>
                    Xalkan
                </Link>
            </h1>
            <nav>
                <ul className={headerstyles.navlist}>
                    <li>
                        <Link to="/" className={headerstyles.navitem} activeClassName={headerstyles.activeNavItem}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className={headerstyles.navitem} activeClassName={headerstyles.activeNavItem}>About</Link>
                    </li>
                    <li>
                        <Link to="/blog" className={headerstyles.navitem} activeNavItem={headerstyles.activeNavItem}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={headerstyles.navitem} activeClassName={headerstyles.activeNavItem}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header