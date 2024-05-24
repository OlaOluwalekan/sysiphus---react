import { FaUserCircle } from 'react-icons/fa'
import './profile.css'
import { FaAngleRight } from 'react-icons/fa6'

const Profile = () => {
  return (
    <div className='profile__user'>
      <div className='profile__user__icon'>
        <span className='profile__user--unauthenticated'>
          <FaUserCircle />
        </span>
      </div>
      <div className='profile__user_details'>
        <p className='profile__user__name'>Olamide Badmus</p>
        <span>
          <FaAngleRight />
        </span>
      </div>
    </div>
  )
}

export default Profile
