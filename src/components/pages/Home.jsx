import React from 'react'
import TradeHeader from '../organisms/TradeHeader'

const Home = () => {
  return (
    <div>
      <TradeHeader />
      <div>mobile header</div>
      <div style={{ display: 'grid', gridTemplateColumns: '5fr 1fr' }}>
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr' }}>
            <div>chat</div>
            <div>orderbook and recent trade</div>
          </div>
          <div>order history</div>
        </div>
        <div>buy and sell</div>
      </div>
    </div>
  )
}

export default Home
