import { createSlice } from '@reduxjs/toolkit'

const generalSlice = createSlice({
  name: 'general',
  initialState: {
    navIsOpen: false,
    symbolsDropdownIsOpen: false,
    defaultSymbol: 'BTC/USDT',
  },
  reducers: {
    toggleNavbar: (state, { payload }) => {
      state.navIsOpen = payload
    },
    toggleSymbolsDropdown: (state, { payload }) => {
      state.symbolsDropdownIsOpen = payload
    },
    toggleDefaultSymbol: (state, { payload }) => {
      state.defaultSymbol = payload
    },
  },
})

export const { toggleNavbar, toggleSymbolsDropdown, toggleDefaultSymbol } =
  generalSlice.actions

export default generalSlice.reducer
