import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar-body'>
            <ul className='sidebar-items-wrapper'>
            <Link to='/'  className='link'><li className='sidebar-items'>Dashboard</li></Link>
            <Link to='/orders' className='link'><li className='sidebar-items'>Orders</li></Link>
            <Link to='/items' className='link'><li className='sidebar-items'>Items</li></Link>
            </ul>
        </div>
    );
};

export default Sidebar;