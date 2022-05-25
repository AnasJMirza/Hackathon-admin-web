import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar-body'>
            <ul className='sidebar-items-wrapper'>
                <li className='sidebar-items'><Link to='/'>Dashboard</Link></li>
                <li className='sidebar-items'><Link to='/orders'>Orders</Link></li>
                <li className='sidebar-items'><Link to='/items'>Items</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;