import { FaBarsStaggered, FaGlobe, FaRightFromBracket } from 'react-icons/fa6'
import './other_profiles.css'
import { useDispatch, useSelector } from 'react-redux'
import { addCurrentUser, toggleNavbar } from '../../features/generalSlice'

const OtherProfiles = () => {
  const dispatch = useDispatch()
  const { navIsOpen, currentUser } = useSelector((store) => store.general)

  return (
    <div className='profile__others'>
      <span className='profile__others__globe'>
        <FaGlobe />
      </span>
      {currentUser && (
        <button
          className='profile__others__logout'
          onClick={() => dispatch(addCurrentUser(null))}
        >
          <FaRightFromBracket />
        </button>
      )}
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
