import { createSlice } from '@reduxjs/toolkit'

const generalSlice = createSlice({
  name: 'general',
  initialState: {
    navIsOpen: false,
    symbolsDropdownIsOpen: false,
    defaultSymbol: 'BTC/USDT',
    timeInterval: '1s',
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
    changeInterval: (state, { payload }) => {
      state.timeInterval = payload
    },
  },
})

export const {
  toggleNavbar,
  toggleSymbolsDropdown,
  toggleDefaultSymbol,
  changeInterval,
} = generalSlice.actions

export default generalSlice.reducer
