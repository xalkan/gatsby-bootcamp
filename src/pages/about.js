import React from 'react'
import { Link } from 'gatsby'

import Footer from '../components/footer'
import Header from '../components/header'

const AboutPage = () => {
    return (
        <div>
            <Header />
            <h1>About</h1>
            <p>This is an about page</p>
            <Link to="/contact">Contact</Link>
            <Footer />
        </div>
    )
}

export default AboutPage