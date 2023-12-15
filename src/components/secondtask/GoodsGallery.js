import React from 'react';
import GoodsCard from './GoodsCard';
import './styles.css'

import Banana from '../../images/banana.png';
import Apple from '../../images/apple.png';
import Pineapple from '../../images/pineapple.png';
import Watermelon from '../../images/watermelon.png';
import Carambola from '../../images/carambola.png';
import Pitaya from '../../images/pitaya.png';

function GoodsGallery() {
    const goods = [
        { id: 1, title: "Банан", price: 15, image: Banana },
        { id: 2, title: "Яблуко", price: 10, image: Apple },
        { id: 3, title: "Ананас", price: 25, image: Pineapple },
        { id: 4, title: "Кавун", price: 25, image: Watermelon },
        { id: 5, title: "Карамбола", price: 250, image: Carambola },
        { id: 6, title: "Пітайя", price: 200, image: Pitaya },
    ];

    return (
        <div className="goods-gallery">
            {goods.map(good => (
                <GoodsCard key={good.id} title={good.title} price={good.price} image={good.image} />
            ))}
        </div>
    );
}

export default GoodsGallery;