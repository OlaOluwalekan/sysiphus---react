import { NavLink } from 'react-router-dom'
import './navlink.css'

const NavigationLink = ({ path, text, styleClass }) => {
  return (
    <li className={styleClass}>
      <NavLink to={path}>{text}</NavLink>
    </li>
  )
}

export default NavigationLink
