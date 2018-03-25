export const getCount = (state) => {
  return state.count;
};

export const getDone = (state) => {
  return state.todos.filter((item) => {
    return item.done;
  });
};

export const getTodos = (state) => {
  return state.todos.filter((item) => {
    return !item.done;
  });
};