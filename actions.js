export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REORDER_TODO = 'REORDER_TODO';
export const SET_SEARCH = 'SET_SEARCH';

export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });
export const editTodo = (id, updatedTodo) => ({ type: EDIT_TODO, payload: { id, updatedTodo } });
export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, payload: id });
export const reorderTodo = (id, newPosition) => ({ type: REORDER_TODO, payload: { id, newPosition } });
export const setSearch = (query) => ({ type: SET_SEARCH, payload: query });
