import { useState } from 'react';
import './product-browser.scss';

function ProductFilters({ onSelect }) {
    const [filter, setFilter] = useState('all');

    const buttons = [
        { label: 'All', value: 'all' },
        { label: 'Genshin', value: 'genshin' },
        { label: 'Dandadan', value: 'dandadan' },
        { label: 'Jujutsu Kaisen', value: 'jujutsu-kaisen' },
        { label: 'Minecraft', value: 'minecraft' },
        { label: 'Mario', value: 'mario' },
    ];

    function handleFilterChange(value) {
        setFilter(value);
        onSelect(value);
    }

    return (
        <div className="button-container">
            {buttons.map(({ label, value }) => (
                <button
                    key={value}
                    className={`${value} ${filter === value ? 'selected' : ''}`}
                    onClick={() => handleFilterChange(value)}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}

export default ProductFilters;