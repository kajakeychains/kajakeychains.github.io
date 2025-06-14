import './header.scss'

function Header() {


    return (
        <header>
            <h1>KAJA Keychains</h1>
            <div className='about-container'>
                <div className='about-section'>
                    <img className='gojo-image' src='./image-assets/gojo-fingers.png' />
                </div>
                <div className='about-section'>
                    <ul>
                        <li>Come to our store on <b>Business/Multicultural day!</b> (Thursday, 26th July)</li>
                        <li>We sell a <b>wide range of keychains</b> from popular media, such as <b>Minecraft</b> and <b>Jujutsu Kaisen</b></li>
                        <li><b>Located on the (hopefully side) of the hall.</b></li>
                    </ul>
                </div>
            </div>
            <div className='bottom-line' />
        </header>
    );
}

export default Header;