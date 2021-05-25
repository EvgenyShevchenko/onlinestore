import {createStore,compose,applyMiddleware} from "redux";
import rootReducer from "./redusers/rootReducer";
import ReduxThunk from 'redux-thunk';
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));



export default store;