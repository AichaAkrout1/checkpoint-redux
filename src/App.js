import './App.css';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <TodoList/>
    </div>
  );
}

export default App;
