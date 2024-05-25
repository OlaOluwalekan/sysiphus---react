import { useState } from 'react'
import MobileNav from '../molecules/MobileNav'
import OtherProfiles from '../organisms/OtherProfiles'
import Profile from '../organisms/Profile'
import './profile_template.css'
import { useSelector } from 'react-redux'

const ProfileTemplate = () => {
  const { navIsOpen } = useSelector((store) => store.general)

  return (
    <div className='profile'>
      <Profile />
      <OtherProfiles />
      {navIsOpen && <MobileNav />}
    </div>
  )
}

export default ProfileTemplate
