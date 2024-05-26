import { FaUserCircle } from 'react-icons/fa'
import './profile.css'
import { FaAngleRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import UserProfile from '../molecules/UserProfile'

const Profile = () => {
  const { currentUser } = useSelector((store) => store.general)

  return (
    <div className='profile__user'>
      <div className='profile__user__icon'>
        {currentUser ? (
          <UserProfile />
        ) : (
          <Link to='/login' className='profile__user--unauthenticated'>
            <FaUserCircle />
          </Link>
        )}
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
