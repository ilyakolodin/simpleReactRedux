import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import {Provider} from "react-redux";
import rootReducer from "./reducers";
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ reducer: rootReducer })

const mountNode = document.getElementById("app");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , mountNode);