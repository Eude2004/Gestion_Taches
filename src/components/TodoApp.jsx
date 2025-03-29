import React from 'react';
import { useSelector } from 'react-redux';
import { FILTER_ALL } from '../redux/filterSlice';
import TodoHeader from './TodoHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilters from './TodoFilters';
import TodoStats from './TodoStats';
import './TodoApp.css';

function TodoApp() {
  const todos = useSelector(state => state.todos.items);
  const filter = useSelector(state => state.filter.status);
  
  const filteredTodos = todos.filter(todo => {
    if (filter === FILTER_ALL) return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="todo-app container">
      <div className="todo-container card">
        <TodoHeader />
        <TodoForm />
        {todos.length > 0 && <TodoFilters />}
        <TodoList todos={filteredTodos} />
        {todos.length > 0 && <TodoStats />}
      </div>
    </div>
  );
}

export default TodoApp;