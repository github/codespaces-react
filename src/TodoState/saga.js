import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import axios from 'axios';
import { API_URL } from './store.constants';
import { TodoActions, updateTodoSuccess, updateTodoFailure, fetchTodosSuccess,fetchTodosFailure, addTodosSuccess, addTodosFailure, deleteTodoSuccess } from './actions';


function* fetchTodos() {
    try{
        const res = yield call(axios.get,API_URL);
        yield put(fetchTodosSuccess(res.data));
    } catch(err){
        yield put(fetchTodosFailure({isError: true,errorMessage: err.message}));
    }
}

function* addTodo(action) {
    try{
        const res = yield call(axios.post, API_URL,action.payload);
        yield put(addTodosSuccess(res.data));
    } catch(err) {
        yield put(addTodosFailure({isError: true,errorMessage: err.message}))
    }
}
function* deleteTodo(action) {
    try{
        yield call(axios.delete, `${API_URL}/${action.payload.id}`);
        yield put(deleteTodoSuccess(action.payload));
    } catch(err) {
        yield put(deleteTodoFailure({isError: true,errorMessage: err.message}))
    }
}

function* updateTodo(action) {
    try {
      const response = yield call(axios.put, `${API_URL}/${action.payload.id}`, action.payload);
      yield put(updateTodoSuccess(response.data));
    } catch (err) {
        yield put(updateTodoFailure({
            isError: true,
            errorMessage: err.message,
        }))
    }
  }

function* todoSaga() {
    yield takeLatest(TodoActions.FETCH_TODOS_REQUEST,fetchTodos);
    yield takeEvery(TodoActions.ADD_TODO_REQUEST, addTodo);
    yield takeLatest(TodoActions.DELETE_TODO_REQUEST, deleteTodo);
    yield takeLatest(TodoActions.UPDATE_TODO_REQUEST, updateTodo);
}

export default todoSaga;