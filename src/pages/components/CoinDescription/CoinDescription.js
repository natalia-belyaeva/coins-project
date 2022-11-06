import React, { Component } from "react";
import './CoinDescription.css';
import config from "../../../config/config";

class CoinDescription extends Component {
    state = {
        coinId: null,
        coin: {
            img: '',
            img_revers: ''
        }
    }

    componentDidMount() {
        console.log(this.props)
        console.log('fetch', `${config.apiHostURL}/coinpage/${this.state.coinId}`)
        fetch(`${config.apiHostURL}${document.location.pathname}`)
        .then(response=>response.json())
        .then(data=>{ 
            console.log(data)
            this.setState({
                coin: data[0]
            }) 
        })
    }

    render() {
        let coinImg = `/img/images/${this.state.coin.img}`;
        let coinRevers = `/img/images/${this.state.coin.img_revers}`;
        return(
            <div className="wrapper">
                <div className='coin-description'>
                <div className='coin-img'>
                    <img className='front-img' src={coinImg} alt='coin' /> <br/>
                    <img className='revers-img' src={coinRevers} alt='coin' />
                </div>
                <div className='coin-desc'>
                    <div className='coin-desc-name'>{this.state.coin.name}</div>
                    <div className='coin-full-desc'>{this.state.coin.description}</div>
                    <table className='info-table'>
                        <tbody>
                            <tr>                                                                                                                       
                                <td>Issuing Country</td>
                                <td>{this.state.coin.country_name}</td>
                            </tr>
                            <tr>
                                <td>Composition</td>
                                <td>{this.state.coin.composition_name}</td>
                            </tr>
                            <tr>
                                <td>Quality</td>
                                <td>{this.state.coin.quality_name}</td>
                            </tr>
                            <tr>
                                <td>Denomination</td>
                                <td>{this.state.coin.denomination}</td>
                            </tr>
                            <tr>
                                <td>Year</td>
                                <td>{this.state.coin.year}</td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td>{this.state.coin.weight}g</td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>{this.state.coin.price}$</td>
                            </tr>
                        </tbody>
                    </table>
                </div>  
            </div>
        </div>   
        )
    }
}

// const mapStateToProps = (state) => {
//     console.log('coin description', state);
//     return {
//         coinId: state.filters.coin
//     }
// };

export default CoinDescription;