import Logo from '../atoms/Logo'
import DesktopNav from '../molecules/DesktopNav'
import Column from '../templates/Column'
import ProfileTemplate from '../templates/ProfileTemplate'
import Profile from './Profile'
import './header.css'

const Header = () => {
  return (
    <header className='header'>
      <Column styleClass='header__col header__col--1'>
        <Logo />
        <DesktopNav />
      </Column>
      <Column styleClass='header__col header__col--2'>
        <ProfileTemplate />
      </Column>
    </header>
  )
}

export default Header
