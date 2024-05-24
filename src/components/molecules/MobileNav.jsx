import { links } from '../../data/links'
import NavigationLink from '../atoms/NavigationLink'
import './mobile_nav.css'

const MobileNav = () => {
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
        <li className='nav__item--mobile'>
          <button className='logout--mobile'>Logout</button>
        </li>
      </ul>
    </nav>
  )
}

export default MobileNav
