export const selectTodos = (state) => {
    const { todos, search } = state;
    return todos.filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()));
  };
  
export const selectSearch = (state) => state.search;
