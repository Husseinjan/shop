import React from "react";
import "./main.css";
import { cardsdata } from "./data";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <div className='container'>
        {cardsdata.map(el => {
          const { id, name, img, desc, price } = el;
          return (
            <div className='item' key={id}>
              <img src={img} alt={name} />
              <h2>{name}</h2>
              <p>{desc}</p>
              <b>{price}₽</b>
              <div className='add_to_cart'>+</div>
            </div>
          );
        })}
      </div>
      <Link to='/selfdev'>
        <button className='see_all'>
          Все книги<i className='chevron fa-solid fa-chevron-right fa-flip'></i>
        </button>
      </Link>
    </>
  );
}
