import { useDispatch, useSelector } from 'react-redux'
import './desktop_order_header.css'
import { changeSecondOrderTab } from '../../features/generalSlice'
import { useEffect } from 'react'

const DesktopOrderHeader = () => {
  const { currentOrderTab, secondOrderTab } = useSelector(
    (store) => store.general
  )
  const dispatch = useDispatch()

  // useEffect(() => {
  //   console.log(secondOrderTab, currentOrderTab)
  // }, [secondOrderTab, currentOrderTab])

  return (
    <div className='order__tabs--desktop'>
      <article className='order__tab--desktop charts__tab'>
        <input
          type='radio'
          name='order__tabs--desktop'
          id='orderbook_d'
          onChange={() => dispatch(changeSecondOrderTab('orderbook_d'))}
          checked={secondOrderTab === 'orderbook_d'}
        />
        <label htmlFor='orderbook_d'>Orderbook</label>
      </article>
      <article className='order__tab--desktop charts__tab'>
        <input
          type='radio'
          name='order__tabs--desktop'
          id='recent_trade_d'
          onChange={() => dispatch(changeSecondOrderTab('recent_trade_d'))}
          checked={secondOrderTab === 'recent_trade_d'}
        />
        <label htmlFor='recent_trade_d'>Recent Trade</label>
      </article>
    </div>
  )
}

export default DesktopOrderHeader
