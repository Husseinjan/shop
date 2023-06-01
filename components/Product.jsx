import React from 'react';

const Product = ({ product, onRemove }) => {
  const { name, price } = product;

  const handleRemoveClick = () => onRemove(product);

  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={handleRemoveClick}>Remove</button>
    </div>
  );
};

export default Product;
