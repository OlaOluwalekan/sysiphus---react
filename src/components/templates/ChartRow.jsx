import React, { useEffect, useState } from 'react'
import Column from './Column'
import Chart from '../organisms/Chart'
import './chart_row.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  changeCurrentOrderTab,
  changeScreenWidth,
  changeSecondOrderTab,
} from '../../features/generalSlice'
import Orderbook from '../organisms/Orderbook'
import TradeHistory from '../organisms/TradeHistory'
import DesktopOrderHeader from '../organisms/DesktopOrderHeader'
import BuySellHeader from '../organisms/BuySellHeader'

const ChartRow = () => {
  const { currentOrderTab, secondOrderTab, screenWidth, transactionTab } =
    useSelector((store) => store.general)
  const dispatch = useDispatch()

  useEffect(() => {
    window.addEventListener('resize', () => {
      dispatch(changeScreenWidth(window.innerWidth))
      // if (screenWidth > 740) {
      //   dispatch(changeSecondOrderTab('orderbook-d'))
      // }
    })
  }, [])

  useEffect(() => {
    console.log(screenWidth)
  }, [screenWidth])

  return (
    <div className='chart__row'>
      <Column styleClass='chart__row__column chart__row__column--1'>
        <Column styleClass='chart__history__row--1'>
          {(screenWidth > 740 || currentOrderTab === 'chart') && <Chart />}
          <Column styleClass='order__recent__column'>
            <DesktopOrderHeader />
            <div>
              {screenWidth > 740 && secondOrderTab === 'orderbook_d' && (
                <Orderbook />
              )}
              {screenWidth > 740 && secondOrderTab === 'recent_trade_d' && (
                <TradeHistory />
              )}
            </div>
          </Column>
        </Column>
        <div>order history</div>
      </Column>
      <Column styleClass='chart__row__column chart__row__column--2'>
        <BuySellHeader />
        <div>
          {transactionTab === 'buy' && <div>buy</div>}
          {transactionTab === 'sell' && <div>sell</div>}
        </div>
      </Column>
    </div>
  )
}

export default ChartRow
