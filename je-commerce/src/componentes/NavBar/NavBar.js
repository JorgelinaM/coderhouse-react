import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <header className='c-navbar'>
        <h1>JE-Commerce</h1>
        <nav>
            <ul className='c-navbar__list'>
                <li><a href="/">Libreria</a></li>
                <li><a href="/">Libros</a></li>
                <li><a href="/">Gráfica</a></li>
            </ul>
        </nav>
        <CartWidget />
    </header>
  )
}

export default NavBar