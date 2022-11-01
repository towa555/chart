import React from 'react';

function Card({item, handleClick}) {
    const{ id, title ,price } =item;
  return (

<div className="card">
    <div className="img"> <div className="color"></div></div>
    <div className="detail">
        <p className="title">{title}</p>
        <p>{price}</p>
        <p>{id}</p>
        <button onClick={() =>handleClick(item)}>Add to cart</button>
    </div>
</div>
  );
}

export default Card;
