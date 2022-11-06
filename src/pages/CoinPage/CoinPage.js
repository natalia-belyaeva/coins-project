import React, { Component } from "react";
import CoinDescription from "../components/CoinDescription/CoinDescription";

class CoinPage extends Component {
    render() {
        return(
            <div>
                <p>Coin</p>
                <CoinDescription />
            </div>            
        )
    }
}

export default CoinPage;