import { ReactNode, useState } from "react"
import Context from "./Context"
import { Todo, fetchTodos, putTodo } from "../../api/todosApi"

type ProviderProps = {
    children: ReactNode
}

export type ProviderValues = {
    user: string
    onLogin: (username: string) => void
    getTodos: () => Promise<void>
    loading: boolean
    todos: Todo[]
    editTodos: (todo: Todo) => Promise<void>
}

function Provider( {children}: ProviderProps) {

    const [user, setUser] = useState('');
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState(false)

    const onLogin = (username: string) => {
        setUser(username); 
    }


    const getTodos = async () => {
        setLoading(true);
        try {
            const result = await fetchTodos();
            setTodos(result)
        } catch (error) {
            console.log("Error ao buscar dados");
        } finally {
            setLoading(false)
        }
    }

    const editTodos = async (todo: Todo) => {
        try {
            const update = todos.map((td) => {
                if(td.id === todo.id) {
                    td.checked = todo.checked
                }
                return td;
            });

            setLoading(true);
            setTodos(update);
            setLoading(false)

            await putTodo(todo)
        } catch (error) {
            console.log("Erro ao editar dados");
            
        }
    }

    const values: ProviderValues = {
        user,
        onLogin,
        getTodos,
        loading,
        todos,
        editTodos
    }

    return(
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}

export default Provider