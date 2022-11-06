import React, { Component } from "react";
import ListOfCoinsHeader from "../components/ListOfCoinsHeader/ListOfCoinsHeader";
import SearchBox from "../components/SearchBox/SearchBox";
import AdvancedFilter from "../components/AdvancedFilter/AdvancedFilter";
import './ListOfCoins.css';
import CoinsCatalogue from "../components/CoinsCatalogue/CoinsCatalogue";

class ListOfCoins extends Component{
    render() {
        // console.log(this.props)
        return(
            <div className='list-of-coins'>
                <ListOfCoinsHeader />
                <main className='coins-page-content'>
                    <div className='coins-page-search-box'>
                        <SearchBox />
                    </div>
                    <div className='coins-page-filter'>
                        <AdvancedFilter />
                    </div>
                </main>
                {/* <section className='main-page-catalogues'>
                    <CoinsCatalogue />                    
                </section>  */}
            </div>
        )
    }
}

export default ListOfCoins;
