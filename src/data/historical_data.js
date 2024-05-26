import axios from 'axios'
import { convertKlineDataToChartFormat } from '../helpers/convert'

export const fetchHistoricalKlineData = async (symbol, interval, series) => {
  const url = `https://api.binance.com/api/v3/klines`
  try {
    const { data } = await axios.get(url, {
      params: {
        symbol: symbol,
        interval: interval,
        limit: 500,
      },
    })
    const formattedData = convertKlineDataToChartFormat(data)
    // console.log(formattedData)
    series.current.setData(formattedData)
    // return data
  } catch (error) {
    console.error('Error fetching historical kline data:', error)
  }
}
