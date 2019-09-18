import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'

import '../styles/index.scss'
import layoutstyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div className={layoutstyles.container}>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout