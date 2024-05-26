import { useEffect, useRef } from 'react'
import './chart.css'
import { CrosshairMode, createChart } from 'lightweight-charts'
import { fetchHistoricalKlineData } from '../../data/historical_data'
import { useSelector } from 'react-redux'
import ChartHeader from './ChartHeader'

const Chart = () => {
  const chartRefContainer = useRef()
  const chartRef = useRef()
  const wsRef = useRef()
  const candleSeriesRef = useRef()

  const { defaultSymbol, timeInterval } = useSelector((store) => store.general)

  useEffect(() => {
    chartRef.current = createChart(chartRefContainer.current, {
      width:
        window.innerWidth > 740
          ? 0.45 * window.innerWidth
          : 0.98 * window.innerWidth,
      height:
        window.innerWidth > 740
          ? 0.4 * window.innerWidth
          : 0.7 * window.innerWidth,
      layout: {
        background: { color: '#20252B' },
        textColor: '#ffffffbb',
      },
      grid: {
        vertLines: {
          color: '#eee',
          visible: false,
        },
        horzLines: {
          color: '#eee',
          visible: false,
        },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      priceScale: {
        borderColor: 'rgba(197, 203, 206, 0.8)',
      },
      timeScale: {
        borderColor: 'rgba(197, 203, 206, 0.8)',
        timeVisible: true,
        secondsVisible: false,
        borderVisible: true,
      },
    })

    candleSeriesRef.current = chartRef.current.addCandlestickSeries({
      upColor: '#00C076',
      downColor: '#FF6838',
      borderVisible: false,
      wickUpColor: '#00C076',
      wickDownColor: '#FF6838',
    })

    return () => {
      chartRef.current.remove()
    }
  }, [])

  useEffect(() => {
    if (wsRef.current) {
      wsRef.current.close()
    }

    fetchHistoricalKlineData(
      defaultSymbol.split('/').join(''),
      timeInterval,
      candleSeriesRef
    )

    window.addEventListener('resize', () => {
      // if (chartRefContainer.current) {
      // chartRefContainer.current.style.width = 'fit-content'
      // chartRefContainer.current.style.height = 'fit-content'
      // }
      // console.log(chartRefContainer, chartRefContainer.current)
      console.log(chartRef, chartRef.current)
      if (window.innerWidth < 740) {
        chartRef.current.resize(
          0.95 * window.innerWidth,
          0.6 * window.innerWidth
        )
      } else {
        chartRef.current.resize(
          0.45 * window.innerWidth,
          0.4 * window.innerWidth
        )
      }
    })

    // window.onresize = () => {

    // }

    const wsEndpoint = `wss://stream.binance.com:443/ws/${defaultSymbol
      .toLowerCase()
      .replace('/', '')}@kline_${timeInterval}`
    const ws = new WebSocket(wsEndpoint)
    wsRef.current = ws

    ws.onopen = () => {
      console.log('Connected to WebSocket server for real-time trade updates')
    }

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)
      const kline = data.k
      if (kline.x) {
        const newKline = {
          time: kline.t / 1000, // Convert from milliseconds to seconds
          open: parseFloat(kline.o),
          high: parseFloat(kline.h),
          low: parseFloat(kline.l),
          close: parseFloat(kline.c),
        }
        candleSeriesRef.current.update(newKline)
      }
    }

    ws.onerror = (error) => {
      console.error('WebSocket error:', error)
    }

    ws.onclose = (event) => {
      console.log(
        `WebSocket closed with code: ${event.code}, reason: ${event.reason}`
      )
    }

    return () => {
      ws.close()
    }
  }, [defaultSymbol, timeInterval])

  return (
    <div className='chart__container'>
      <ChartHeader />
      <div
        className='chart__main'
        ref={chartRefContainer}
        // style={{ width: '100%', height: 0.7 * window.innerWidth }}
      ></div>
    </div>
  )
}

export default Chart
