
import React from 'react';
import './Dashboard.css';

function Dashboard({taskList}) {
    return (
        <div className="c-dashboard">
            {taskList.length === 0 ? "No tasks to show" : ""}
        </div>
    );
}

export default Dashboard;