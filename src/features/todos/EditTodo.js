import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { editTodo } from "./todoSlice"

const EditTodo = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const todos = useSelector(store => store.todos);
  const navigate = useNavigate();
  const existingTodo = todos.filter(todo => todo.id === params.id);
  const { name, date } = existingTodo[0];
  const [values, setValues] = useState({
    name,
    date
  });

  const handleEditTodo = () => {
    setValues({ name: '', date: '' });
    dispatch(editTodo({
      id: params.id,
      name: values.name,
      date: values.date
    }));
    navigate('/');
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">

      <h2 className="text-center font-bold text-lg text-gray-200">Edit ToDo</h2>

      <TextField
        label="Title"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Jhon Doe' }}
      />
      <br />
      <TextField
        label="Due Date"
        value={values.date}
        onChange={(e) => setValues({ ...values, date: e.target.value })}
        inputProps={{ type: 'date', placeholder: 'jhondoe@mail.com' }}
      />
      <Button onClick={handleEditTodo}>Edit</Button>
    </div>
  )
}

export default EditTodo