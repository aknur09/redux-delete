const todoState = {
  todoData:[
    {title:'Read a book', id:1},
    {title:'Watch a movie', id:2}
  ]
}

const TodoReducer = (state = todoState, action) => {
  //action type
  const { type , payload } = action

  switch (type) {
    case 'addTodo':
      return {
        todoData :  [...state.todoData, payload]
      }
    case 'removeTodo':
      return {
        todoData: state.todoData.filter(todo => todo.id !== payload)
      }
    default:
      return state
  }
}

export default TodoReducer;

