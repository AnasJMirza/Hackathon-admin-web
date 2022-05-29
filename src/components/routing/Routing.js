import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddProductsForm from '../pages/addProductsForm/AddProductsForm';
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
                        <Route path='/add-products-form' element={<AddProductsForm/>}/>
                    </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Routing;