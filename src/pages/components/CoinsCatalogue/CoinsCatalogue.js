import config from "../../../config/config";
import CoinItem from "../CoinItem/CoinItem";
import './CoinsCatalogue.css'
import store from '../../../redux/store'
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function CoinsCatalogue() { 
    const filters=useSelector(state=>state.filters)
   
    const [state, setState] = useState({
        coins: [

        ]
        
    })
   
    useEffect(() => {
        let infoFromState = store.getState()
        
        let i = 1
        let filterSrting = ''
        for (let filter in infoFromState.filters) {

            if (infoFromState.filters[filter] != null) {

                if (i < 2) {

                    filterSrting += `${filter}=${infoFromState.filters[filter]}`

                } else {
                    filterSrting += `&${filter}=${infoFromState.filters[filter]}`
                }
                i++
            }
        }
        console.log(`${config.apiHostURL}/listofcoins/?${filterSrting}`);
        fetch(`${config.apiHostURL}/listofcoins/?${filterSrting}`)
            .then(response => response.json())
            .then(data => {
                setState({
                    coins: data
                })

            })



    },[filters])




    return(
        <div className='coins-catalogues'>
            {state.coins.map((coin) => (
                <div className='coins' key={coin.coin_id}>
                    <CoinItem {...coin} />
                </div>
            ))}
        </div>
    )
}
