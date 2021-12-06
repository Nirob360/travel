import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/page/Home';
import Products from './components/page/Products';
import Services from './components/page/Services';
import SignUp from './components/page/Singup';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/product" element={<Products />} />
                <Route path="/singup" element={<SignUp />} />
            </Routes>
        </>
    );
}

export default App;
