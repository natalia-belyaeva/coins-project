import React, { Component } from 'react';
import Header from '../components/Header/Header';
import SearchBox from '../components/SearchBox/SearchBox';
import Catalogues from '../components/Catalogues/Catalogues';
import './MainPage.css' 
import AdvancedFilter from '../components/AdvancedFilter/AdvancedFilter.js';

class MainPage extends Component {
    render() {
        return (
            <div className='main-page'>
                <Header />
                <main className='main-page-content'>
                    <div className='main-page-search-box'>
                        <SearchBox />
                    </div>
                </main>
                <section className='main-page-catalogues'>
                    <Catalogues />
                </section>
            </div>  
        )
    }
}

export default MainPage;