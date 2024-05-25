import axios from 'axios'

export const getSymbols = async (cb1, cb2) => {
  cb2(true)
  try {
    const { data } = await axios.get(
      'https://api.binance.com/api/v1/exchangeInfo'
    )

    cb2(false)
    cb1(data.symbols)
  } catch (error) {
    cb2(false)
    console.log(error)
  }
}
