
import React from 'react';
import './Dashboard.css';
import Task from '../../components/Task/Task';
import Remain from '../Remain/Remain';
import Filter from '../Filter/Filter';

function Dashboard({taskList, handleChange}) {
    return (
        <div className="c-dashboard">
            {console.log(taskList[0])}
            {taskList.length === 0 ? 
                "No tasks to show" : 
                taskList.map((task, index) => <Task key={index} index={index} content={task.task} handleChange={handleChange}/>)}

                <Remain taskList={taskList.filter(task => !task.isCompleted)}/>

                <Filter/>
        </div>
    );
}

export default Dashboard;