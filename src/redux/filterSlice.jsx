import { createSlice } from '@reduxjs/toolkit';

export const FILTER_ALL = 'all';
export const FILTER_ACTIVE = 'active';
export const FILTER_COMPLETED = 'completed';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    status: FILTER_ALL
  },
  reducers: {
    setFilter: (state, action) => {
      state.status = action.payload;
    }
  }
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;