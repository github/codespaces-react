import { TodoActions } from "./actions";
import { initialState, State } from "./store.constants";


const todoReducer = (state: State=initialState,action) => {
    switch (action.type) {
        case TodoActions.FETCH_TODOS_REQUEST || TodoActions.ADD_TODO_REQUEST || TodoActions.DELETE_TODO_REQUEST || TodoActions.UPDATE_TODO_REQUEST:
            return {...state, loading: true};
        case TodoActions.FETCH_TODOS_FAILURE || TodoActions.ADD_TODO_FAILURE || TodoActions.DELETE_TODO_FAILURE || TodoActions.UPDATE_TODO_FAILURE:
            return {...state, error: action.payload, loading: false};
        case TodoActions.FETCH_TODOS_SUCCESS:
            return {...state, todos:action.payload, loading: false};
        case TodoActions.ADD_TODO_SUCCESS:
            return {...state, todos: [...state.todos,action.payload], loading: false};
        case TodoActions.DELETE_TODO_SUCCESS:
            return {
                ...state, 
                todos: state.todos.filter((todo)=>todo.id !=action.payload.id),
                loading: false,
            };
        case TodoActions.UPDATE_TODO_SUCCESS: 
            return {
                ...state, 
                todos: state.todos.map((todo) => todo.id===action.payload.id ? action.payload:todo),
                loading: false,
            };
        default:
            return state;
        
    }
}

export default todoReducer;