import { useDispatch, useSelector } from 'react-redux'
import './mobile_order_header.css'
import { changeCurrentOrderTab } from '../../features/generalSlice'

const tabs = [
  {
    text: 'chart',
    value: 'chart',
  },
  {
    text: 'Order Book',
    value: 'orderbook',
  },
  {
    text: 'Recent Trade',
    value: 'recent_trade',
  },
]

const MobileOrderHeader = () => {
  const { currentOrderTab } = useSelector((store) => store.general)
  const dispatch = useDispatch()

  return (
    <div className='order__tabs--mobile'>
      {tabs.map((tab) => {
        return (
          <article className='order__tab charts__tab' key={tab.value}>
            <input
              type='radio'
              name='orderbook__tab'
              id={tab.value}
              checked={currentOrderTab === tab.value}
              onChange={() => dispatch(changeCurrentOrderTab(tab.value))}
              readOnly
            />
            <label htmlFor={tab.value}>{tab.text}</label>
          </article>
        )
      })}
    </div>
  )
}

export default MobileOrderHeader
