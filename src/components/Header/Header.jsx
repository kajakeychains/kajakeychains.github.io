import './header.scss'

function Header() {


    return (
        <header>
            <h1>KAJA Keychains</h1>
            <div className='about-container'>
                <div className='about-section'>
                    <p>
                        Come to our store on <b>Business/Multicultural day!</b> <br />
                        (Thursday, 26th July) <br />
                        <b>Located on the (hopefully side) of the hall.</b><br />
                    </p>
                </div>
            </div>
            <div className='bottom-line' />
        </header>
    );
}

export default Header;