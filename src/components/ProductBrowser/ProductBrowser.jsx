import { useEffect, useState } from "react";

import ProductCard from "../ProductCard/ProductCard";
import './product-browser.css'

function ProductBrowser() {
    const [keychains, setKeychains] = useState({});
    let currentFilter = "minecraft"

    useEffect(() => {
        fetch('/product-information.json')
            .then((res) => res.json())
            .then((data) => setKeychains(data))
            .catch((err) => console.error("Failed to load JSON:", err));
    }, []);

    return (
        <div className="product-browser">
            {Object.entries(keychains).map(([id, item]) => {
                if (item.franchise === currentFilter) {
                    return (
                        <ProductCard
                            key={id}
                            name={item.name}
                            price={item.price}
                            franchise={item.franchise}
                            stock={item.stock}
                        />
                    );
                } else {
                    return null;
                }
            })}
        </div>
    );
}

export default ProductBrowser;