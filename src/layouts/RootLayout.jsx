import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const RootLayout = ({ headerText, children }) => {
    return (
        <div>
            <Navbar />
            <h1>{headerText}</h1>
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default RootLayout