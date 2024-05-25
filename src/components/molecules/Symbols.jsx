import { useDispatch, useSelector } from 'react-redux'
import './symbols.css'
import {
  toggleDefaultSymbol,
  toggleSymbolsDropdown,
} from '../../features/generalSlice'

const Symbols = ({ symbol, baseAsset, quoteAsset }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(toggleDefaultSymbol(`${baseAsset}/${quoteAsset}`))
    dispatch(toggleSymbolsDropdown(false))
  }

  return (
    <div>
      <input
        type='radio'
        name='symbol__option'
        id={symbol}
        className='symbol__option'
        value={symbol}
        onClick={handleClick}
      />
      <label htmlFor={symbol} className='symbol__option__label'>
        <div>
          {baseAsset}/{quoteAsset}
        </div>
      </label>
    </div>
  )
}

export default Symbols
