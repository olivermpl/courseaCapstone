import React from 'react';

function Hero() {
  return (
    <div className="hero">
      {' '}
      <article>
        <h1 style={{ color: '#f4ce14' }}>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a famliy owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist
        </p>
        <button className="btn-primary">
          <a href="/booking">
            <span>Reserve a Table</span>
          </a>
        </button>
      </article>
      <div>
        <img src="/restauranfood.jpg" alt="heroPic" />
      </div>
    </div>
  );
}

export default Hero;
