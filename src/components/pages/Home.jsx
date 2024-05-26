import React from 'react'
import TradeHeader from '../organisms/TradeHeader'
import ChartRow from '../templates/ChartRow'
import MobileOrderHeader from '../organisms/MobileOrderHeader'

const Home = () => {
  return (
    <div>
      <TradeHeader />
      <MobileOrderHeader />
      <ChartRow />
    </div>
  )
}

export default Home
