import React from 'react'
import Column from './Column'
import Chart from '../organisms/Chart'
import './chart_row.css'

const ChartRow = () => {
  return (
    <div className='chart__row'>
      <Column styleClass='chart__row__column chart__row__column--1'>
        <Column styleClass='chart__history__row--1'>
          <Chart />
          <Column styleClass='order__recent__column'>
            orderbook and recent trade
          </Column>
        </Column>
        <div>order history</div>
      </Column>
      <Column styleClass='chart__row__column chart__row__column--2'>
        buy and sell
      </Column>
    </div>
  )
}

export default ChartRow
