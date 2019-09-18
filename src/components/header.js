import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerstyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header className={headerstyles.header}>
            <h1>
                <Link to="/" className={headerstyles.title}>
                    { data.site.siteMetadata.title }
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