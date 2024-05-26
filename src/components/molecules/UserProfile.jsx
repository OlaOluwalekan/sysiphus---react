import './user_profile.css'
import { useSelector } from 'react-redux'

const UserProfile = () => {
  const { currentUser } = useSelector((store) => store.general)

  return (
    <div className='user__profile'>
      <img
        src={currentUser}
        alt='user photo'
        className='user__profile__image'
      />
    </div>
  )
}

export default UserProfile
