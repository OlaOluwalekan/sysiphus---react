import './trade_header.css'
import Column from '../templates/Column'
import SymbolSelect from './SymbolSelect'

const TradeHeader = () => {
  return (
    <div className='trade__header'>
      <Column styleClass='trade__header__col--1'>
        <SymbolSelect />
      </Column>
    </div>
  )
}

export default TradeHeader
