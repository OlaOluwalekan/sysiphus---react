import { FaBarsStaggered, FaGlobe, FaRightFromBracket } from 'react-icons/fa6'
import './other_profiles.css'
import { useDispatch, useSelector } from 'react-redux'
import { toggleNavbar } from '../../features/generalSlice'

const OtherProfiles = ({ handleClick }) => {
  const dispatch = useDispatch()
  const { navIsOpen } = useSelector((store) => store.general)

  return (
    <div className='profile__others'>
      <span className='profile__others__globe'>
        <FaGlobe />
      </span>
      <span className='profile__others__logout'>
        <FaRightFromBracket />
      </span>
      <button
        className='nav__button'
        onClick={() => dispatch(toggleNavbar(!navIsOpen))}
      >
        <FaBarsStaggered />
      </button>
    </div>
  )
}

export default OtherProfiles
