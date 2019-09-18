import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <div>
            <Layout>
                <h1>About</h1>
                <p>This is an about page</p>
                <Link to="/contact">Contact</Link>
            </Layout>
        </div>
    )
}

export default AboutPage