import { useEffect, useState } from 'react'
import './login.css'
import md5 from 'blueimp-md5'
import { useDispatch, useSelector } from 'react-redux'
import { addCurrentUser } from '../../features/generalSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()
  const { currentUser } = useSelector((store) => store.general)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const hash = md5(email.trim().toLowerCase())
    dispatch(addCurrentUser(`https://www.gravatar.com/avatar/${hash}`))
    // console.log(hash)
  }

  useEffect(() => {
    if (currentUser) {
      navigate('/')
    }
  }, [currentUser])

  return (
    <div className='login__page'>
      <h2>Login</h2>
      <p>Enter your email address to login</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='emample@mail.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
