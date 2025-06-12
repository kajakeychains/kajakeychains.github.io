import { useEffect, useState } from "react";

import ProductCard from "../ProductCard/ProductCard";
import ProductFilters from "./ProductFilters";
import './product-browser.css'

function ProductBrowser() {
    const [keychains, setKeychains] = useState({});
    const [currentFilter, setFilter] = useState("all");

    useEffect(() => {
        let jsonAddr = './product-information.json'
        fetch(jsonAddr)
            .then((res) => res.json())
            .then((data) => setKeychains(data))
            .catch((err) => console.error(`Failed to load ${jsonAddr}:`, err));
    }, []);

    const handleFilterButtons = (value) => {
        setFilter(value);
    };

    return (
        <>
            <ProductFilters onSelect={handleFilterButtons} />
            <div className="product-browser">
                {Object.entries(keychains).map(([id, item]) => {
                    if (item.franchise === currentFilter || currentFilter === "all") {
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
        </>
    );
}

export default ProductBrowser;