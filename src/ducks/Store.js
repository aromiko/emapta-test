import { applyMiddleware, compose, createStore } from "redux";

import Reducers from "./Reducers";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(Reducers, storeEnhancers(applyMiddleware(thunk)));

export default store;
