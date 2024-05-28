import { useContext, useEffect } from "react"
import Context from "../Context/Context"
import banner from "../assets/todo1.png"
import { Todo } from "../../api/todosApi"
import { useNavigate } from "react-router-dom"


function TodoList() {
    const navigate = useNavigate();
    const { user, getTodos, loading, todos, editTodos, removeTodos } = useContext(Context);

    useEffect(() => {
        if(!todos.length) {
            getTodos();
        }
    }, []);

    const handleChange = (todo: Todo) => {
        const update: Todo = {...todo, checked: !todo.checked};
        editTodos(update);
    }

    const handleRemove = (todo: Todo) => {
        removeTodos(todo);
    }

    return (
        <>
            <h1>Welcome, {user}</h1>
            <img src={banner} alt="" />
            <button onClick={() => navigate("/todo/add")}>Add new task</button>
            <p>Daily tasks</p>
            <ul>
                {
                    loading ? <p>Loading ...</p>
                        : todos.map((todo) => {
                            return (
                            <li  key={todo.id}>
                                <input 
                                    type="checkbox" 
                                    checked={todo.checked} 
                                    value={todo.value} 
                                    onChange={() => handleChange(todo)}/>
                                    {todo.value}
                                    <button onClick={() => handleRemove(todo)}>X</button>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default TodoList
