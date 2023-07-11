import {useState} from "react";
import Checkbox from './component/Checkbox';
import Todo from './component/Todo';
import Form from './component/Form';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1>Tasks</h1>
      < Form 
      addTodo={(todo) =>{
        setTodos((prev) => [...prev, todo]);
      }} />
      <div className="" >
        {todos.map((todo, i) =>(
          <Todo onDelete={ () =>{
            setTodos((prev) =>{
              return prev.filter((_, y) =>i !== y);
            })
          } } key={i}>{todo}</Todo>
        ))}

      </div>
    </div>
  );
}






export default App;
