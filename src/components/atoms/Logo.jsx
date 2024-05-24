import { Link } from 'react-router-dom'
import SiteLogo from '/images/logo.svg'
import './logo.css'

const Logo = () => {
  return (
    <Link to='/' className='logo'>
      <img src={SiteLogo} alt='Site Logo' className='logo__image' />
    </Link>
  )
}

export default Logo
