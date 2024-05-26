import { createSlice } from '@reduxjs/toolkit'

const generalSlice = createSlice({
  name: 'general',
  initialState: {
    navIsOpen: false,
    symbolsDropdownIsOpen: false,
    defaultSymbol: 'BTC/USDT',
    timeInterval: '1s',
    currentOrderTab: 'chart',
    secondOrderTab: 'orderbook_d',
    screenWidth: window.innerWidth,
    transactionTab: 'buy',
    currentUser: null,
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
    changeCurrentOrderTab: (state, { payload }) => {
      state.currentOrderTab = payload
    },
    changeSecondOrderTab: (state, { payload }) => {
      console.log('second: ', payload)
      state.secondOrderTab = payload
    },
    changeScreenWidth: (state, { payload }) => {
      state.screenWidth = payload
    },
    changeTransactionTab: (state, { payload }) => {
      state.transactionTab = payload
    },
    addCurrentUser: (state, { payload }) => {
      state.currentUser = payload
    },
  },
})

export const {
  toggleNavbar,
  toggleSymbolsDropdown,
  toggleDefaultSymbol,
  changeInterval,
  changeCurrentOrderTab,
  changeSecondOrderTab,
  changeScreenWidth,
  changeTransactionTab,
  addCurrentUser,
} = generalSlice.actions

export default generalSlice.reducer
