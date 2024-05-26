import { useDispatch, useSelector } from 'react-redux'
import './buy_sell_header.css'
import { changeTransactionTab } from '../../features/generalSlice'

const BuySellHeader = () => {
  const { transactionTab } = useSelector((store) => store.general)
  const dispatch = useDispatch()

  return (
    <div className='buy__sell__tabs'>
      <article className='buy__sell__tab'>
        <input
          type='radio'
          name='buy_sell_tab'
          id='buy_tab'
          onChange={() => dispatch(changeTransactionTab('buy'))}
          checked={transactionTab === 'buy'}
        />
        <label htmlFor='buy_tab'>Buy</label>
      </article>
      <article className='buy__sell__tab'>
        <input
          type='radio'
          name='buy_sell_tab'
          id='sell_tab'
          onChange={() => dispatch(changeTransactionTab('sell'))}
          checked={transactionTab === 'sell'}
        />
        <label htmlFor='sell_tab'>Sell</label>
      </article>
    </div>
  )
}

export default BuySellHeader
