import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header '>
            <Link to='/'>Home</Link>
            <Link to='/countries'>Countries</Link>
            <Link to='/favourite'>Favourite</Link>
            <Link to='/about'>About</Link>
        </div>
    );
};

export default Header;