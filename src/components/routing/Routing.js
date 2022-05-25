import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from '../pages/dashBoard/DashBoard';
import Items from '../pages/items/Items';
import Orders from '../pages/orders/Orders';

import Sidebar from '../sidebar/Sidebar';

const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Sidebar/>
                    <Routes>
                        <Route path='/' element={<DashBoard/>}/>
                        <Route path='/orders' element={<Orders/>}/>
                        <Route path='/items' element={<Items/>}/>
                    </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Routing;