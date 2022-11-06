import { Component } from "react";
import './CatalogueItem.css'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addIdToState } from "../../../redux/actions";

class CatalogueItem extends Component { 
    render() {
        const {id, catalog_name, catalog_img} = this.props;
        let img = `/img/images/${catalog_img}`
        let linkTo = `/catalog/${id}`
        return(
            <article className='catalogue-item'>
                <div className='catalogue-item-name'>{catalog_name}</div>
                <div className='show-all'>
                    <span onClick={() => this.props.addIdToStateHandler(id)}>
                        <Link to ={linkTo} className='show-all-name' > Show all </Link>
                    </span>
                    <img className='arrow-right' src='/img/icons/arrow-right.svg' alt='#' />
                </div>
                <img className='catalogue-item-img' src={img} alt='coin' />
            </article>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        catalogId: state.filters.catalog
    }
};

const mapDispatchToProps = dispatch => ({
    addIdToStateHandler: (id) => dispatch(addIdToState (id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogueItem);