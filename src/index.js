import React from "react";

import { Provider } from "react-redux";

import { createRoot } from 'react-dom/client';

import store from "./store";

import App from "./App";

import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom' 

createRoot(document.getElementById('container')).render(    
    <Router>
            <Provider store={store}>
                <App />
            </Provider>
    </Router>
    );