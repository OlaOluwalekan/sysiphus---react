import { useDispatch, useSelector } from 'react-redux'
import './symbol_price.css'
import { useEffect, useRef, useState } from 'react'
import { changeSymbolPrice } from '../../features/marketSlice'

// const formatToUSD = (price) => {
//   return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
// }

const formatToUSD = (price) => {
  const formattedPrice = new Intl.NumberFormat('en-Us', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return formattedPrice.format(price)
}

const SymbolPrice = () => {
  const [currentPrice, setCurrentPrice] = useState(null)
  const [priceColor, setPriceColor] = useState('white')
  const { symbolPrice } = useSelector((store) => store.market)
  const { defaultSymbol } = useSelector((store) => store.general)
  const dispatch = useDispatch()
  const wsRef = useRef()

  useEffect(() => {
    // console.log(defaultSymbol)
    const wsEndpoint = `wss://stream.binance.com:443/ws/${defaultSymbol
      .split('/')
      .join('')
      .toLowerCase()}@trade`
    const ws = new WebSocket(wsEndpoint)
    wsRef.current = ws

    // ws.onopen = () => {
    //   console.log('Connected to WebSocket server for real-time trade updates')
    // }

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)
      let newPrice = parseFloat(data.p)

      setCurrentPrice(newPrice)
      setPriceColor(getPriceColor(newPrice, symbolPrice))
      dispatch(changeSymbolPrice(newPrice))
      document.title = `${formatToUSD(newPrice)} | ${defaultSymbol}`
    }

    return () => {
      if (wsRef.current) {
        wsRef.current.close()
      }
    }
  }, [symbolPrice, defaultSymbol])

  const getPriceColor = (newPrice, lastPrice) => {
    if (!lastPrice || lastPrice === newPrice) {
      return 'white'
    } else if (newPrice > lastPrice) {
      return 'green'
    } else {
      return 'red'
    }
  }

  return (
    <div className={`symbol__price ${priceColor}`}>
      {formatToUSD(symbolPrice)}
    </div>
  )
}

export default SymbolPrice
