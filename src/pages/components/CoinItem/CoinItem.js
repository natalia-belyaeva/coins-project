import { Component } from "react";
import { Link } from "react-router-dom";
import './CoinItem.css'
import { addCoinIdToState } from '../../../redux/actions';
import { connect } from "react-redux";

class CoinItem extends Component {
    render() {
        const {coin_id, name, img, short_description} = this.props;
        let coinImg = `/img/images/${img}`
        let linkTo = `/coinpage/${coin_id}`
        return(
            <div className='coin-item'>
                <img className='coin-item-img' src={coinImg} alt='coin'/>
                <div className='coin-item-text'>
                    <span className="text-wrapper">
                        <span onClick={this.props.addCoinIdToStateHandler(coin_id)}>
                            <Link to = {linkTo} className='coin-item-name'> {name} </Link>
                        </span>
                        <div className='coin-item-description'>{short_description}</div>
                    </span>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        coinId: state.filters.coin
    }
};

const mapDispatchToProps = dispatch => ({
    addCoinIdToStateHandler: (id) => dispatch(addCoinIdToState (id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinItem);