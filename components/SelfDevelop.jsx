import { useEffect, useState } from "react";
import "./main.css";
import Header from "./Header";
import SortButtons from "./SortButton";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Tumbler from "./Tumbler";

const SelfDevelop = () => {
  const [baza, setBaza]=useState([])
  const [data, setData] = useState(baza);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch("http://f0809567.xsph.ru/data.json")
      .then((response) => response.json())
      .then((json) => setBaza(json));
  }, []);
  console.log(baza)

  const onAdd = (id) => {
    const itemExists = cart.some((item) => item.id === id);

    if (itemExists) {
      alert(`Этот товар уже в корзине`);
      return;
    }

    const book = data.find((book) => book.id === id);
    const { id: bookId, name, price, img } = book;

    dispatch({
      type: "ADD_CART",
      payload: { id: bookId, name, price, img },
    });
  };

  const sortPopularity = () => {
    setData([...data].sort((a, b) => b.bought - a.bought));
  };

  const sortPriceDescending = () => {
    setData([...data].sort((a, b) => b.price - a.price));
  };

  const sortPriceAscending = () => {
    setData([...data].sort((a, b) => a.price - b.price));
  };

  const sortAlphabetStart = () => {
    setData([...data].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const sortAlphabetEnd = () => {
    setData([...data].sort((a, b) => b.name.localeCompare(a.name)));
  };

  const [value, setValue] = useState("");

  const filteredBooks = data.filter((book) =>
    book.name.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="sort-buttons">
        <SortButtons
          sortAlphabetEnd={sortAlphabetEnd}
          sortAlphabetStart={sortAlphabetStart}
          sortPriceDescending={sortPriceDescending}
          sortPriceAscending={sortPriceAscending}
          sortPopularity={sortPopularity}
        />

        <div className="search-container">
          <input
            type="text"
            placeholder="Поиск..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>

      <div className="container">
        {data.length > 0 ? (
          filteredBooks.map((book) => {
            const { id, name, img, price, desc } = book;

            return (
              <div className="main" key={id}>
                <div className="item">
                  <img src={img} alt={name} />
                  <Link to={`/aboutbook/${id}`}>
                    <h2>{name}</h2>
                  </Link>
                  <p>{desc}</p>
                  <b>{price}₽</b>
                  <div className="add_to_cart" onClick={() => onAdd(id)}>
                    +
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>
            По вашему запросу "<span style={{ color: "red" }}>{value}</span>" не найдено товаров
          </p>
        )}
      </div>
    </>
  );
};

export default SelfDevelop;
