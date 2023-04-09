import './App.css';
import Spiral from './components/spiral/Spiral';
import Tasks from './components/tasks/Tasks';

function App() {
  return (
    <div className="App">
      <Spiral/>
      <h1>To-do List</h1>
      <Tasks/>
    </div>
  );
}

export default App;
