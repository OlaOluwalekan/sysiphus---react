import { useDispatch, useSelector } from 'react-redux'
import { intervalsData } from '../../data/intervals'
import './chart_header.css'
import { changeInterval } from '../../features/generalSlice'

const ChartHeader = () => {
  const dispatch = useDispatch()
  const { timeInterval } = useSelector((store) => store.general)

  return (
    <div className='chart__header'>
      <section className='chart__interval'>
        <span>Time</span>
        <article className='interval__list'>
          {intervalsData.map((interval) => {
            return (
              <span
                key={interval}
                className={`interval__item ${
                  timeInterval === interval ? 'active' : ''
                }`}
                onClick={() => dispatch(changeInterval(interval))}
              >
                {interval}
              </span>
            )
          })}
        </article>
      </section>
    </div>
  )
}

export default ChartHeader
