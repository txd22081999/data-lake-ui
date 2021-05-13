import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import globalReducer from '../features/global/globalSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    global: globalReducer,
  },
})
