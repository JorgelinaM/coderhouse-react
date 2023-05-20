import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <header className='c-navbar'>
      <Link to='/'><h1>JE-Commerce</h1></Link>
      <nav>
        <ul className='c-navbar__list'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/category/fantasy">Fantasy</Link></li>
          <li><Link to="/category/programming">Programming</Link></li>
          <li><Link to="/category/self-help">Self-help</Link></li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  )
}

export default NavBar