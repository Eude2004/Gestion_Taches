import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED } from '../redux/filterSlice';

function TodoFilters() {
  const dispatch = useDispatch();
  const currentFilter = useSelector(state => state.filter.status);

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div className="todo-filters">
      <button
        className={`filter-btn ${currentFilter === FILTER_ALL ? 'active' : ''}`}
        onClick={() => handleFilterChange(FILTER_ALL)}
      >
        Toutes
      </button>
      <button
        className={`filter-btn ${currentFilter === 'active' ? 'active' : ''}`}
        onClick={() => handleFilterChange('active')}
      >
        Actives
      </button>
      <button
        className={`filter-btn ${currentFilter === 'completed' ? 'active' : ''}`}
        onClick={() => handleFilterChange('completed')}
      >
        Terminées
      </button>
    </div>
  );
}

export default TodoFilters;