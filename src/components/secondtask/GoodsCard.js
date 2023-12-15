import React from 'react';
import './styles.css'

function GoodsCard({ image, title, price }) {
    return (
        <div className="goods-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{price} грн</p>
        </div>
    );
}

export default GoodsCard;