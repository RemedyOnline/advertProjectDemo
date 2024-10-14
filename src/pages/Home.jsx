import React from 'react'
import Navbar from '../components/Navbar'
import RootLayout from '../layouts/RootLayout'

const Home = () => {
    return (
        <RootLayout headerText="Yo bro!">
            <p>Hello World!</p>
        </RootLayout>
    )
}

export default Home