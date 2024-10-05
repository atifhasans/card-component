import React from 'react';
import './Cards.css';
import favouriteIcon from '../assets/favourite-icon.png';

const Cards = ({ title, price, imageUrl, location, date, link }) => {
    return (
        <article className="listing-card">
            <div className="image-container">
                <a href={link} title={title}>
                    <img
                        role="presentation"
                        src={imageUrl} // Use the imageUrl directly
                        className='thumbnail'
                        alt={title}
                        title={title}
                        aria-label='Cover photo'
                    />
                </a>
            </div>
            <div className="details">
                <a href={link} title={title}>
                    <div className="title">
                        <p>{title}</p>
                    </div>
                </a>
                <div className="price">
                    <span>{price}</span>
                </div>
                <div className="favorite">
                    <img src={favouriteIcon} alt="Favorite icon" className="favorite-icon" />
                </div>
                <div className="location-date">
                    <span className="location">{location}</span>
                    <span className="date">{date}</span>
                </div>
            </div>
        </article>
    );
}

export default Cards;
