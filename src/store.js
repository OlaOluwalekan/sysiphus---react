import { configureStore } from '@reduxjs/toolkit'
import generalSlice from './features/generalSlice'
import marketSlice from './features/marketSlice'

const store = configureStore({
  reducer: {
    general: generalSlice,
    market: marketSlice,
  },
})

export default store
