import { useState } from 'react'
import MobileNav from '../molecules/MobileNav'
import OtherProfiles from '../organisms/OtherProfiles'
import Profile from '../organisms/Profile'
import './profile_template.css'

const ProfileTemplate = () => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  return (
    <div className='profile'>
      <Profile />
      <OtherProfiles handleClick={() => setNavIsOpen(!navIsOpen)} />
      {navIsOpen && <MobileNav />}
    </div>
  )
}

export default ProfileTemplate
