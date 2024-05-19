const URL = 'http://localhost:3000';

export type Todo = {
    id: string,
    value: string,
    checked: boolean
};

export async function fetchTodos(): Promise<Todo[]> {
    try {
        const response = await fetch(`${URL}/todos`);
        return response.json() as Promise<Todo[]>;
    } catch (e) {
        console.log(e.message);
        alert('Serviço indisponível');
        return [];
    }
}

export async function postTodo(todo: string) {
    const response = await fetch(`${URL}/todos`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            value: todo,
            checked: false,
        }),
    });
    return response.json();
}

export async function putTodo(todo: Todo) {
    
    const response = await fetch(`${URL}/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    });
    return response.json();
}

export async function deleteTodo(todo: Todo) {
    
    const response = await fetch(`${URL}/todos/${todo.id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    });
    return response.json();
}