import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
};

const taskList = ['HTML', 'CSS', 'Javascript', 'React'];

function App() {
  return (
    <ol>{taskList.map((task) => Task(task))}</ol>
  );
}

export default App;
