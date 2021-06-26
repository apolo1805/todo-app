
import './App.css';
import Input from './components/Input/Input';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <header>
       <h1>Tasks manager web application</h1>
       <h2>This web app manages the daily tasks need to be done.</h2>
      </header>

      <main>
        <Input placeholder="Type a new task..." tooltip="Press Enter to add to the list"/>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
