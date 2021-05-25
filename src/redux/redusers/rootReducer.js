import {combineReducers} from "redux";
import filterReducer from './filters';
import pizzasReducer from './products';

const rootReducer= combineReducers({
    // filters: filterReducer,
    pizzas: pizzasReducer,
})


export default rootReducer;