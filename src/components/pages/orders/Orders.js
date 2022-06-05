import React from 'react';
import Sidebar from '../../sidebar/Sidebar';
import './Orders.css'

const Orders = () => {
    return (
        <div>
            <Sidebar/>
            <div className='orders-body'>
                Orders
            </div>
        </div>
    );
};

export default Orders;