import types from './types.js';

let initialState = {
    filters: {
        country_id: null,
        composition: null,
        quality: null,
        catalog: null,
        coin: null,
        metal: null,
        price: null,
        year_from: null,
        year_to: null,
        input: null, 
        input_price_to: null,
        input_price_from: null
    }   
}

function reducer(state=initialState, action){
    console.log(action);
   
    switch(action.type) {
        case types.addIdToState: 
            clearFilters(state.filters)
            return addFilter('catalog',action.payload.id, state)
            
        case types.addCoinIdToState:
            return addFilter('coin_id',action.payload.id, state)
     
        case types.addInfoFromInput:
            return addFilter('input',action.payload.id, state)
      
        case types.addCountryId:
            return  addFilter('country',action.payload.id, state)
  
        case types.addConmpositionId:
            return addFilter('metal',action.payload.id, state)
    
        case types.addQualityId:
            return addFilter('quality',action.payload.id, state)

        case types.addPriceFrom:
               return addFilter('input_price_from',action.payload.id, state)

        case types.addPriceTo:
            return addFilter('input_price_to',action.payload.id, state)

        case types.addYearFrom:
            return addFilter('year_from',action.payload.id, state)

        case types.addYearTo:
            return addFilter('year_to',action.payload.id, state)

        default: return state;
    }
    
}
function clearFilters(filters){
    for(let filter in filters){
        filters[filter]=null
    }
}
function addFilter(property, value, state){
    console.log({
        ...state, 
        filters: {
            ...state.filters,
            [property]: value
        }
        
    });
    return {
        ...state, 
        filters: {
            ...state.filters,
            [property]: value
        }
        
    }
}

console.log(initialState);
export default reducer;