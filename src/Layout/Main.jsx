import React from 'react';
import Home from '../Components/Home';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Main;