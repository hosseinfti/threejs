import {BrowserRouter, Routes as Router, Route} from "react-router-dom";
import React from 'react';
import Layout from "../layout/Layout";
import Home from "./home/index";
import NoMatch from "./noMatch/NoMatch";

const Routes = () => {
    return (
        <BrowserRouter>
            <Router>
                <Route element={<Layout/>}>
                    <Route element={<Home/>} path="/"/>
                </Route>
                <Route path="*" element={<NoMatch/>}/>
            </Router>
        </BrowserRouter>
    );
};

export default Routes;
