import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo } from '../redux/todoSlice';

function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  const handleSave = () => {
    if (editText.trim() === '') {
      setError('La tâche ne peut pas être vide');
      return;
    }
    
    if (editText.trim().length < 3) {
      setError('La tâche doit contenir au moins 3 caractères');
      return;
    }
    
    dispatch(editTodo({ id: todo.id, text: editText.trim() }));
    setIsEditing(false);
    setError('');
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(todo.text);
    setError('');
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />
      
      {isEditing ? (
        <div className="todo-edit-form">
          <input
            type="text"
            className="edit-input"
            value={editText}
            onChange={(e) => {
              setEditText(e.target.value);
              if (error) setError('');
            }}
            autoFocus
          />
          <button className="btn btn-success" onClick={handleSave}>
            Enregistrer
          </button>
          <button className="btn btn-danger" onClick={handleCancel}>
            Annuler
          </button>
        </div>
      ) : (
        <>
          <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
            {todo.text}
          </span>
          
          <div className="todo-actions">
            <button className="todo-btn" onClick={handleEdit} disabled={todo.completed}>
              ✏️
            </button>
            <button className="todo-btn" onClick={handleDelete}>
              🗑️
            </button>
          </div>
        </>
      )}
      
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default TodoItem;