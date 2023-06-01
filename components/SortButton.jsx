import React from 'react';

const SortButtons = ({
  sortPopularity,
  sortAlphabetEnd,
  sortAlphabetStart,
  sortPriceAscending,
  sortPriceDescending
}) => {
  return (
    <>
      <button className="sort-button"  onClick={sortPopularity}>Популярные</button>
      <button className="sort-button"  onClick={sortAlphabetStart}>По алфавиту (А-Я)</button>
      <button className="sort-button"  onClick={sortAlphabetEnd}>По алфавиту (Я-А)</button>
      <button className="sort-button"  onClick={sortPriceDescending}>По цене (по убыванию)</button>
      <button className="sort-button"  onClick={sortPriceAscending}>По цене (по возрастанию)</button>
    </>
  );
};

export default SortButtons;
