import { ChangeEvent, FormEvent, useContext, useState } from "react"
import Context from "../Context/Context"
import banner from '../assets/inicialApp.png'
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function AddTodo() {

    const {user, addTodos } = useContext(Context);
    const [task, setTask] = useState("");
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if(task) {
            addTodos(task)
            Swal.fire("Task created")
            navigate("/todo")
        }
    }
    return (
        <>
            <h1>Welcome, {user}</h1>
            <img src={banner} alt="" />
            <p>Add your new task</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" value={task} id="task" onChange={handleChange}/>
                <button>Add to list</button>
            </form>
        </>
    )
}

export default AddTodo