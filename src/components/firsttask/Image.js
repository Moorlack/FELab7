import React, { useState } from 'react';
import './ImageStyle.css';
import imageSrc from '../../images/lviv.png';

function Image() {
    const [imageExists, setImageExists] = useState(false);

    const handleAdd = () => {
        setImageExists(true);
    };

    const handleEnlarge = () => {
        const imgElement = document.querySelector('.lviv');
        imgElement.style.width = `${imgElement.clientWidth + 20}px`;
    };

    const handleReduce = () => {
        const imgElement = document.querySelector('.lviv');
        imgElement.style.width = `${Math.max(imgElement.clientWidth - 20, 20)}px`;
    };

    const handleRemove = () => {
        setImageExists(false);
    };

    return (
        <div>
            {imageExists && (
                <div id="image-container">
                    <img src={imageSrc} alt="славетний Львів" className="lviv" />
                </div>
            )}
            <div className="buttons">
                <button onClick={handleAdd} disabled={imageExists}>Додати зображення</button>
                <button onClick={handleEnlarge} disabled={!imageExists}>Збільшити зображення</button>
                <button onClick={handleReduce} disabled={!imageExists}>Зменшити зображення</button>
                <button onClick={handleRemove} disabled={!imageExists}>Видалити зображення</button>
            </div>
        </div>
    );
}

export default Image;