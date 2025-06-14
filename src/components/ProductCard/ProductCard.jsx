import './product-card.scss'

function ProductCard(props) {
    let imageDir = `./keychain-images/${props.id}.webp`

    return (
        <div className='product-card'>
            <div className='image-container'>
                <div className='inner-container'>
                    <img src={imageDir} onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = './keychain-images/placeholder.png'
                    }} />
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