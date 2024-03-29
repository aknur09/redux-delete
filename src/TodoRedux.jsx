import { useDispatch, useSelector } from 'react-redux'; 
 
const TodoRedux = () => { 
  const todoData = useSelector((state) => state.todos.todoData); 
  const dispatch = useDispatch(); 
 
  const addNewTodo = (e) => { 
    e.preventDefault(); 
    const todoTitle = e.target.aty.value.trim() 
 
    if (todoData.length > 0) { 
      const newTodo = { title: todoTitle, id: todoData.at(-1).id + 1 || 1} 
      dispatch({type : 'addTodo', payload:newTodo}) 
    } 
  }; 
 
  const removeTodo = (id) => { 
    dispatch({type: 'removeTodo', payload: id}); 
  }; 
 
  return ( 
    <div> 
      <h2>Todo Redux</h2> 
      <form onSubmit={addNewTodo}> 
        <input 
          type="text" 
          placeholder="Введите новую задачу" 
          name='aty' 
        /> 
        <input type="submit"  /> 
      </form> 
      <ul> 
        {todoData.map((el) => ( 
          <li key={el.id}> 
            {el.title} 
            <button className='btn btn-outline-danger' onClick={() => removeTodo(el.id)}> 
            x
              <i className="bi bi-trash3"></i> 
            </button> 
            {/* <button className='btn btn-outline-warning'> 
              <i className="bi bi-exclamation-triangle"></i> 
            </button>  */}
          </li> 
        ))} 
      </ul> 
    </div> 
  ); 
}; 
 
export default TodoRedux;

