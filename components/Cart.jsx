import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./cart.css";

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const handleRemoveItem = id => {
    dispatch({ type: "REMOVE_CART", payload: id });
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  function modalOpen() {
    setModal(!modal);
  }
  return (
    <div className='cart_main'>
      {modal && (
        <div className='modal_main'>
          <p>{totalPrice}</p>
        </div>
      )}
      {cart.map(el => {
        return (
          <div key={el.id} className='cart_block'>
            <img src={el.img} className='cart_img' />
            <div className='cart_text'>
              <p className='cart_name'>{el.name}</p>
              <p className='cart_price'>{el.price}₽</p>
            </div>
            <i
              className='fa-solid fa-trash t_icon'
              onClick={() => handleRemoveItem(el.id)}></i>
          </div>
        );
      })}
      {cart.length > 0 ? (
        <p className='total'>Общая сумма: {totalPrice}₽</p>
      ) : (
        <h2>НЕТ товаров</h2>
      )}
    </div>
  );
};

export default Cart;
