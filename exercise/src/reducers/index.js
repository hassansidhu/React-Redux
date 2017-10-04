import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading
});


/*Individual reducers are combined
    into a single rootReducer to create the discrete properties of the state.*/
