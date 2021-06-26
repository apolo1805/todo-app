
import './App.css';
import Input from './components/Input/Input';
import Dashboard from './components/Dashboard/Dashboard';
import { useState } from 'react';
import TaskModel from './model/TaskModel';

function App() {

  const [tasks, setTasks] = useState([]);

  function addNewTask(task) {
    setTasks(tasks.concat(new TaskModel(task)));
  }

  return (
    <div className="App">
      <header>
       <h1>Tasks manager web application</h1>
       <h2>This web app manages the daily tasks need to be done.</h2>
      </header>

      <main>
        <Input placeholder="Type a new task..." tooltip="Press Enter to add to the list" handleAdd={addNewTask}/>
        <Dashboard taskList={tasks}/>
      </main>
    </div>
  );
}

export default App;
