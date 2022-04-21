import React from "react";

import { Provider } from "react-redux";

import { createRoot } from 'react-dom/client';

import store from "./store";

import App from "./App";

import 'antd/dist/antd.css'

createRoot(document.getElementById('container')).render(    
    <Provider store={store}>
        <App/>
    </Provider>
)