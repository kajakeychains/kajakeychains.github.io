import './product-card.scss'

function ProductCard(props) {
    return (
        <div className='product-card'>
            <div className='image-container'>
                <img src='./keychain-images/placeholder.png'/>
            </div>
            <div className='text-container'>
                <p>{props.name}</p>
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