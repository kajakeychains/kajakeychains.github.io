import './styles/App.scss'

import ProductBrowser from './components/ProductBrowser/ProductBrowser'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <Header />
      <ProductBrowser />
      <img className='bg-img' src='./image-assets/background-img.jpg' />
    </>
  )
}

export default App