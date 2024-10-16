
export const TodoActions = {
    FETCH_TODOS_REQUEST:"FETCH_TODOS_REQUEST",
    FETCH_TODOS_SUCCESS:"FETCH_TODOS_SUCCESS",
    FETCH_TODOS_FAILURE:"FETCH_TODOS_FAILURE",
    ADD_TODO_REQUEST:"ADD_TODO_REQUEST",
    ADD_TODO_SUCCESS:"ADD_TODO_SUCCESS",
    ADD_TODO_FAILURE:"ADD_TODO_FAILURE",
    DELETE_TODO_REQUEST:"DELETE_TODO_REQUEST",
    DELETE_TODO_SUCCESS:"DELETE_TODO_SUCCESS",
    DELETE_TODO_FAILURE:"DELETE_TODO_FAILURE",
    UPDATE_TODO_REQUEST:"UPDATE_TODO_REQUEST",
    UPDATE_TODO_SUCCESS:"UPDATE_TODO_SUCCESS",
    UPDATE_TODO_FAILURE:"UPDATE_TODO_FAILURE"
}
// Fetching Todos From Remote
export const fetchTodosFromApi = () => ({type: TodoActions.FETCH_TODOS_REQUEST});
export const fetchTodosSuccess = (todos) => ({type:TodoActions.FETCH_TODOS_SUCCESS, payload: todos});
export const fetchTodosFailure = (error) => ({type: TodoActions.FETCH_TODOS_FAILURE, payload: error});

// Add Todos to remote
export const addTodostoApi = (todo) => ({type: TodoActions.ADD_TODO_REQUEST, payload: todo});
export const addTodosSuccess = (todo) => ({type: TodoActions.ADD_TODO_SUCCESS, payload: todo});
export const addTodosFailure = (error) => ({type: TodoActions.ADD_TODO_SUCCESS, payload: error});

// Delete Todos at remote
export const deleteTodoFromApi = (todo) => ({type: TodoActions.DELETE_TODO_REQUEST, payload: todo});
export const deleteTodoSuccess = (todo) => ({type: TodoActions.DELETE_TODO_SUCCESS, payload: todo});
export const deleteTodoFailure = (error) => ({type: TodoActions.DELETE_TODO_FAILURE, payload: error});

// Update Todods at remote
export const updateTodoFromApi = (todo) => ({type: TodoActions.UPDATE_TODO_REQUEST, payload: todo});
export const updateTodoSuccess = (todo) => ({type: TodoActions.UPDATE_TODO_SUCCESS, payload: todo});
export const updateTodoFailure = (error) => ({type: TodoActions.UPDATE_TODO_FAILURE, payload: error});
