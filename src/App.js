import { Route, Routes } from "react-router-dom";
import AddTodo from "./features/todos/AddTodo";
import EditTodo from "./features/todos/EditTodo";
import TodoList from "./features/todos/TodoList";
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-2xl text-light-700">Hi, John</h1>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/add-todo" element={<AddTodo />} />
        <Route path="/edit-todo/:id" element={<EditTodo />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
