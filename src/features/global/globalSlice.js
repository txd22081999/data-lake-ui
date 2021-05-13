import { createSlice } from '@reduxjs/toolkit'

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    selectedDot: {},
  },
  reducers: {
    setSelectedDot: (state, action) => {
      state.selectedDot = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSelectedDot } = globalSlice.actions

export default globalSlice.reducer
