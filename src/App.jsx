import './styles/App.scss'

import ProductBrowser from './components/ProductBrowser/ProductBrowser'
import Header from './components/Header/Header'

function App() {

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    document.querySelector('.bg-img').style.filter = `brightness(${100 - scrollY / 10 < 70 ? 70 : 100 - scrollY / 10}%)`;
  });

  return (
    <>
      <Header />
      <ProductBrowser />
      <img className='bg-img' src='./image-assets/background-img.jpg' />
    </>
  )
}

export default App