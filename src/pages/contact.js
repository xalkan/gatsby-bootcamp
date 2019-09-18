import React from 'react'

import Footer from '../components/footer'
import Header from '../components/header'

const ContactPage = () => {
    return (
        <div>
            <Header />
            <h1>Contact</h1>
            <p>This is a contact page</p>
            <a href="https://google.com" target="_blank">Contact Us</a> 
            <Footer />
        </div>
    )
}

export default ContactPage