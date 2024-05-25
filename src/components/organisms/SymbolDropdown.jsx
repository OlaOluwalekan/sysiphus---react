import { useEffect, useState } from 'react'
import Symbols from '../molecules/Symbols'
import './symbol_dropdown.css'
import { GoSearch } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux'
import { filterSymbols, getSymbols } from '../../features/marketSlice'

const SymbolDropdown = () => {
  const [searchText, setSearchText] = useState('')
  const { symbolsList, isLoading } = useSelector((store) => store.market)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSymbols())
  }, [])

  useEffect(() => {
    dispatch(filterSymbols(searchText))
  }, [searchText])

  if (isLoading && symbolsList.length === 0) {
    return <div className='symbol__dropdown symbols__loading'>Loading...</div>
  }

  return (
    <div className='symbol__dropdown'>
      <form className='symbols__search__form'>
        <p className='symbols__search__text'>Search Market</p>
        <div className='search__container'>
          <span className='search__icon'>
            <GoSearch />
          </span>
          <input
            type='text'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </form>
      <div className='symbols__list'>
        {symbolsList.map((symbol) => {
          return <Symbols key={symbol.symbol} {...symbol} />
        })}
      </div>
    </div>
  )
}

export default SymbolDropdown
