
import React from 'react';
import './Dashboard.css';
import Task from '../../components/Task/Task';

function Dashboard({taskList}) {
    return (
        <div className="c-dashboard">
            {console.log(taskList[0])}
            {taskList.length === 0 ? "No tasks to show" : taskList.map((task, index) => <Task key={index} content={task.task}/>)}
        </div>
    );
}

export default Dashboard;