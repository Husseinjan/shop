import React from 'react';
import './aboutbook.css';
import { useParams } from 'react-router-dom';

import SelfDevelop from './SelfDevelop';
import Header from './Header';

function AboutBook() {
  const { bookId } = useParams();
  const bookDetails = SelfDevelop.find((book) => book.id === bookId);

  return (
    <>
      <Header />
      <div className="container1">
        <div className="image-container">
          <img
            src={bookDetails.img}
            alt={bookDetails.name}
            className="product-image"
          />
        </div>
        <div className="text-container">
          <h1 className="product-title">{bookDetails.name}</h1>
          <p className="product-description">{bookDetails.desc}</p>
          <div className="product-features">
            <div className="feature-item">
              <span>Автор:</span>
              <span>{bookDetails.author}</span>
            </div>
            <div className="feature-item">
              <span>Кол.страниц:</span>
              <span>{bookDetails.pages}</span>
            </div>
            <div className="feature-item">
              <span>Купили:</span>
              <span>{bookDetails.bought}</span>
            </div>
          </div>
          <div className="product-details">
            <div className="product-price">
              <div className="old-price">50₽</div>
              <div className="price">{bookDetails.price}₽</div>
              <div className="discount">Cкидка</div>
            </div>
            <div className="product-quantity">
              <label>Количество:</label>
              <input type="number" defaultValue="1" min="1" max="10" />
            </div>
          </div>
          <div className="cont_btn">
            <button className="buy-button">Купить</button>
            <button className="btn_fav">
              <i
                class="fa-solid fa-heart fa-beat"
                style={{ color: 'white' }}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutBook;
