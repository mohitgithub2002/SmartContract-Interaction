import React, { Component } from "react";
import { Router, Routes, Route } from "react-router-dom";


import CreateId from './pages/createId';
import UpdatePassword from './pages/updatePassword';
import ViewPassword from './pages/viewPassword';
import Home from './pages/home';

export default class routes extends Component {
    render() {
        return (
            
                <Routes>
                    <Route path="/"  element={<Home />} />
                    <Route path="/signup" element={<CreateId />} />
                    <Route path="/update" element={<UpdatePassword />} />
                    <Route path="/view" element={<ViewPassword />} />
                </Routes>
            
        )
    }
}