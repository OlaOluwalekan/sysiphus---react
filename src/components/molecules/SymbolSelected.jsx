import { FaAngleDown } from 'react-icons/fa6'
import './symbol__selected.css'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSymbolsDropdown } from '../../features/generalSlice'

const SymbolSelected = () => {
  const { symbolsDropdownIsOpen, defaultSymbol } = useSelector(
    (store) => store.general
  )
  const dispatch = useDispatch()

  return (
    <div
      className='symbol__selected'
      onClick={() => dispatch(toggleSymbolsDropdown(!symbolsDropdownIsOpen))}
    >
      <span className='selected__symbol'>{defaultSymbol}</span>
      <button className='symbol__selected__arrow'>
        <FaAngleDown />
      </button>
    </div>
  )
}

export default SymbolSelected
