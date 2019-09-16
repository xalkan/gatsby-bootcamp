import React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
    return (
        <div>
            <h1>Starting a new project</h1>
            <p>Thats right, starting a new project</p>
            <Link to="/about">About</Link><br/>
            <Link to="/blog">Blog</Link><br/>
            <Link to="/contact">Contact</Link><br/>
        </div>
    )
}

export default IndexPage