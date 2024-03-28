import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [inputVal, setInputVal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      id: Math.floor(Math.random() * 100),
      title,
      body: inputVal,
      completed: false 
    };
    setTodos((prev) => [...prev, obj]);
    setInputVal('');
    setTitle('');
    const music = new Audio("./add.mp3");
    music.play();
  };

  const deleted = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    const music = new Audio("./delete.mp3");
    music.play();
  };

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    const music = new Audio("./complete.mp3");
    music.play();
  };

  const completed = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    
  }

  return (
    
    <div className="container">
      <div class="wrapper">
      <svg>
        <text x="50%" y="50%" dy=".35em" text-anchor="middle">
          TO DO LIST
        </text>
      </svg>
    </div>
      <div className='panel'>
      <div class="glitch-wrapper">
     <div class="glitch" data-text="Add new task">Add new task</div>
    </div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputVal} placeholder="Enter  title" onChange={(e) => setInputVal(e.target.value)}/>
          <input type="text" value={title} placeholder="Enter theme" onChange={(e) => setTitle(e.target.value)}/>
          <button className='submit'>Add Task</button>
        </form>
      </div>
      <ol className="todo-list">
        {todos.map((todo) => {
          return (
            <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              <div className='action'>
                <button className='complete' onClick={() => toggleCompleted(todo.id)}>
                  {todo.completed ? 'Cancel' : 'Complete'}
                </button>
                <button className='delete' onClick={() => deleted(todo.id)}>Delete</button>
              </div>
              <div className='title'>
              <h3>{todo.title}</h3>
              <p>{todo.body}</p>
              </div>
              <div className='line'>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default App;
