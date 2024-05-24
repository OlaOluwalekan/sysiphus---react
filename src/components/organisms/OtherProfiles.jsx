import { FaBarsStaggered, FaGlobe, FaRightFromBracket } from 'react-icons/fa6'
import './other_profiles.css'

const OtherProfiles = ({ handleClick }) => {
  return (
    <div className='profile__others'>
      <span className='profile__others__globe'>
        <FaGlobe />
      </span>
      <span className='profile__others__logout'>
        <FaRightFromBracket />
      </span>
      <button className='nav__button' onClick={handleClick}>
        <FaBarsStaggered />
      </button>
    </div>
  )
}

export default OtherProfiles
