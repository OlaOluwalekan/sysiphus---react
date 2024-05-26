import { useDispatch, useSelector } from 'react-redux'
import { links } from '../../data/links'
import NavigationLink from '../atoms/NavigationLink'
import './mobile_nav.css'
import { addCurrentUser, toggleNavbar } from '../../features/generalSlice'

const MobileNav = () => {
  const dispatch = useDispatch()
  const { navIsOpen, currentUser } = useSelector((store) => store.general)

  return (
    <nav className='menu--mobile'>
      <ul className='menu__list--mobile'>
        {links.map((link) => {
          return (
            <NavigationLink
              key={link.id}
              {...link}
              styleClass='nav__link nav__item--mobile'
            />
          )
        })}
        {currentUser && (
          <li className='nav__item--mobile'>
            <button
              className='logout--mobile'
              onClick={() => {
                toggleNavbar(false)
                dispatch(addCurrentUser(null))
              }}
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default MobileNav
