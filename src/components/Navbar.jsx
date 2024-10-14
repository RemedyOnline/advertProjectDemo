import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <header className='flex justify-around'>
                <div>
                    <h1>LOGO</h1>
                </div>
                <nav>
                    <ul className='flex justify-around gap-5'>
                        <Link><li>NavItem 1</li></Link>
                        <Link><li>NavItem 2</li></Link>
                        <Link><li>NavItem 3</li></Link>
                        <Link><li>NavItem 4</li></Link>
                        <Link><li>NavItem 5</li></Link>
                    </ul>
                </nav>
                <div className='flex justify-around gap'>
                    <p>Login</p>
                    <p>Sign Up</p>
                </div>
            </header>
        </div>
    )
}

export default Navbar