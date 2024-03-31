import React from 'react';

function MenuCard(props) {
  return (
    <div className="menuCard">
      <img src={props.image} alt="menuImage" />
      <section>
        <div>
          <p className="menuCard-name">{props.name}</p>
          <p className="menuCard-price">$ {props.price.toFixed(2)}</p>
        </div>
        <p className="menuCard-text">{props.text}</p>
        <a href="/">Order a Delivery</a>
      </section>
    </div>
  );
}

export default MenuCard;
