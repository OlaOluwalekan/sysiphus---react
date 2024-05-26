export const convertKlineDataToChartFormat = (klineData) => {
  return klineData.map((kline) => ({
    time: kline[0] / 1000, // Convert from milliseconds to seconds
    open: parseFloat(kline[1]),
    high: parseFloat(kline[2]),
    low: parseFloat(kline[3]),
    close: parseFloat(kline[4]),
    volume: parseFloat(kline[5]),
  }))
}
