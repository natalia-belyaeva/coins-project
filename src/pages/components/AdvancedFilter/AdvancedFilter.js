import React, { useState } from 'react';
import './AdvancedFilter.css'
import config from '../../../config/config';
// import store from '../../../redux/store';
import types from '../../../redux/types';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

export default function AdvancedFilter(){
    const [toggle, setToggle]=useState(false)

    const [state,setState]= useState({
        countries: [],
        compositions: [],
        qualities:[],
        catalogs:[]
    })

    const dispatch = useDispatch();
    const filters=useSelector(state=>state.filters)
    
    useEffect(()=>{
        fetch(`${config.apiHostURL}/filters?filters=countries,compositions,qualities,catalogs`)
        .then(response=>response.json())
        .then(data=>{ 
            setState(data)
        })
    },[filters])

    function handleChangeCountry(event) {
        dispatch(action_1(event.target.value))
        function action_1(id) {
            return {
                type: types.addCountryId,
                payload: { id : id }
            };
        }
    }

    
    function handleChangeComposition(event) {
        dispatch(action_2(event.target.value))
        function action_2(id) {
            return {
                type: types.addConmpositionId,
                payload: { id : id }
            };
        }
    }

    function handleChangeQuality(event) {
        dispatch(action_3(event.target.value))
        function action_3(id) {
            return {
                type: types.addQualityId,
                payload: { id : id }
            };
        }
    }

    function handleChangeInputPriceFrom(event) {
        dispatch(action_4(event.target.value))
        function action_4(input) {
            return {
                type: types.addPriceFrom,
                payload: { id : input }
            };
        }
    }

    function handleChangeInputPriceTo(event) {
        dispatch(action_5(event.target.value))
        function action_5(input) {
            return {
                type: types.addPriceTo,
                payload: { id : input }
            };
        }
    }

    function handleChangeInputYearFrom(event) {
        dispatch(action_6(event.target.value))
        function action_6(input) {
            return {
                type: types.addPriceFrom,
                payload: { id : input }
            };
        }
    }

    function handleChangeInputYearTo(event) {
        dispatch(action_7(event.target.value))
        function action_7(input) {
            return {
                type: types.addYearTo,
                payload: { id : input }
            }
        }
    }
    
    console.log(state);
        return(
            <div className='advanced-filter'>
                <div className='advanced-filter-visible'>
                <div className='advanced-filter-header' onClick={()=>setToggle(!toggle)}>
                    <div> Advanced filter </div>
                    <img 
                        className='advanced-filter-header-arrow' 
                        src={toggle ? '/img/icons/arrow-top.svg' : '/img/icons/arrow-down.svg'} 
                        alt='#'
                    />
                </div>
            </div>
            {!toggle
            ? '' 
            : <div className='advanced-filter-drop-down-list'>
                    <div className='left-colomn'>
                        <div className='filter-item'>
                            <div className='filter-item-name'>Issuing country</div>
                            <select className='drop-down-list' onChange={handleChangeCountry} name="country" id="country-select">
                                <option hidden>Choose country</option>
                                {state.countries.map((country) => (
                                    <option value={country.id} key={country.id} className='drop-down-list-item'>{country.country_name}</option>
                                ))} 
                            </select>
                        </div>
                        <div className='filter-item'>
                            <div className='filter-item-name'>Metal</div>
                            <select className='drop-down-list' onChange={handleChangeComposition} name="composition" id="omposition-select">
                                <option hidden>Choose metal</option>
                                {state.compositions.map((comp) => (
                                    <option value={comp.id} key={comp.id} className='drop-down-list-item'>{comp.composition_name}</option>
                                ))} 
                            </select>
                        </div>
                        <div className='filter-item'>
                            <div className='filter-item-name'>Quality of coins</div>
                            <select className='drop-down-list' onChange={handleChangeQuality} name="qualities" id="quality-select">
                                <option hidden>Choose quality</option>
                                {state.qualities.map((qual) => (
                                    <option value={qual.id} key={qual.id} className='drop-down-list-item'>{qual.quality_name}</option>
                                ))} 
                            </select>
                        </div>
                    </div>
                    <div className='right-colomn'>
                        <div className='filter-item-name'>Price</div>
                        <div className='from-to-filter'>
                            <p>from</p>
                            <input type='number' className='filter-from' onChange={handleChangeInputPriceFrom}></input>
                            <p>to</p>
                            <input type='number' className='filter-to' onChange={handleChangeInputPriceTo}></input>
                        </div>
                        <div className='filter-item-name'>Year of issue</div>
                        <div className='from-to-filter'>
                            <p>from</p>
                            <input type='number' className='year-from' onChange={handleChangeInputYearFrom}></input>
                            <p>to</p>
                            <input type='number' className='year-to' onChange={handleChangeInputYearTo}></input>
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
