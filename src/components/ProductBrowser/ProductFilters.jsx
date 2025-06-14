import './product-browser.css'

function ProductFilters({ onSelect }) {
    let currentFilter = "all"

    function setFilter(filter) {
        onSelect(filter)
        currentFilter = filter

        let buttonCon = document.querySelector('.button-container')
        for (let i = 0; i < buttonCon.children.length; i++) {
            const e = buttonCon.children[i];
            e.classList.remove('selected')
        }
        document.querySelector(`.${currentFilter}`).classList.add('selected')
    }

    return (
        <div className='button-container'>
            <button className='all' onClick={() => setFilter("all")}>All</button>
            <button className='genshin' onClick={() => setFilter("genshin")}>Genshit</button>
            <button className='dandadan' onClick={() => setFilter("dandadan")}>Dandadan</button>
            <button className='minecraft' onClick={() => setFilter("minecraft")}>Minecraft</button>
            <button className='mario' onClick={() => setFilter("mario")}>Mario</button>
        </div>
    );
}

export default ProductFilters;