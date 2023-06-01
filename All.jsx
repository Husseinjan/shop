import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Main from "./components/Main";

export default function All() {
  const [baza, setBaza] = useState();

  useEffect(() => {
    fetch("http://f0809567.xsph.ru/data.json")
      .then(response => response.json())
      .then(json => setBaza(json));
  }, []);

  return (
    <div>
      {Array.isArray(baza) && baza.map(book => {
        const { id, name, img, price, desc } = book;

        return (
          <div className='main' key={id}>
            <div className='item'>
              <img src={img} alt={name} />
              <h2>{name}</h2>
              <p>{desc}</p>
              <b>{price}₽</b>
            </div>
          </div>
        );
      })}

      <Header />
      <Banner />
      <Main />
    </div>
  );
}
