import { useState } from 'react';
import './product-card.scss'

function ProductCard(props) {
    const [imgSrc, setImgSrc] = useState(`./keychain-images/${props.id}.webp`);
    const [attemptedWebp, setAttemptedWebp] = useState(false);

    const handleImageError = () => {
        if (!attemptedWebp) {
            setImgSrc(`./keychain-images/${props.id}.png`);
            setAttemptedWebp(true);
        } else {
            setImgSrc(`./keychain-images/placeholder.png`);
        }
    };

    return (
        <div className='product-card'>
            <div className='image-container'>
                <div className='inner-container'>
                    <img src={imgSrc} onError={handleImageError} alt={props.name} />
                </div>
            </div>
            <div className='text-container'>
                <h4>{props.name}</h4>
                <p>{
                    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
                        props.price,
                    )
                }</p>
            </div>
        </div>
    );
}

export default ProductCard