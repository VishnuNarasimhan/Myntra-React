import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';
import cardData from '../../data';

function Card() {
  return (
    <section className='card-section'>
      {cardData.map((product) => {
        const { id, cardImage, name } = product;
        return (
          <article className='card-article' key={id}>
            <Link to={id}>
              <img className='card-image' src={cardImage} alt={name} />
            </Link>
          </article>
        );
      })}
    </section>
  );
}

export default Card;
