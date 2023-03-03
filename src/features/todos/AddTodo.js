import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { addTodo } from "./todoSlice"

const AddTodo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    date: ''
  });

  const handleAddTodo = () => {
    setValues({ name: '', date: '' });
    dispatch(addTodo({
      id: uuidv4(),
      name: values.name,
      date: values.date
    }));
    navigate('/');
  }

  return (

    <div className="App mt-10 max-w-xl mx-auto">
      <h2 className="text-center font-bold text-lg text-gray-200 mb-10">New ToDo</h2>
      
      <TextField
        label="Title"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Mengumpulkan PR' }}
      />
      <br />
      <TextField
        label="Due Date"
        value={values.date}
        onChange={(e) => setValues({ ...values, date: e.target.value })}
        inputProps={{ type: 'date', placeholder: '21-10-2023' }}
      />
      <div className="text-center">
      <Button onClick={handleAddTodo}>Submit</Button>
      </div>
    </div>
  )
}

export default AddTodo