import { useState } from "react";
import { useDispatch } from 'react-redux'
import './SearchBox.css'
import { Link } from 'react-router-dom';


export default function SearchBox(){
    const [state, setState]=useState({
        searchInput: ""
    })
    const dispatch = useDispatch();
    function handleChangeInput(event){
            dispatch(action(event.target.value))
    }
    function action(input) {
        return { 
            type: 'ADD_INFO_FROM_INPUT',
            payload: { id:input }
        };
        
    }
    return(
        <div className='search-box'>
            <form className='search-box-form'>
                <div>Input field</div> 
                <div className='search-box-input'>
                    <div>
                        <label className='search-box-form-label'>
                            <input 
                                type='text'
                                className='search-box-form-input'
                                onChange={handleChangeInput}
                            />
                        </label>
                        <Link to='/listofcoins'>
                            <button
                                type='submit'
                                className='search-box-form-submit' 
                            >
                                Search
                            </button>
                        </Link>                             
                    </div>                                           
                </div>  
            </form>
        </div>
    )
}


