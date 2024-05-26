import './trade_header.css'
import Column from '../templates/Column'
import SymbolSelect from './SymbolSelect'
import SymbolPrice from '../molecules/SymbolPrice'

const TradeHeader = () => {
  return (
    <div className='trade__header'>
      <Column styleClass='trade__header__col trade__header__col--1'>
        <SymbolSelect />
        <SymbolPrice />
      </Column>
      <Column styleClass='trade__header__col trade__header__col--2'>
        column 2
      </Column>
    </div>
  )
}

export default TradeHeader
