import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { deleteTodo } from "./todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(store => store.todos);

  const handleRemoveTodo = (id) => {
    dispatch(deleteTodo({ id }));
  }

  const renderCard = () => todos.map(todo => (
    <div className="bg-gray-600 p-5 flex items-center justify-between" key={todo.id}>
      <div>
        <h3 className="font-bold text-lg text-gray-200">{todo.name}</h3>
        <span className="font-normal text-gray-200">{todo.date}</span>
      </div>
      
      <div className="flex gap-4">
        <Link to={`edit-todo/${todo.id}`}>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f39c12" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
          </button>
        </Link>
        <button
          onClick={() => handleRemoveTodo(todo.id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#c0392b" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  ))

  return (
      <div>
        <div className="grid gap-5 pt-10">
          {todos.length ? renderCard() : <p className="text-center col-span-2 text-gray-200 font-semibold">No Todo</p>}
        </div>
        <Link to="/add-todo"><Button>Add Todo</Button></Link>
      </div>
  )
}

export default TodoList