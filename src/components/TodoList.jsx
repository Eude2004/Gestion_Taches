import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos }) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📝</div>
        <p>Aucune tâche à afficher</p>
        <p>Ajoutez votre première tâche ci-dessus</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;