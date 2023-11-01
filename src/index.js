import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const mountNode = document.getElementById("app");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , mountNode);