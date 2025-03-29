import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

function TodoForm() {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate input
    if (text.trim() === '') {
      setError('Veuillez entrer une tâche valide');
      return;
    }
    
    if (text.length < 3) {
      setError('La tâche doit contenir au moins 3 caractères');
      return;
    }
    
    // Dispatch action
    dispatch(addTodo({ text: text.trim() }));
    
    // Reset form
    setText('');
    setError('');
  };

  const handleChange = (e) => {
    setText(e.target.value);
    if (error) setError('');
  };

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <div className="todo-input-group">
          <input
            type="text"
            className="todo-input"
            placeholder="Ajouter une nouvelle tâche..."
            value={text}
            onChange={handleChange}
            maxLength={100}
          />
          <button type="submit" className="btn">
            Ajouter
          </button>
        </div>
        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  );
}

export default TodoForm;