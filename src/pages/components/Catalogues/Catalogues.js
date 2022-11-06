import { Component } from "react";
import CatalogueItem from "../CatalogueItem/CatalogueItem";
import './Catalogues.css'
import config from "../../../config/config";

class Catalogues extends Component {
    componentDidMount() {
        fetch(`${config.apiHostURL}/coin_catalogs`)
        .then(response => response.json())
        .then(data=>{
            this.setState({catalogues: data})
        })
    }
    state = {
        catalogues: []
    } 
    render() {
        return(
            <div className='catalogues'>
                {this.state.catalogues.map((catalogue) => (
                    <div className='catalogue' key={catalogue.id}>
                       <CatalogueItem {...catalogue} />
                    </div>
                ))}                
            </div>
        )
    }
}

export default Catalogues;