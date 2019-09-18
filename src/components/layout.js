import React from 'react'

import '../styles/index.scss'

import Header from '../components/header'
import Footer from '../components/footer'

const Layout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout