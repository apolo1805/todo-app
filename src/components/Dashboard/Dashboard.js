
import React from 'react';
import './Dashboard.css';
import Task from '../../components/Task/Task';
import Remain from '../Remain/Remain';

function Dashboard({taskList}) {
    return (
        <div className="c-dashboard">
            {console.log(taskList[0])}
            {taskList.length === 0 ? "No tasks to show" : taskList.map((task, index) => <Task key={index} content={task.task}/>)}

            <Remain taskList={taskList}/>
        </div>
    );
}

export default Dashboard;