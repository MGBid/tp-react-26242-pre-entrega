import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { MisionVision } from './components/MisionVision/MisionVision';
import { AboutUs } from './components/AboutUs/AboutUs';
import './App.css';


function App() {

  return (
    <>
    <Header />
    <main>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/cart' element={<h1>Carrito</h1>} />
        <Route path='/product/:id' element={<ItemDetailContainer />} />
        <Route path='/mision-vision' element={<MisionVision />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
    </main>
    <Footer />
    </>
  )
}

export default App
