import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCompleted } from '../redux/todoSlice';

function TodoStats() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.items);
  
  const activeTodos = todos.filter(todo => !todo.completed).length;
  const completedTodos = todos.length - activeTodos;
  
  const handleClearCompleted = () => {
    if (completedTodos > 0) {
      dispatch(clearCompleted());
    }
  };

  return (
    <div className="todo-stats">
      <div className="todos-count">
        {activeTodos} tâche{activeTodos !== 1 ? 's' : ''} restante{activeTodos !== 1 ? 's' : ''}
      </div>
      
      {completedTodos > 0 && (
        <button
          className="clear-completed"
          onClick={handleClearCompleted}
        >
          Effacer les tâches terminées
        </button>
      )}
    </div>
  );
}

export default TodoStats;