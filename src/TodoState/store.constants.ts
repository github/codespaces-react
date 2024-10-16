export interface Todo {
    id: string,
    completed: boolean,
    title: string,
    userId: string,
}

export interface TodoError {
    isError: boolean;
    errorMessage: string,
}

export interface State {
    todos: Todo[],
    loading: boolean,
    error: TodoError,
}

export const initialState: State = {
    todos: [],
    loading: false,
    error: {
        isError: false,
        errorMessage: '',
    },
}

export const API_URL = 'https://jsonplaceholder.typicode.com/todos';