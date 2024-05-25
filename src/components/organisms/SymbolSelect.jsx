import './symbol_select.css'
import SymbolSelected from '../molecules/SymbolSelected'
import SymbolDropdown from './SymbolDropdown'
import { useSelector } from 'react-redux'

const SymbolSelect = () => {
  const { symbolsDropdownIsOpen } = useSelector((store) => store.general)

  return (
    <div className='symbol__select'>
      <SymbolSelected />
      {symbolsDropdownIsOpen && <SymbolDropdown />}
    </div>
  )
}

export default SymbolSelect
