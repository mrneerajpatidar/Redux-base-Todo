import { ADD_TODO, EDIT_TODO, DELETE_TODO, TOGGLE_TODO, REORDER_TODO, SET_SEARCH } from './actions';

const initialState = {
  todos: [],
  search: '',
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload, done: false }],
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, text: action.payload.updatedTodo } : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        ),
      };
    case REORDER_TODO:
      const { id, newPosition } = action.payload;
      const reorderedTodos = [...state.todos];
      const todoToMove = reorderedTodos.find(todo => todo.id === id);
      reorderedTodos.splice(reorderedTodos.indexOf(todoToMove), 1);
      reorderedTodos.splice(newPosition, 0, todoToMove);
      return {
        ...state,
        todos: reorderedTodos,
      };
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
