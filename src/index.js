import React from "react";

import { Provider } from "react-redux";

import { createRoot } from 'react-dom/client';

import store from "./store";

import App from "./App";
import {Home,Detail} from './pages'
 
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom' 

// import { hashHistory } from 'react-router'

createRoot(document.getElementById('container')).render(    

            <Provider store={store}>
                <Router>
                <Routes>
                        <Route path="/" element={<App />}>
                            <Route path='home' element = {<Home />}/>
                            <Route path='detail/:username/:name' element = {<Detail />}/>
                            <Route
                                path="*"
                                element={
                                    <main style={{ padding: "1rem" }}>
                                    <p>There's nothing here!</p>
                                    </main>
                                }
                            />   
                        </Route>
                </Routes> 
                </Router>
            </Provider>

    );