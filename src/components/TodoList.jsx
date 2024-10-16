import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodosFromApi, addTodostoApi, deleteTodoFromApi ,updateTodoFromApi} from '../TodoState/actions';
import React from 'react';

const TodoList = () => {
    const dispatch = useDispatch();
    const { todos, error, loading } = useSelector((state)=> state);
    const [newTodo, setNewTodo] = useState('')

    useEffect(()=>{
        dispatch(fetchTodosFromApi());
    },[dispatch]);

    function handleAddTodo() {
        setNewTodo('');
        dispatch(addTodostoApi({title: newTodo, userId:1}))
    }

    function handleDeleteTodo(todo) {
        dispatch(deleteTodoFromApi(todo));
    }

    function handleUpdateTodo(todo) {
        dispatch(updateTodoFromApi({...todo,completed:!todo.completed}));
    }


    return (
        <>
            <input 
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            {loading && <p>Loading...</p>}
            {error.isError && <p>{error.errorMessage}</p>}
            <ul>
                {todos.map((todo) => 
                    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} key={todo.id}>{todo.title} <span onClick={()=>handleDeleteTodo(todo)}>Delete</span> <span onClick={()=>handleUpdateTodo(todo)}>Update</span></li>
                )}
            </ul>
        </>
        
       
    )
}

export default TodoList;