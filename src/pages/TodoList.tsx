import { useContext, useEffect } from "react"
import Context from "../Context/Context"
import banner from "../assets/todo1.png"
import { Todo } from "../../api/todosApi"


function TodoList() {
    const { user, getTodos, loading, todos, editTodos } = useContext(Context)

    useEffect(() => {
        if(!todos.length) {
            getTodos();
        }
    }, [])

    const handleChange = (todo: Todo) => {
        console.log(todo);
        const update: Todo = {...todo, checked: !todo.checked};
        editTodos(update);
    }

    return (
        <>
            <h1>Welcome, {user}</h1>
            <img src={banner} alt="" />
            <button>Add new task</button>
            <p>Daily tasks</p>
            <ul>
                {
                    loading ? <p>Loading ...</p>
                        : todos.map((todo) => {
                            return (
                            <li>
                                <input 
                                    key={todo.id} 
                                    type="checkbox" 
                                    checked={todo.checked} 
                                    value={todo.value} 
                                    onChange={() => handleChange(todo)}/>
                                    {todo.value}
                                    </li>
                            )
                        })
                }
            </ul>
        </>
    )
}

export default TodoList
