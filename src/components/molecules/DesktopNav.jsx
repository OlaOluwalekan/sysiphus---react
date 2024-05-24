import { links } from '../../data/links'
import NavigationLink from '../atoms/NavigationLink'
import './desktop_nav.css'

const DesktopNav = () => {
  return (
    <ul className='menu--desktop'>
      {links.map((link) => {
        return (
          <NavigationLink
            key={link.id}
            {...link}
            styleClass='nav__item nav__item--desktop'
          />
        )
      })}
    </ul>
  )
}

export default DesktopNav
