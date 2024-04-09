import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='/' activeClassname='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' activeClassname='active'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact/contact' activeClassname='active'>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
