import React from 'react';
import Sidebar from '../../sidebar/Sidebar';
import './DashBoard.css'

const DashBoard = () => {
    return (
        <div>
            <Sidebar/>
            <div className='dashboard-body'>
                DashBoard
            </div>
        </div>
    );
};

export default DashBoard;