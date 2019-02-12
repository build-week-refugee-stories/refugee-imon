import React from 'react';
import { Link } from 'react-router-dom'

import './Nav.css'

function Nav() {

    return (
        <div>
            <header className='header'>
                <nav className='nav'>
                    <div className='refugee'>
                        <Link to='/'>Refugee</Link >
                    </div>
                    <div className='menu-links'>
                        <Link to='/' className='link'>Home</Link>
                        <Link to='/stories' className='link'>Stories</Link>
                        <Link to='/submit-story' className='link'>Submit Your Story</Link>
                        <Link to='/login' className='link'>Admin Log-In</Link>
                    </div>
                </nav>
            </header>

        </div>
    )
}

export default Nav;