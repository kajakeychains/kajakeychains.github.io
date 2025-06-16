import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import ProductFilters from "./ProductFilters";
import './product-browser.scss';

function ProductBrowser() {
    const [keychains, setKeychains] = useState(null);
    const [currentFilter, setFilter] = useState("all");

    useEffect(() => {
        let jsonAddr = '/product-information.json';
        fetch(jsonAddr)
            .then((res) => res.json())
            .then((data) => setKeychains(data))
            .catch((err) => console.error(`Failed to load ${jsonAddr}:`, err));
    }, []);

    const handleFilterButtons = (value) => {
        setFilter(value);
    };

    if (!keychains || !keychains.data || !keychains.prices) {
        return <div>Loading products...</div>;
    }

    return (
        <>
            <ProductFilters onSelect={handleFilterButtons} />
            <div className="product-browser">
                {Object.entries(keychains.data).map(([id, item]) => {
                    if (item.franchise === currentFilter || currentFilter === "all") {
                        return (
                            <ProductCard
                                key={id}
                                id={id}
                                name={item.name}
                                price={keychains.prices[item.franchise] || 0}
                                franchise={item.franchise}
                                stock={item.stock}
                            />
                        );
                    }
                    return null;
                })}
            </div>
        </>
    );
}

export default ProductBrowser;
