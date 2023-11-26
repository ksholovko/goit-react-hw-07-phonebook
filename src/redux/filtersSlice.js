import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    filters: ""
}

export const filtersSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterChange: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
      state.filters = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { filterChange } = filtersSlice.actions;

export default filtersSlice.reducer;