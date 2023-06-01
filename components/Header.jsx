import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import "./header.css";
export default function Header({ onAdd }) {
  const [showMenu, setShowMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const cart = useSelector(state => state.cart);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <header className='header'>
      <div className='cont'>
        <Link to='/'>
          <span className='logo'>TAJ BOOK</span>
        </Link>
        <ul className='nav'>
          <li>
            <Link to='/'>Главная</Link>
          </li>
          <li onClick={handleMenuClick}>
            Каталог
            <i className='fa fa-chevron-down fa-flip i2'></i>
          </li>
          <li>
            <Link to='/reviews'>Отзывы</Link>
          </li>
          <li>
            <i className='fa-regular fa-heart i1'></i>
          </li>
          <li>
            <i className='fa-regular fa-user i1'></i>
          </li>
          <li className={`${openCart && "active"}`} onClick={toggleCart}>
            <i className='fa-solid fa-cart-shopping i1'></i>
            <span className='cart-count'>{cart.length}</span>
          </li>
        </ul>
      </div>
      {openCart && <Cart />}
      {showMenu && (
        <ul className='catalog'>
          <li>
            <Link to='/selfdev'>Саморазвитие</Link>
          </li>
          <li>Детские книги</li>
          <li>Бизнес-литература</li>
          <li>Научно-популярная</li>
          <li>Хобби</li>
          <li>Учебная литература</li>
          <li>Религия</li>
        </ul>
      )}
    </header>
  );
}
