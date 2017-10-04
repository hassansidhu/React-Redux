import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}

/*The Store is the thing that brings it all together:
    it represents the state by using the rootReducer,
    any middleware (Thunk in our case),
    and allows you to actually dispatch actions. */
