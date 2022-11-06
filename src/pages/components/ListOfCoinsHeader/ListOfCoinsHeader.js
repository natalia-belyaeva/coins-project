import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ListOfCoinsHeader.css'

class ListOfCoinsHeader extends Component {
    render() {
        return (
            <header className='header'>
                <h1 className='header-title'>
                    LIST OF COINS
                </h1>
                <div className='link'>
                    <Link to ='/' className='home-page-link'> HomePage </Link>
                    <p className='list-of-coins'>— List of coins</p>
                </div>
            </header>
        )
    }
}

export default ListOfCoinsHeader;