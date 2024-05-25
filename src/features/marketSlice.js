import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getSymbols = createAsyncThunk(
  'symbols/getSymbols',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        'https://api.binance.com/api/v1/exchangeInfo'
      )
      console.log(data.symbols)
      return data.symbols
    } catch (error) {
      console.log(error)
      thunkAPI.rejectWithValue(error)
    }
  }
)

const marketSlice = createSlice({
  name: 'market',
  initialState: {
    symbolsList: [],
    isLoading: false,
  },
  reducers: {
    filterSymbols: (state, { payload }) => {
      state.symbolsList = state.symbolsList.filter((symbol) =>
        symbol.symbol.toLowerCase().includes(payload.toLowerCase())
      )
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSymbols.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSymbols.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.symbolsList = payload
      })
      .addCase(getSymbols.rejected, (state, { payload }) => {
        state.isLoading = false
        console.log(payload)
      })
  },
})

export const { filterSymbols } = marketSlice.actions

export default marketSlice.reducer
